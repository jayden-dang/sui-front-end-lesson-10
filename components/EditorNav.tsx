import Link from "next/link";

const EditorName = () => {
  return (
    <nav className="bg-white shadow-md w-full h-12">
      <ul className="flex w-full">
        <li className="w-1/3 justify-center px-0 flex">
          <Link
            href="/editorDesktop/myQuestions"
            className=" hover:underline text-center w-full  text-black text-lg border-r-2 border-black"
          >
            Best Questions
          </Link>
        </li>
        <li className="w-1/3 justify-center px-0 flex ml-0">
          <Link
            href="/editorDesktop/createQuestion"
            className=" hover:underline text-center w-full text-black text-lg border-r-2 border-black ml-0"
          >
            Create new question
          </Link>
        </li>
        <li className="w-1/3 justify-center px-0 flex ml-0">
          <Link
            href="/editorDesktop/reviewQuestion"
            className=" hover:underline text-center w-full text-black text-lg"
          >
            review question
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default EditorName;
