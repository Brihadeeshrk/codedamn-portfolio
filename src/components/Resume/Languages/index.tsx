import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type indexProps = {};

export type Language = {
  name: string;
  icon: string;
};

const Languages: Language[] = [
  { name: "English", icon: "🇬🇧" },
  { name: "Kannada", icon: "🇮🇳" },
  { name: "Tamil", icon: "🇮🇳" },
];

const Index: React.FC<indexProps> = () => {
  return (
    <Flex width="100%" direction="column" justify="center" className="mt-6">
      <Text className="font-bold text-xl mb-2">Languages</Text>
      <Flex direction="row" className="rounded-lg mb-2" maxWidth="728px">
        {Languages.map((item, index) => (
          <Box key={index}>
            <Badge className="mr-2">
              {item.icon}
              {item.name}
            </Badge>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default Index;
