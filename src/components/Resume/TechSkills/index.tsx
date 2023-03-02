import { Badge, Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiTypescript } from "react-icons/si";

type indexProps = {};

export type Skill = {
  name: string;
  icon: typeof Icon.arguments;
};

const Skills: Skill[] = [
  // { name: "HTML", icon: AiFillHtml5 },
  // { name: "CSS", icon: DiCss3Full },
  { name: "JavaScript", icon: DiJavascript1 },
  // { name: "Java", icon: DiJava },
  // { name: "Python", icon: SiPython },
  // { name: "React", icon: FaReact },
  { name: "Firebase", icon: SiFirebase },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next", icon: SiNextdotjs },
  // { name: "Gatsby", icon: SiGatsby },
];

const Index: React.FC<indexProps> = () => {
  return (
    <Flex width="100%" direction="column" justify="center" className="mt-4">
      <Text className="font-bold text-xl mb-2">Tech Skills</Text>
      <Flex direction="row" className="rounded-lg mb-2 mt-2 " maxWidth="728px">
        {Skills.map((item, index) => (
          <Box key={index}>
            <Badge className="mr-2">
              <Icon as={item.icon} height="30px" className="mr-1" />
              {item.name}
            </Badge>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default Index;
