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
import Link from "next/link";
import React, { useState } from "react";
import { BsFillLightningChargeFill, BsBell } from "react-icons/bs";

import { BsSearch, BsArrowDown } from "react-icons/bs";
import LevelBadge from "../LevelBadge";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Flex
      height="50px"
      align="center"
      width="100%"
      justify="space-between"
      className="p-3 top-0 fixed bg-white shadow-2xl z-[999] font-bold"
    >
      {/* Codedamn logo */}
      <Link href="/">
        <Text className="cursor-pointer">codedamn</Text>
      </Link>

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
          className="hidden md:flex placeholder:text-sm placeholder:text-slate-400 placeholder:font-normal"
        />
        <InputRightElement width="4.5rem" display={{ sm: "none", md: "flex" }}>
          <Button
            padding="10px 25px"
            // h="1.75rem"
            size="sm"
            height="95%"
            fontWeight={400}
            className="flex rounded-md text-xs"
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
          {loggedIn ? (
            <Flex>
              <Image
                src="/assets/stock.jpeg"
                alt=""
                height="40px"
                width="40px"
                className="relative rounded-full"
              />
              <LevelBadge level={2} top="-12.5px" height="40px" width="40px" />
            </Flex>
          ) : (
            <Button className="text-sm" onClick={() => setLoggedIn(!loggedIn)}>
              Log in
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Index;
