import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type indexProps = {
  level: number;
  top: string;
  height: string;
  width: string;
};

const index: React.FC<indexProps> = ({ level, top, height, width }) => {
  return (
    <Flex
      position="relative"
      className="text-white"
      align="center"
      justify="center"
      left="-30%"
      top={top ? top : ""}
    >
      <Image
        src="assets/levelBadge.png"
        height={height}
        width={width}
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
