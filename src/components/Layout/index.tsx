import React from "react";
import Header from "../Header";

type indexProps = {
  children: any;
};

const index: React.FC<indexProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default index;
