import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

type TabItemProps = {
  name: string;
  selected: boolean;
  setSelected: (value: string) => void;
  key: number;
};

const TabItem1: React.FC<TabItemProps> = ({
  name,
  selected,
  setSelected,
  key,
}) => {
  return (
    <Flex
      key={key}
      justify="center"
      align="center"
      p="10px 5px"
      cursor="pointer"
      _hover={{
        bg: "gray.50",
      }}
      className="mr-4 bg-slate-100 rounded-lg font-bold"
      color={selected ? "blue.500" : "gray.500"}
      onClick={() => setSelected(name)}
    >
      <Text fontSize="10pt">{name}</Text>
    </Flex>
  );
};
export default TabItem1;
