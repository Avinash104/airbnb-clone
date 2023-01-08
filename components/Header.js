import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Image from "next/legacy/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md grid grid-cols-3 bg-white p-4 md:p-5">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {" "}
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />{" "}
      </div>

      {/* Search */}
      <div className="flex items-center md:border-2 rounded-full p-2 shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="bg-white border-red-4 pl-5 bg-transparent outline-none flex-grow text-sm text-gray-800 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 space-x-2 shadow-md rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
