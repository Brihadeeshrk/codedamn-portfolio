import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillLightningChargeFill, BsStarFill } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import StatCard from "./StatCard";

type indexProps = {};

export type Stat = {
  level?: string;
  message: string;
  icon: typeof Icon.arguments;
  iconColor: string;
};

const Stats: Stat[] = [
  {
    level: "2",
    message: "Longest Streak",
    icon: BsFillLightningChargeFill,
    iconColor: "purple",
  },
  {
    level: "1200",
    message: "Experience Points",
    icon: BsStarFill,
    iconColor: "blue",
  },
  {
    level: "Novice",
    message: "Current League",
    icon: GiTrophyCup,
    iconColor: "orange",
  },
  {
    level: "120",
    message: "Karma Points",
    icon: FaHeartbeat,
    iconColor: "pink",
  },
];

const index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-4" width="100%">
      <Text className="font-bold text-xl mb-2">Stats</Text>
      {/* {Stats.map((item, index) => (
        <>
          <Flex direction="row" align="center" justify="center" width="100%">
            <Flex width="50%" direction="column">
              {index % 2 === 0 && <StatCard StatDetails={item} key={index} />}
            </Flex>
            <Flex width="50%" direction="column">
              {index % 2 !== 0 && <StatCard StatDetails={item} key={index} />}
            </Flex>
          </Flex>
        </>
      ))} */}
      <Flex direction="row" align="center" justify="center" width="100%">
        <Flex width="50%" direction="column" className="mr-2">
          <StatCard StatDetails={Stats[0]} />
          <StatCard StatDetails={Stats[2]} />
        </Flex>
        <Flex width="50%" direction="column">
          <StatCard StatDetails={Stats[1]} />
          <StatCard StatDetails={Stats[3]} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
