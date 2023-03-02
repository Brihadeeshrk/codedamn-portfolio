import { Flex } from "@chakra-ui/react";
import React from "react";
import Certificates from "./Certificates";
import Playgrounds from "./Playgrounds";
import Projects from "./Projects";
import Stats from "./Stats";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <Flex
      direction="column"
      className="w-full bg-yellow-200"
      borderRadius={4}
      maxWidth="728px"
      margin="5% auto 10% auto"
    >
      {/* Stats */}
      <Stats />

      {/* Projects */}
      <Projects />

      {/* Playgrounds */}
      <Playgrounds />

      {/* Certificates */}
      <Certificates />
    </Flex>
  );
};
export default index;
