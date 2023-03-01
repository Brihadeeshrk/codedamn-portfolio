import { Badge, Box, Button, Flex, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  let badges = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "TypeScript",
    "Styled-Components",
    "React",
    "Next",
    "Firebase",
  ];
  return (
    <Flex className="bg-red-300 rounded-lg mt-24" direction="column">
      {/* Banner */}
      <Flex direction="row" width="100%">
        <Image
          src="/assets/banner.png"
          alt="Banner Image"
          position="relative"
        />
        <Button
          position="relative"
          variant="banner"
          right="10%"
          top="10px"
          fontSize="8pt"
          className="z-50"
        >
          Edit cover
        </Button>
      </Flex>
      {/* Details */}
      <Flex width="100%" className="bg-yellow-300">
        <Flex width="30%"></Flex>
        <Flex width="70%" direction="column">
          {/* Name and Badges */}
          <Flex width="100%" align="center">
            <Text className="font-bold mr-2">Brihadeesh R K</Text>
            <Badge className="mr-2" colorScheme="green">
              Pro
            </Badge>
            <Badge colorScheme="blue">Looking for a Job</Badge>
          </Flex>

          {/* Bio */}
          <Flex direction="column" justify="flex-start">
            <Text className="text-gray-400 text-sm">
              Full Stack Developer, Student | MSRIT 2023{" "}
            </Text>
            <Text className="text-gray-400 text-sm">
              <Icon as={CiLocationOn} className=" mr-2" />
              Bengaluru, KA
            </Text>
          </Flex>

          {/* Skill Badges */}
          <Box className="mt-6">
            {badges.map((item, index) => (
              <Badge key={index} className="mr-1">
                {item}
              </Badge>
            ))}
          </Box>

          {/* Divider */}
          <Box className="mt-6 border-2 border-white border-b-gray-400" />

          {/* Socials */}
          <Box className="mt-6"></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
