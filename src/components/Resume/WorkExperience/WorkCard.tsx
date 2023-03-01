import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Experience } from "./index";

type WorkCardProps = {
  Job: Experience;
};

const WorkCard: React.FC<WorkCardProps> = ({ Job }) => {
  return (
    <Flex className="w-full bg-slate-100 p-4 rounded-lg mb-2 mt-2">
      {/* Logo */}
      <Flex width="15%">
        <Image
          src={Job.companyLogo}
          alt={Job.companyName}
          height="20%"
          top="10px"
        />
      </Flex>
      {/* Information */}
      <Flex width="85%" className="p-2" direction="column">
        <Text color="black" className="font-bold">
          {Job.title}
        </Text>
        <Flex direction="row" align="center" justify="space-between">
          <Flex>
            <Text className="text-sm mr-1">{Job.jobLocation}</Text>
            <Text className="text-sm mr-1">•</Text>
            <Text className="text-sm mr-1">{Job.companyName}</Text>
          </Flex>
          <Text className="text-sm font-bold">{Job.time}</Text>
        </Flex>
        <Text className="mt-2 text-sm">{Job.role}</Text>
        {Job.points ? (
          <Flex direction="column">
            <Text className="text-sm font-bold mt-2 mb-1">
              Job Responsibilites
            </Text>
            {Job.points.map((item, index) => (
              <Flex key={index}>
                <Text color="blue" className="mr-1">
                  •
                </Text>
                <Text className="text-sm">{item}</Text>
              </Flex>
            ))}
          </Flex>
        ) : (
          ""
        )}
      </Flex>
    </Flex>
  );
};
export default WorkCard;
