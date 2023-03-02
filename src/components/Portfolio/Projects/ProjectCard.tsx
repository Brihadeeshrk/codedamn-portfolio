import { Badge, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Project } from "./index";

type ProjectCardProps = {
  ProjectStats: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ ProjectStats }) => {
  return (
    <Flex
      width="100s%"
      className="bg-slate-100 p-2 mt-2 rounded-lg"
      direction="column"
    >
      <Flex align="center" justify="center" className="mb-2">
        {ProjectStats.banner ? (
          <Image
            src={ProjectStats.banner}
            alt={ProjectStats.title}
            height={{ sm: "50px", md: "50%" }}
            width={{ sm: "150px", md: "100%" }}
            className="rounded-lg"
          />
        ) : (
          <Box
            className="bg-slate-400 rounded-lg"
            height={{ sm: "50px", md: "100px" }}
            width={{ sm: "150px", md: "100%" }}
          ></Box>
        )}
      </Flex>
      <Flex align="start" direction="column">
        <Text className="font-bold text-sm">{ProjectStats.title}</Text>
      </Flex>
      <Flex align="center">
        {ProjectStats.stack.map((item, index) => (
          <Badge key={index}>
            <Flex direction="row" align="center" className="">
              <Icon as={item.icon} className="mr-1" />
              <Text className="text-xs">{item.name}</Text>
            </Flex>
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};
export default ProjectCard;
