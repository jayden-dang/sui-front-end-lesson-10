"use client";
import { useState } from "react";
import React from "react";

export default function CreateQuestion() {
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (index: any, value: any) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const questionData = {
      question,
      options,
    };

    // You can send the questionData to your backend or handle it as needed
    console.log(questionData);
  };
  return (
    <div>
      <h2 className="text-black m-3">
        <i>
          Creating a question cost X SUI, you may get some money if the question
          is good and is used in exams
        </i>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Question:
          </label>
          <input
            type="text"
            value={question}
            onChange={(e: any) => setQuestion(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Options:
          </label>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={option}
                onChange={(e: any) => handleOptionChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Question
          </button>
        </div>
      </form>
    </div>
  );
}
