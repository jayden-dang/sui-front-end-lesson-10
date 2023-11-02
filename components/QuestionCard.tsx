// components/ItemCard.js
import React from "react";

const QuestionCard = ({ title, score1, score2, score3 }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-blue-200 p-2 rounded-md">
          <p className="font-semibold text-blue-700">Number of review</p>
          <p>{score1}</p>
        </div>
        <div className="bg-green-200 p-2 rounded-md">
          <p className="font-semibold text-green-700">
            Overall difficulty score
          </p>
          <p>{score2}</p>
        </div>
        <div className="bg-yellow-200 p-2 rounded-md">
          <p className="font-semibold text-yellow-700">
            Number of usage in exams
          </p>
          <p>{score3}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
