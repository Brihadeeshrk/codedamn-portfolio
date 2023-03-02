import HeroCard from "@/components/HeroCard";
import ViewTab from "@/components/ViewTab";
import React from "react";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <>
      <HeroCard />
      <ViewTab />{" "}
    </>
  );
};
export default index;
