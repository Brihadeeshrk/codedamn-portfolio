import { Flex, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineGlobal, AiFillLinkedin } from "react-icons/ai";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="z-[999] p-4 bg-indigo-100 mt-24 h-16"
      bottom="0"
      width="100%"
      position="fixed"
    >
      <Text className="font-black">Built by Brihadeesh</Text>
      <Flex direction="row">
        <Link href="https://github.com/Brihadeeshrk/codedamn-portfolio">
          <Icon as={AiFillGithub} height="15pt" mr={2} />
        </Link>
        <Link href="https://briha.live/">
          <Icon as={AiOutlineGlobal} height="15pt" mr={2} />
        </Link>
        <Link href="https://www.linkedin.com/in/brihadeeshrk/">
          <Icon as={AiFillLinkedin} height="15pt" />
        </Link>
      </Flex>
    </Flex>
  );
};
export default Footer;
