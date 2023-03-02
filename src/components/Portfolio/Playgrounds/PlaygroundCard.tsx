import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Playground } from "./index";

type PlaygroundCardProps = {
  PlaygroundStats: Playground;
};

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({ PlaygroundStats }) => {
  return (
    <Flex
      width="100%"
      className="bg-slate-100 p-2 mt-2 rounded-lg"
      direction="row"
    >
      <Flex width="20%">
        <Icon as={PlaygroundStats.icon} height="100%" width="50%" />
      </Flex>
      <Flex width="80%" direction="column">
        <Text className="font-bold text-sm ml-[-15px]">
          {PlaygroundStats.title}
        </Text>
        <Text className="text-xs ml-[-15px] mt-1">
          {PlaygroundStats.tech} • 1 min ago
        </Text>
        <Flex
          align="center"
          direction="row"
          className="ml-[-15px] mt-1"
          display={{ sm: "none", md: "flex" }}
        >
          {PlaygroundStats.sharedWith.map((item, index) => (
            <Box key={index}>
              <Image
                src={item.image}
                alt={item.name}
                height="15px"
                className="rounded-full"
              />
            </Box>
          ))}
          <Flex direction="row" display={{ sm: "none", md: "flex" }}>
            <Text className="text-xs ml-2">Shared with</Text>
            {PlaygroundStats.sharedWith.map((item, index) => (
              <Text key={index} className="text-xs ml-0.5 mr-0.5 font-bold">
                {item.name},
              </Text>
            ))}
            <Text className="text-xs ml-0.5">...+7 more</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PlaygroundCard;
