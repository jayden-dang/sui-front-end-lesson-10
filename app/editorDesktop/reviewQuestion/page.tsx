"use client";

import { useState } from "react";

const question = {
  question: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Earth"],
  correctAnswer: "Mars",
};

export default function ReviewQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleVerification = () => {
    if (selectedOption === question.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4 text-black">
        {question.question}
      </h2>
      <form>
        {question.options.map((option: any, index: any) => (
          <div key={index} className="mb-2">
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={handleVerification}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Verify
        </button>
      </form>
      {isCorrect !== null && (
        <p className={`mt-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? "Correct!" : "Incorrect."}
        </p>
      )}
    </div>
  );
}
