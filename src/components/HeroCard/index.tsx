import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { UserDetails } from "../../atoms/userAtom";

type indexProps = {
  user: UserDetails;
};

const index: React.FC<indexProps> = ({ user }) => {
  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl mt-28 min-w-0 break-words bg-white w-full shadow-lg rounded-xl ">
      {/* Banner */}
      <div className="mt-6 py-6 border-b border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
        <div className="flex flex-wrap">
          <div className="w-full px-10 h-36">
            <div className="hidden md:flex ml-[30em] border-2 border-white hover:border-slate-100 align-center justify-center cursor-pointer font-normal text-white hover:text-slate-100 bg-[rgba(255, 255, 255, 0.2)] p-1 rounded-md">
              <BiEdit className="h-5 mr-2" />
              Edit Cover
            </div>
          </div>
        </div>
      </div>

      {/* Profile Pic */}
      <div className="w-full flex justify-start ml-20">
        <div className="relative">
          <Image
            src="/assets/stock.jpeg"
            className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-14 lg:-ml-16 max-w-[150px]"
            height={150}
            width={150}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full text-center mt-20">
          <div className="flex justify-center lg:pt-4 pt-8 pb-0">
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                3,360
              </span>
              <span className="text-sm text-slate-400">Photos</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                2,454
              </span>
              <span className="text-sm text-slate-400">Followers</span>
            </div>

            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                564
              </span>
              <span className="text-sm text-slate-400">Following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
          Mike Thompson
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
          Paris, France
        </div>
      </div>
    </div>
  );
};
export default index;
