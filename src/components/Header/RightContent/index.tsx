import LevelBadge from "@/components/LevelBadge";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillLightningChargeFill, BsBell } from "react-icons/bs";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
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
  );
};
export default index;
