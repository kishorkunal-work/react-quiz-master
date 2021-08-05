const qBank = [
  {
    question:
      "Which type of JavaScript language is ",
    answers: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
    correct: "Object-Based",
    questionId: "1"
  },
  {
    question:
      'Which one of the following also known as Conditional Expression:?',
    answers: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
    correct: "immediate if",
    questionId: "2"
  },
  {
    question:
      'The "function" and " var" are known as:?',
    answers: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
    correct: "Declaration statements",
    questionId: "3"
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      "Global variable",
      "The local element",
      "The two of the above",
      "None of the above"
    ],
    correct: "The local element",
    questionId: "4"
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    answers: [
      "Preprocessor",
      "Triggering Event",
      "RMI",
      "Function/Method"
    ],
    correct: "Function/Method",
    questionId: "5"
  },
  {
    question:
      'Which of the following type of a variable is volatile?',
    answers: ["Mutable", "Dynamic", "Immutable"],
    correct: "Immutable",
    questionId: "6"
  },
  {
    question: "Which of the following option is used as hexadecimal literal beginning?",
    answers: ["00", "0x", "0X", "Both 0x and 0X"],
    correct: "Both 0x and 0X",
    questionId: "7"
  },
  {
    question:
      "In the JavaScript, which one of the following is not considered as an error:",
    answers: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
    correct: "Division by zero",
    questionId: "8"
  }
];

export default (n = 5) => {
  let ques = qBank.sort(() => 0.5 - Math.random()).slice(0, n);
  return Promise.resolve(ques
    .map(s => ({
      ...s,
      answers: s.answers
        .map(a => ({
          text: a,
          selected: false
        }))
    })));
};
