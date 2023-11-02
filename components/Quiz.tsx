"use client";
import { useEffect, useState } from "react";

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["London", "Berlin", "Paris", "Madrid"],
//     correctAnswer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Mars", "Venus", "Jupiter", "Earth"],
//     correctAnswer: "Mars",
//   },
//   // Add more questions here
// ];

export default function Quiz({ questions }: any) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [warning, setWarning] = useState(null);
  console.log(questions);
  const handleOptionChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      if (!quizCompleted) {
        e.preventDefault();
        alert("foo");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [quizCompleted]);
  const handleNextQuestion = () => {
    const currentQuestion: any = questions[currentQuestionIndex];

    if (currentQuestion.correctAnswer === selectedOption) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4 text-black">
      {quizCompleted ? (
        <div className="bg-green-200 p-4 rounded">
          <h2 className="text-2xl font-semibold">Quiz Completed!</h2>
          <p className="text-lg">
            Your Score: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold">
            Question {currentQuestionIndex + 1}:
          </h2>
          <p className="text-lg text-black my-2">{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
