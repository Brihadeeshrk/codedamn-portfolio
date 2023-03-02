import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import ProjectCard from "./ProjectCard";

type indexProps = {};

export type Project = {
  banner?: string;
  title: string;
  stack: Tech[];
};

export type Tech = {
  icon: typeof Icon.arguments;
  name: string;
};

const Projects: Project[] = [
  {
    banner: "/assets/briha.png",
    title: "Personal Blog",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: DiJavascript1, name: "JavaScript" },
    ],
  },
  {
    banner: "",
    title: "Web3 Driver of the Day",
    stack: [
      { icon: SiNextdotjs, name: "Next" },
      { icon: DiCss3Full, name: "CSS" },
    ],
  },
  {
    banner: "",
    title: "Web3 Driver of the Day",
    stack: [
      { icon: SiNextdotjs, name: "Next" },
      { icon: DiCss3Full, name: "CSS" },
    ],
  },
  {
    banner: "",
    title: "Web3 Driver of the Day",
    stack: [
      { icon: SiNextdotjs, name: "Next" },
      { icon: DiCss3Full, name: "CSS" },
    ],
  },
];

const index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-8" width="100%">
      <Flex justify="space-between" align="center">
        <Text className="font-bold text-xl mb-2">Projects</Text>
        <Text className="cursor-pointer font-bold text-xs mb-2 text-indigo-700">
          Create new project
        </Text>
      </Flex>
      {/* {Projects.map((item, index) => (
        <>
          <Flex direction="row" align="center" justify="center" width="100%">
            <Flex width="50%" direction="column">
              {index % 2 === 0 && <ProjectCard ProjectStats={item} key={index} />}
            </Flex>
            <Flex width="50%" direction="column">
              {index % 2 !== 0 && <ProjectCard ProjectStats={item} key={index} />}
            </Flex>
          </Flex>
        </>
      ))} */}
      <Flex direction="row" align="center" justify="center" width="100%">
        <Flex width="50%" direction="column" className="mr-2">
          <ProjectCard ProjectStats={Projects[0]} />
          <ProjectCard ProjectStats={Projects[2]} />
        </Flex>
        <Flex width="50%" direction="column">
          <ProjectCard ProjectStats={Projects[1]} />
          <ProjectCard ProjectStats={Projects[3]} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
