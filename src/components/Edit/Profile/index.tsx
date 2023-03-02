import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  return (
    <Flex width="100%" direction="column">
      {/* Upload New Picture */}
      <Flex direction="row" align="center">
        <Image
          src="/assets/stock.jpeg"
          className="rounded-full h-16"
          alt="avatar"
        />
        <Button
          padding="10px 10px"
          bg="#4F46E5"
          fontSize="8pt"
          color="white"
          ml={4}
        >
          Upload new picture
        </Button>
        <Button fontSize="8pt" color="gray.700" ml={4}>
          Delete
        </Button>
      </Flex>

      {/* Input Fields */}
      <Flex direction="column" className="mt-6">
        {/* Display Name */}
        <Text className="text-sm text-black font-bold mb-1">Display name</Text>
        <Input _placeholder={{ fontSize: "5pt" }} />
        <Text className="text-xs text-slate-400 mt-1">
          Name entered above will be used for all issued certificates
        </Text>

        {/* About */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">About</Text>
        <Textarea size="sm" />

        {/* Profession */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">
          Profession
        </Text>
        <Input _placeholder={{ fontSize: "5pt" }} />

        {/* Date of birth */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">
          Date of birth
        </Text>
        <Input placeholder="Select Date and Time" size="md" type="date" />

        {/* Gender */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">Gender</Text>
        <Select
          placeholder="What is your gender"
          _placeholder={{ color: "gray.200" }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </Flex>

      {/* Section Visibility */}
      <Flex direction="column" className="mt-8">
        <Text className="font-bold text-sm">Section Visibility</Text>
        <Text className=" text-xs text-slate-400">
          Select which sections and content should show on your profile page
        </Text>

        <Flex direction="column" className="bg-slate-100 mt-2 p-2 rounded-lg">
          {/* Followers and Following */}
          <Flex direction="row" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">Followers and Following</Text>
              <Text className=" text-xs text-slate-400">
                Shows your followers and the users you follow on codedamn
              </Text>
            </Box>
            <Switch />
          </Flex>

          {/* XP */}
          <Flex direction="row" className="mt-2" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">XP</Text>
              <Text className=" text-xs text-slate-400">
                Shows the XP you have earned
              </Text>
            </Box>
            <Switch />
          </Flex>

          {/* Achievement Badges */}
          <Flex direction="row" className="mt-2" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">Achievement Badges</Text>
              <Text className=" text-xs text-slate-400">
                Shows your relative percentile and profeciency
              </Text>
            </Box>
            <Switch />
          </Flex>
        </Flex>
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
