"use client";
import Quiz from "@/components/Quiz";
import { useState } from "react";
import Select from "react-select";
import { Circles } from "react-loader-spinner";
import { useWalletKit } from "@mysten/wallet-kit";

interface Question {
  description: string;
  options: Array<string>;
  answer_index: number;
}

const difficultyLevel = [
  { value: "A1", label: "A1" },
  { value: "A2", label: "A2" },
  { value: "B1", label: "B1" },
  { value: "B2", label: "B2" },
  { value: "C1", label: "C1" },
  { value: "C2", label: "C2" },
];
const baseUrl = "http://localhost:3001/question/exercise";
export default function Practice() {
  const [difficulty, setDifficulty] = useState(difficultyLevel[0]);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [question, setQuestion] = useState<Question>();
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { currentAccount } = useWalletKit();
  const handleOptionChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  const verify = () => {
    if (selectedOption == question?.answer_index) {
      alert("correct");
    } else {
      alert("wrong");
    }
    setVerified(true);
  };
  const getQuestion = async () => {
    setIsLoading(true);
    try {
      let queryParams = {};
      if (currentAccount) {
        queryParams = new URLSearchParams({
          user_address: currentAccount.address,
          difficuly: difficulty.value,
        });
        console.log(queryParams);
      } else {
        throw new Error();
      }
      const url = `${baseUrl}`;

      // Options for the fetch request
      const options = {
        method: "GET", // HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE', etc.)
        headers: {
          "Content-Type": "application/json", // Content type of the request body
          // Add other headers as needed (e.g., authorization headers)
        },
        parameters: queryParams, // Convert data to JSON format
      };
      console.log("fetch");
      const res = await fetch(url, options)
        .then((response) => {
          console.log("Res" + JSON.stringify(response));
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setQuestion(res.exercise);
      setVerified(false);
      setIsLoading(false);
    } catch (error) {
      throw new Error();
    }
  };
  return (
    <>
      <div className="w-full h-full ml-4 bg-slate-200">
        <h1 className="w-full text-center text-2xl font-semibold text-black pt-4">
          Practice questions
        </h1>
        <div className="flex flex-row justify-around w-full text-black p-3">
          <h2>
            <i>Choose a level of difficulty :</i>
          </h2>
          <Select
            options={difficultyLevel}
            isClearable={false}
            onChange={(e: any) => setDifficulty(e)}
            value={difficulty}
          />
        </div>
        <div className="container mx-auto w-full h-full p-4 text-black ">
          {isLoading ? (
            <>
              <div className="w-full justify-center flex p-4">
                <Circles
                  height="50"
                  width="50"
                  color="gray"
                  ariaLabel="loading"
                />
              </div>
            </>
          ) : question == null ? (
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4"
                onClick={(e) => getQuestion()}
              >
                get question
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white p-4 rounded shadow-md">
                <p className="text-lg text-black my-2">
                  {question.description}
                </p>
                <ul>
                  {question.options.map((option, index) => (
                    <li key={index} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={selectedOption === index}
                          onChange={() => handleOptionChange(index)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="w-full justify-end flex">
                  {!verified ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                      onClick={() => verify()}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white  px-4 py-2 rounded mt-4"
                      onClick={() => getQuestion()}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
