import { Badge, Box, Button, Flex, Image, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  let badges = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "TypeScript",
    "Styled-Components",
    "React",
    "Next",
    "Firebase",
  ];

  const socials = [
    { image: "/assets/google.png", link: "" },
    { image: "/assets/insta.png", link: "" },
    { image: "/assets/fb.webp", link: "" },
    { image: "/assets/li.png", link: "https://linkedin.com/in/brihadeeshrk" },
    { image: "/assets/yt.png", link: "" },
  ];
  return (
    <Flex
      className="bg-white rounded-lg mt-24"
      direction="column"
      margin="15% auto 5% auto"
      maxWidth="728px"
    >
      {/* Banner */}
      <Flex direction="row" width="100%">
        <Image
          src="/assets/banner.png"
          alt="Banner Image"
          position="relative"
        />
        <Box>
          <Link href="/edit">
            <Button
              position="relative"
              variant="banner"
              right="100px"
              top="10px"
              height="20pt"
              fontSize="7pt"
              className="p-1 z-50"
            >
              <Icon as={FiEdit} className="mr-2" />
              Edit cover
            </Button>
          </Link>
        </Box>
      </Flex>

      {/* Details */}
      <Flex width="100%" className="rounded-b-xl border-2 border-slate-100">
        <Flex width="25%">
          <Image
            src="/assets/stock.jpeg"
            alt="Profile Picture"
            height={{ sm: "20%", md: "40%" }}
            className="z-50 rounded-full"
            border="2px solid white"
            mt={{ sm: -10, md: -16 }}
            ml={{ sm: 4, md: 8 }}
          />
          {/* <LevelBadge level={2} top="-10%" height="100px" width="100px" /> */}
        </Flex>
        <Flex width="75%" direction="column" className="p-3">
          {/* Name and Badges */}
          <Flex width="100%" align="center" className="mt-4">
            <Text className="font-bold mr-2">Brihadeesh R K</Text>
            <Badge
              className="mr-2"
              colorScheme="green"
              fontSize={{ sm: "7pt", md: "9pt" }}
            >
              Pro
            </Badge>
            <Badge colorScheme="blue" fontSize={{ sm: "7pt", md: "9pt" }}>
              Looking for a Job
            </Badge>
          </Flex>

          {/* Bio */}
          <Flex direction="column" justify="flex-start">
            <Text className="text-gray-400 text-sm">
              Full Stack Developer, Student | MSRIT 2023{" "}
            </Text>
            <Text className="text-gray-400 text-sm">
              <Icon as={CiLocationOn} className=" mr-2" />
              Bengaluru, KA
            </Text>
          </Flex>

          {/* Skill Badges */}
          <Box className="mt-6">
            {badges.map((item, index) => (
              <Badge
                key={index}
                className="mr-2 mb-2 p-1 rounded-lg"
                fontSize={{ sm: "7pt", md: "8pt" }}
              >
                {item}
              </Badge>
            ))}
          </Box>

          {/* Divider */}
          <Box className="mt-6 border-2 border-white border-b-gray-100" />

          {/* Socials */}
          <Flex className="mt-6 mb-10" align="center">
            {socials.map((item, index) => (
              <Box
                key={index}
                className="border-2 border-slate-100 p-1 rounded-md"
                mr={5}
              >
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt="socials"
                    width={{ sm: "12pt", md: "15pt" }}
                  />
                </Link>
              </Box>
            ))}
            <Button
              variant="banner"
              color="black"
              bg="gray.100"
              height={{ sm: "7pt", md: "25pt" }}
            >
              Follow
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
