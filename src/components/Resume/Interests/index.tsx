import { Badge, Flex, Text } from "@chakra-ui/react";
import React from "react";

type indexProps = {};

const interests = ["Web Development", "Cycling", "Formula1", "Excercise"];

const Index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-4">
      <Text className="font-bold text-xl mb-2">Education</Text>
      <Flex className="rounded-lg">
        {interests.map((item, index) => (
          <Badge className="mr-2" key={index}>
            {item}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};
export default Index;
