"use client";
import Quiz from "@/components/Quiz";
import { useWalletKit } from "@mysten/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { use, useEffect, useState } from "react";

import Select from "react-select";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { arrayBuffer } from "stream/consumers";
interface Question {
  question: string;
  options: string[];
}
const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
  },
];

const difficultyLevel = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
const reliabilityLevel = [
  { value: "low", label: "low (10 questions)" },
  { value: "medium", label: "medium (50 questions)" },
  ,
  { value: "high", label: "high (100 questions)" },
];

export default function Exam() {
  const [onGoingExam, setOnGoingExam] = useState(false);
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState(difficultyLevel[0]);
  const [reliability, setReliability] = useState(reliabilityLevel[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentAccount } = useWalletKit();
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const client = new SuiClient({ url: getFullnodeUrl("devnet") });

  // const x = wallet.account?.address;
  async function payForQuizz() {
    setIsLoading(true);
    const tx = new TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [1000]);
    tx.transferObjects(
      [coin],
      "0x4c213ea8e5093f567cb71f7594b95033c2ee671bc36b04c89486b5451fb6f8aa"
    );
    // const packageObjectId = "0x1";
    // tx.moveCall({
    //   target: `${packageObjectId}::nft::mint`,
    //   arguments: [tx.pure("Example NFT")],
    // });
    const res = await signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log(JSON.stringify(res));
    setIsLoading(false);
    setOnGoingExam(true);
    setQuestions(questionsData);
  }
  return (
    <div className="w-full h-full ml-4 bg-slate-200">
      <h1 className="w-full text-center text-2xl font-semibold text-black pt-4">
        Exam
      </h1>
      {!onGoingExam ? (
        <div className="flex flex-col justify-around w-full text-black p-3">
          <h2>
            <i>Choose a level of difficulty :</i>
          </h2>
          <Select
            options={difficultyLevel}
            isClearable={false}
            onChange={(e: any) => setDifficulty(e)}
            value={difficulty}
          />
          <h2>
            <i>Choose a level of reliability :</i>
          </h2>
          <Select
            options={reliabilityLevel}
            isClearable={false}
            onChange={(e: any) => setReliability(e)}
            value={reliability}
          />
          <button
            onClick={() => payForQuizz()}
            className="bg-blue-500 text-white  px-4 py-2 rounded mt-4 w-1/5 text-center h-full justify-end flex"
          >
            Pay
          </button>
        </div>
      ) : (
        <>
          <Quiz questions={questions}></Quiz>
        </>
      )}
    </div>
  );
}
