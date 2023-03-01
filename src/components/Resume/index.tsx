import { Flex } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Interests from "./Interests";
import Languages from "./Languages";
import TechSkills from "./TechSkills";
import WorkExperience from "./WorkExperience";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <Flex
      direction="column"
      className="w-full bg-red-300"
      borderRadius={4}
      maxWidth="728px"
      margin="5% auto 10% auto"
    >
      {/* About Me */}
      <AboutMe />
      {/* WorkExperience */}
      <WorkExperience />
      {/* Education */}
      <Education />
      {/* Tech Skills */}
      <TechSkills />
      {/* Interests */}
      <Interests />
      {/* Languages */}
      <Languages />
    </Flex>
  );
};
export default index;
