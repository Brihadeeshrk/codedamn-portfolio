import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { ProjectForm } from "./";
import { FiMoreHorizontal } from "react-icons/fi";

type ProjectShowcaseProps = {
  ProjectData: ProjectForm;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ ProjectData }) => {
  return (
    <Flex
      direction="column"
      className="p-2 bg-slate-200 rounded-lg mb-2 cursor-pointer"
    >
      <Flex>
        <Image src={ProjectData.image} alt={ProjectData.title} />
      </Flex>
      <Flex className="mt-3" justify="space-between">
        <Text className="text-xs font-bold">{ProjectData.title}</Text>
        <Icon as={FiMoreHorizontal} />
      </Flex>
      <Flex>
        {ProjectData.tech.map((item, index) => (
          <Text className="text-xs font-slate-300 mr-1" key={index}>
            {item} •
          </Text>
        ))}
        <Text className="text-xs font-slate-300 mr-1">1 min ago</Text>
      </Flex>
      <Flex className="mt-3" align="center">
        {ProjectData.collaborators.map((item, index) => (
          <Image
            className="rounded-full"
            src={item}
            alt={`${index}`}
            key={index}
            height=""
            width="10%"
          />
        ))}
        <Text className="text-xs font-slate-300 ml-2">3 contributors</Text>
      </Flex>
    </Flex>
  );
};
export default ProjectShowcase;
