import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import questions from './questions.js';
import QuestionBox from './components/QuestionBox';
import Results from './components/Results';
import Timer from './components/Timer';


const MyQuiz = () => {
  const [questionRandom, setQuestionRandom] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [OnSubmit, setOnSubmit] = useState(false);
  const [Time, setTime] = useState(1)

  const getQuestions = () => {
    questions().then(question => {
      setQuestionRandom(question);
    });
  };
  const computeAnswer = ({ questionId, selected }) => {
    let questionAnswered = questionRandom.find(s => s.questionId === questionId);
    if (questionAnswered.correct === selected) {
      setScore(pre => pre + 1);
    }
  }

  const playAgain = () => {
    window.location.href = '/';
  };

  const ForceSubmit = () => {
    setShowAnswer(true);
    setOnSubmit(true);
    setTime(0);
  }

  useEffect(() => {
    getQuestions();
  }, []);


  return (
    <div className="container-sm border content">
      {OnSubmit ? (<Results score={score} playAgain={playAgain} />) : null}
      <div className="title">Quiz Game</div>
      {OnSubmit
        ? null
        : (<>
          <div className="action-container">
            <div className="action-container-submit">
              <button className="submitButton" onClick={() => {
                ForceSubmit();
              }}>Submit</button>
            </div>
            <div className="action-container-timer">
              <Timer minutes={Time} onTimeExpired={(e) => ForceSubmit()} />
            </div>
          </div>
        </>)}
      {questionRandom.length > 0 &&
        questionRandom.map(({ question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={answers}
            questionId={questionId}
            key={questionId}
            correct={correct}
            showAnswer={showAnswer}
            onSelection={selectedAnswer => computeAnswer(selectedAnswer)}
          />
        ))}
    </div>
  );
}


render(<MyQuiz />, document.getElementById("root"));


