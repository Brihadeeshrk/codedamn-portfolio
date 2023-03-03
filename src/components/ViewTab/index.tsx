import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import TabItem from "./TabItem";
import Link from "next/link";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const tabs = ["Portfolio", "Resume"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      maxWidth="728px"
      margin="0 auto 10% auto"
    >
      <Flex
        width="100%"
        className="p-1 border-2 border-slate-100 rounded-lg pl-4"
      >
        {tabs.map((item, index) => (
          <>
            <TabItem
              key={index}
              name={item}
              selected={item === selectedTab}
              setSelected={setSelectedTab}
            />
          </>
        ))}
      </Flex>
      <Flex>
        {selectedTab === "Portfolio" && <Portfolio />}
        {selectedTab === "Resume" && <Resume />}
      </Flex>
      <Flex className="mt-3" direction="row" justify="space-between">
        <Flex></Flex>
        <Link href="/edit">
          <Button>Edit Profile</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Index;
