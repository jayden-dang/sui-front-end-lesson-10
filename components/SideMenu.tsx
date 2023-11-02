// components/SideMenu.js
import Link from "next/link";

const SideMenu = () => {
  return (
    <aside className="bg-blue-500 text-white w-1/5 p-4">
      <h2 className="text-2xl font-semibold">USERNAME</h2>
      <ul className="mt-4 flex-col">
        <li className="mb-2">
          <Link href="/learnerDesktop/profile/wall" className="hover:underline">
            Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/learnerDesktop/practice" className="hover:underline">
            Practice
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/learnerDesktop/exam" className="hover:underline">
            Exam
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
