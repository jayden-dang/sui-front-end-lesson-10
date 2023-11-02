import QuestionCard from "@/components/QuestionCard";

const questionList = [
  { title: "question 1", score1: 85, score2: 92, score3: 78 },
  { title: "question 2", score1: 76, score2: 88, score3: 94 },
  { title: "question 3", score1: 90, score2: 72, score3: 85 },
];
export default function MyQuestions() {
  return (
    <div className="container mx-auto p-4 text-black">
      {questionList.map((question, index) => (
        <QuestionCard key={index} {...question} />
      ))}
    </div>
  );
}
