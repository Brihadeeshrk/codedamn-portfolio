import { Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
import { Education } from "./index";

type EducationCardProps = {
  Study: Education;
};

const EducationCard: React.FC<EducationCardProps> = ({ Study }) => {
  return (
    <Flex className="w-full bg-slate-100 p-4 rounded-lg mb-2 mt-2">
      {/* Logo */}
      <Flex width="15%">
        <Image
          src={Study.collegeLogo}
          alt={Study.collegeName}
          height="40%"
          top="10px"
        />
      </Flex>
      {/* Information */}
      <Flex width="85%" className="p-2" direction="column">
        <Text color="black" className="font-bold">
          {Study.collegeName}
        </Text>
        <Flex direction="row" align="center" justify="space-between">
          <Flex>
            <Text className="text-sm mr-1">{Study.location}</Text>
            <Text className="text-sm mr-1">•</Text>
            <Text className="text-sm mr-1">{Study.degree}</Text>
          </Flex>
          <Text className="text-sm font-bold">{Study.time}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default EducationCard;
