import Image from "next/image";
import React from "react";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <div className="w-8/12 h-auto md:h-96 flex align-center justify-center mt-5 ml-auto mr-auto bg-red-300 rounded-md p-4">
      <div className="w-full">
        {/* Top Half */}
        <div className="h-2/6">
          <Image
            src="/assets/stock.jpeg"
            alt="Profile Picture"
            width={120}
            height={120}
            className="border-3 border-red-500 rounded-full"
          />
        </div>

        {/* Bottom Half */}
        <div className="h-4/6 bg-white"></div>
      </div>
    </div>
  );
};
export default index;
