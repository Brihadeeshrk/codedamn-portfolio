import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <Flex width="100%" direction="column">
      {/* Input Fields */}
      <Flex direction="column" className="mt-6">
        {/* Github */}
        <Text className="text-sm text-black font-bold mb-1">Github</Text>
        <Input placeholder="github.com/" _placeholder={{ fontSize: "10pt" }} />

        {/* LinkedIn */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">LinkedIn</Text>
        <Input
          placeholder="Linkedin Profile URL"
          _placeholder={{ fontSize: "10pt" }}
        />

        {/* Facebook */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Facebook</Text>
        <Input
          placeholder="Facebook Profile URL"
          _placeholder={{ fontSize: "10pt" }}
        />

        {/* Instagram */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">
          Instagram
        </Text>
        <Input
          placeholder="Instagram Profile URL"
          _placeholder={{ fontSize: "10pt" }}
        />

        {/* Dribble */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Dribble</Text>
        <Input
          placeholder="Dribble Profile URL"
          _placeholder={{ fontSize: "10pt" }}
        />

        {/* Behance */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Behance</Text>
        <Input
          placeholder="Behance Profile URL"
          _placeholder={{ fontSize: "10pt" }}
        />
      </Flex>

      <Flex direction="row" justify="space-between" className="mt-4">
        <Flex></Flex>
        <Flex>
          <Button mr={2}>Cancel</Button>
          <Button bg="#4F46E5" color="white">
            Save changes
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Index;
