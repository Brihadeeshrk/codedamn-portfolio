import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Stat } from "./index";

type StatCardProps = {
  StatDetails: Stat;
};

const StatCard: React.FC<StatCardProps> = ({ StatDetails }) => {
  return (
    <Flex
      direction="row"
      align="center"
      className="mt-1 p-4 bg-slate-100 rounded-lg"
      //   width="100%"
    >
      <Icon
        height="30pt"
        as={StatDetails.icon}
        className="mr-2"
        color={StatDetails.iconColor}
      />
      <Flex direction="column">
        <Text className="font-bold text-sm mr-1">{StatDetails.level}</Text>
        <Text className="text-xs mr-1">{StatDetails.message}</Text>
      </Flex>
    </Flex>
  );
};
export default StatCard;
