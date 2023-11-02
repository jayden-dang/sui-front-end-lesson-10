import Link from "next/link";

const ProfileNav = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <ul className="flex space-x-4 w-full">
        <li className="w-1/2 justify-center flex">
          <Link
            href="/learnerDesktop/profile/wall"
            className=" hover:underline text-center w-full  text-black text-lg"
          >
            Wall
          </Link>
        </li>
        <li className="w-1/2 justify-center flex  border-r pr-4 last:border-r-0">
          <Link
            href="/learnerDesktop/profile/collection"
            className=" hover:underline text-center w-full text-black text-lg"
          >
            Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
