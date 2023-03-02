import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import PlaygroundCard from "./PlaygroundCard";

type indexProps = {};

export type Playground = {
  icon: typeof Icon.arguments;
  title: string;
  tech: string;
  sharedWith: People[];
};

export type People = {
  image: string;
  name: string;
};

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

const index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-8" width="100%">
      <Flex justify="space-between" align="center">
        <Text className="font-bold text-xl mb-2">Playgrounds</Text>
        <Text className="cursor-pointer font-bold text-xs mb-2 text-indigo-700">
          Create new playground
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
    </Flex>
  );
};
export default index;
