import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Certificate } from "./index";

type ProjectCardProps = {
  CertificateDetails: Certificate;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ CertificateDetails }) => {
  return (
    <Flex
      width="100%"
      className="bg-slate-100 p-2 mt-2 rounded-lg border-2 border-slate-200"
      direction="column"
    >
      <Flex align="start" className="mb-2">
        <Icon as={CertificateDetails.icon} height="20%" width="10%" />
      </Flex>
      <Flex align="start" direction="column">
        <Text className="font-bold text-sm">{CertificateDetails.title}</Text>
        <Text className="text-xs text-slate-500">
          Issued on {CertificateDetails.issueDate}
        </Text>
        <Text className="font-bold text-xs text-slate-500 mt-4 cursor-pointer">
          See credentials
        </Text>
      </Flex>
    </Flex>
  );
};
export default ProjectCard;
