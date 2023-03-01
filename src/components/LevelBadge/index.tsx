import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type indexProps = {
  level: number;
};

const index: React.FC<indexProps> = ({ level }) => {
  return (
    <Flex
      position="relative"
      className="text-white"
      align="center"
      justify="center"
      left="-30%"
      top="-12.5px"
    >
      <Image
        src="assets/levelBadge.png"
        height="40px"
        width="40px"
        alt="Badge"
        className="relative"
      />
      <Text className="relative" fontSize="7pt" left="-50%">
        {level}
      </Text>
    </Flex>
  );
};
export default index;
