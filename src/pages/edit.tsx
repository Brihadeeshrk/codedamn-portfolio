import Tab from "@/components/Edit/Tab";
import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineChrome } from "react-icons/ai";

import Portfolio from "@/components/Edit/Portfolio";
import Socials from "@/components/Edit/Socials";
import Profile from "@/components/Edit/Profile";

type editProps = {};

export type TabList = {
  title: string;
  icon: typeof Icon.arguments;
};

const formTabs: TabList[] = [
  { title: "Profile", icon: AiOutlineChrome },
  { title: "Socials", icon: AiOutlineChrome },
  { title: "Portfolio", icon: AiOutlineChrome },
  { title: "Resume", icon: AiOutlineChrome },
];

const Edit: React.FC<editProps> = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);

  return (
    <Flex direction="row" width="100%" className="mt-24">
      <Flex direction="column" width="35%" className="p-2">
        {formTabs.map((item, index) => (
          <>
            <Tab
              key={index}
              item={item}
              selected={item.title === selectedTab}
              setSelected={setSelectedTab}
            />
          </>
        ))}
      </Flex>
      <Flex width="65%" className="p-2 ">
        {selectedTab === "Profile" && <Profile />}
        {selectedTab === "Socials" && <Socials />}
        {selectedTab === "Portfolio" && <Portfolio />}
      </Flex>
    </Flex>
  );
};
export default Edit;
