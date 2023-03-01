import { useState } from "react";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import useSelectFile from "@/hooks/useSelectFile";
import TabItem from "./TabItem";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const tabs = ["Portfolio", "Resume"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();

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
      <Flex p={4}>
        {selectedTab === "Portfolio" && <Text> Portfolio Selected</Text>}
        {selectedTab === "Resume" && <Text> Resume Selected</Text>}
      </Flex>
    </Flex>
  );
};
export default Index;
