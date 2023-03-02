import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

export type TabList = {
  title: string;
  icon: typeof Icon.arguments;
};

type TabProps = {
  item: TabList;
  selected: boolean;
  setSelected: (value: string) => void;
  key: number;
};

const Tab: React.FC<TabProps> = ({ item, selected, setSelected, key }) => {
  return (
    <Flex
      className=""
      align="center"
      key={key}
      flexGrow={1}
      p="10px 7px"
      cursor="pointer"
      _hover={{
        bg: "gray.50",
      }}
      mb={2}
      fontWeight={700}
      color={selected ? "black" : "gray.500"}
      borderWidth={selected ? "0px 0px 0px 3px" : ""}
      borderLeftColor={selected ? "black" : ""}
      //   borderRightColor="gray.200"
      onClick={() => setSelected(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default Tab;
