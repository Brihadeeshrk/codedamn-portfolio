import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <div className="flex items-center justify-between w-100 h-12 shadow-2xl p-3">
      {/* Codedamn Logo */}
      <div className="flex items-center cursor-pointer">
        <Link href="/">codedamn</Link>
      </div>

      {/* Search bar */}
      <div className="flex ">
        {/* <input
          type="text"
          placeholder="Search"
          className="bg-transparent placeholder-gray-900 border w-50 rounded-full"
        />
        <AiOutlineSearch className="h-6" /> */}

        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>

          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pl-3 pr-2 pointer-events-none">
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
          </div>
        </form>
      </div>

      <div className="flex items-center justify-evenly">
        {/* Icons */}
        <div className="flex items-center justify-between">
          <BsFillLightningChargeFill className="mr-3" />
          <IoNotificationsSharp className="mr-3" />
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
