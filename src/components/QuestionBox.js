import React, { useState } from 'react';

const QuestionBox = ({ question, options, onSelection, questionId, showAnswer, correct }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className={`questionBox ${answer.find(s => s.selected) ? "questionBox-answered" : null}`}>
      <div className="question">
        {question}
      </div>
      {answer.map((option, index) => (
        <button
          key={index}
          className={`answerBtn 
                    ${option.selected && !showAnswer ? 'selected' : ''} 
                    ${showAnswer && option.selected && option.text === correct ? 'correctAnswer' : ''}
                    ${showAnswer && option.selected && option.text !== correct ? 'wrongAnswer' : ''}
                    ${showAnswer && option.text === correct ? 'correctAnswer' : ''}
                    `}
          onClick={() => {
            answer.forEach(element => {
              element.selected = element.text === option.text
            });
            setAnswer([...answer]);
            onSelection({ questionId: questionId, selected: option.text });
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;