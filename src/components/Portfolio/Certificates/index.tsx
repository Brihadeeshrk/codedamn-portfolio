import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import CertificateCard from "./CertificateCard";

type indexProps = {};

export type Certificate = {
  icon: typeof Icon.arguments;
  title: string;
  issueDate: string;
};

const Certificates: Certificate[] = [
  {
    icon: AiFillHtml5,
    title: "HTML/CSS",
    issueDate: "Dec 16th, 2022",
  },
  {
    icon: FaReact,
    title: "React",
    issueDate: "Dec 16th, 2022",
  },
  {
    icon: AiFillHtml5,
    title: "HTML/CSS",
    issueDate: "Dec 16th, 2022",
  },
  {
    icon: FaReact,
    title: "React",
    issueDate: "Dec 16th, 2022",
  },
];

const index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" justify="center" className="mt-8" width="100%">
      <Flex justify="space-between" align="center">
        <Text className="font-bold text-xl mb-2">Certificates</Text>
        <Link href="/edit">
          <Text className="cursor-pointer font-bold text-xs mb-2 text-indigo-700">
            Add new certificate
          </Text>
        </Link>
      </Flex>

      <Flex direction="row" align="center" justify="center" width="100%">
        <Flex width="50%" direction="column" className="mr-2">
          <CertificateCard CertificateDetails={Certificates[0]} />
          <CertificateCard CertificateDetails={Certificates[2]} />
        </Flex>
        <Flex width="50%" direction="column">
          <CertificateCard CertificateDetails={Certificates[1]} />
          <CertificateCard CertificateDetails={Certificates[3]} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
