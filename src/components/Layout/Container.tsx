import React from "react";

type ContainerProps = {
  children: any;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="bg-yellow-200">{children}</div>;
};
export default Container;
