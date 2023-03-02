import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import EducationCard from "./EducationCard";

type indexProps = {};

export type Education = {
  collegeLogo: string;
  collegeName: string;
  location: string;
  degree: string;
  time: string;
  message?: string;
};

const myEducation: Education[] = [
  {
    collegeLogo: "/assets/rit.png",
    collegeName: "Ramaiah Institute of Technology",
    location: "Bengaluru, KA",
    degree: "B.E, Information Science and Engineering",
    time: "Aug 2019 - June 2023",
  },
  {
    collegeLogo: "/assets/jain.png",
    collegeName: "Sri Bhagawan Mahaveer Jain College",
    location: "Bengaluru, KA",
    degree: "Secondary Education in Computer Science",
    time: "June 2017 - Jan 2019",
  },
];

const Index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-4">
      <Text className="font-bold text-xl mb-2">Education</Text>
      {myEducation.map((item, index) => (
        <>
          <EducationCard Study={item} key={index} />
        </>
      ))}
    </Flex>
  );
};
export default Index;
