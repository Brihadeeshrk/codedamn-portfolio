import { Playground } from "@/components/Portfolio/Playgrounds";
import PlaygroundCard from "@/components/Portfolio/Playgrounds/PlaygroundCard";
import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import ProjectShowcase from "./ProjectShowcase";

type IndexProps = {};

const Playgrounds: Playground[] = [
  {
    icon: AiFillHtml5,
    title: "Playground Title",
    tech: "HTML/CSS",
    sharedWith: [
      { image: "/assets/man-ph.jpeg", name: "Arjun" },
      { image: "/assets/man-ph.jpeg", name: "Amith" },
    ],
  },
  {
    icon: FaReact,
    title: "Playground Title",
    tech: "React",
    sharedWith: [
      { image: "/assets/man-ph.jpeg", name: "Arjun" },
      { image: "/assets/woman-ph.jpeg", name: "Amritha" },
    ],
  },
  {
    icon: AiFillHtml5,
    title: "Playground Title",
    tech: "HTML/CSS",
    sharedWith: [
      { image: "/assets/man-ph.jpeg", name: "Arjun" },
      { image: "/assets/man-ph.jpeg", name: "Amith" },
    ],
  },
  {
    icon: FaReact,
    title: "Playground Title",
    tech: "React",
    sharedWith: [
      { image: "/assets/man-ph.jpeg", name: "Arjun" },
      { image: "/assets/woman-ph.jpeg", name: "Amritha" },
    ],
  },
];

export type ProjectForm = {
  image: string;
  title: string;
  tech: string[];
  collaborators: string[];
};

const ProjectData: ProjectForm[] = [
  {
    image: "/assets/temp.png",
    title: "Personal Portfolio Website",
    tech: ["HTML/CSS", "Javascript"],
    collaborators: ["/assets/woman-ph.jpeg", "/assets/woman-ph.jpeg"],
  },
  {
    image: "/assets/temp1.png",
    title: "Personal Portfolio Website",
    tech: ["HTML/CSS", "Javascript"],
    collaborators: ["/assets/man-ph.jpeg", "/assets/woman-ph.jpeg"],
  },
  {
    image: "/assets/temp1.png",
    title: "Personal Portfolio Website",
    tech: ["HTML/CSS", "Javascript"],
    collaborators: ["/assets/woman-ph.jpeg", "/assets/man-ph.jpeg"],
  },
  {
    image: "/assets/temp1.png",
    title: "Personal Portfolio Website",
    tech: ["HTML/CSS", "Javascript"],
    collaborators: ["/assets/man-ph.jpeg", "/assets/man-ph.jpeg"],
  },
];

const Index: React.FC<IndexProps> = () => {
  return (
    <Flex width="100%" className="" direction="column">
      <Flex justify="space-between" align="center">
        <Text className="font-bold text-xl mb-2">Playgrounds</Text>
        <Text className="cursor-pointer text-xs mb-2 text-slate-500">
          See all
        </Text>
      </Flex>

      <Flex direction="row" align="center" justify="center" width="100%">
        <Flex width="50%" direction="column" className="mr-2">
          <PlaygroundCard PlaygroundStats={Playgrounds[0]} />
          <PlaygroundCard PlaygroundStats={Playgrounds[2]} />
        </Flex>
        <Flex width="50%" direction="column">
          <PlaygroundCard PlaygroundStats={Playgrounds[1]} />
          <PlaygroundCard PlaygroundStats={Playgrounds[3]} />
        </Flex>
      </Flex>

      {/* Projects */}
      <Flex justify="space-between" align="center" className="mt-12">
        <Text className="font-bold text-xl mb-2">Projects</Text>
        <Text className="cursor-pointer text-xs mb-2 text-slate-500">
          See all
        </Text>
      </Flex>

      <Flex direction="row" align="center" justify="center" width="100%">
        <Flex width="50%" direction="column" className="mr-2">
          <ProjectShowcase ProjectData={ProjectData[0]} />
          <ProjectShowcase ProjectData={ProjectData[2]} />
        </Flex>
        <Flex width="50%" direction="column">
          <ProjectShowcase ProjectData={ProjectData[1]} />
          <ProjectShowcase ProjectData={ProjectData[3]} />
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
