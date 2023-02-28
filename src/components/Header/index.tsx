import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <div className="flex items-center justify-between w-100 h-12 shadow-2xl p-3">
      {/* Codedamn Logo */}
      <div className="flex items-center cursor-pointer ">
        <Link href="/">codedamn</Link>
      </div>

      {/* Search bar */}
      <div className="flex ">
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="hidden md:flex absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="hidden md:block w-full p-2.5 pl-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
            <button
              type="submit"
              className="hidden md:flex align-center justify-center text-white absolute top-0.5 right-0.5 bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            >
              Courses ˅
            </button>
          </div>
        </form>
      </div>

      {/* Icons */}
      <div className="flex items-center justify-evenly">
        <div className="flex items-center justify-between">
          <BsFillLightningChargeFill className="hidden md:block mr-3" />
          <IoNotificationsSharp className="hidden md:block mr-3" />
          <Image
            src="/assets/stock.jpeg"
            className="rounded-full mr-3"
            width={25}
            height={25}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};
export default index;
