import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent";
import { BsFillLightningChargeFill, BsBell } from "react-icons/bs";

import { BsSearch, BsArrowDown } from "react-icons/bs";
import LevelBadge from "../LevelBadge";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <Flex
      height="50px"
      align="center"
      width="100%"
      justify="space-between"
      className="p-3 top-0 fixed bg-white shadow-2xl z-50 font-bold"
    >
      {/* Codedamn logo */}
      <Text>codedamn</Text>

      {/* Input Field */}
      <InputGroup width="50%">
        <InputLeftElement
          pointerEvents="none"
          display={{ sm: "none", md: "flex" }}
        >
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          className="hidden md:flex placeholder:italic placeholder:text-slate-400 placeholder:font-normal"
        />
        <InputRightElement width="4.5rem" display={{ sm: "none", md: "flex" }}>
          <Button
            padding="10px 25px"
            h="1.75rem"
            size="sm"
            height="95%"
            fontSize="9pt"
            fontWeight={400}
            className="flex rounded-md text-sm"
            display={{ sm: "hidden", md: "flex" }}
          >
            Courses
            <Icon as={BsArrowDown} className="text-xs ml-0.5" />
          </Button>
        </InputRightElement>
      </InputGroup>
      {/* RightContent */}
      <Flex width="20%" justify="space-evenly">
        {/* <RightContent /> */}
        <Flex width="100%" align="center" justify="space-evenly">
          {/* Streak */}
          <Flex align="center" display={{ sm: "none", md: "flex" }}>
            <Icon as={BsFillLightningChargeFill} color="blue.700" />
            <Text>2</Text>
          </Flex>

          {/* Notifications */}
          <Icon as={BsBell} display={{ sm: "none", md: "flex" }} />

          {/* Profile Picture */}
          <Flex>
            <Image
              src="/assets/stock.jpeg"
              alt=""
              height="40px"
              width="40px"
              className="relative rounded-full"
            />
            <LevelBadge level={2} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
