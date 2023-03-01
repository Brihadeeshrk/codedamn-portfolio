import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import WorkCard from "./WorkCard";

type indexProps = {};

const Experiences: Experience[] = [
  {
    companyLogo: "/assets/mytiro.webp",
    title: "Front End Engineering Intern",
    jobLocation: "Bengaluru, KA",
    companyName: "mytiro.ai",
    time: "Dec 2021 - April 2022",
    role: "While working on building a web page for the company, I was helpful in evaluating the various options based on the requirements, putting down and planning and executing the tasks at hand quickly.",
  },
  {
    companyLogo: "/assets/aara.jpeg",
    title: "Full Stack Engineering Intern",
    jobLocation: "Bengaluru, KA",
    companyName: "aara co",
    time: "Jan 2023- Feb 2023",
    role: "Built a scalable, end-to-end and user-friendly web application that simplifies data collection for placing orders, managing and confirming orders, and generating invoices.",
    points: [
      "Setup Google Forms for Simple Data Entry by End Users",
      "Used React.JS and Integrated GoogleSheets API for fetching and displaying records associated to a specific phone number",
      "Generated Tables that displayed User Information and rendered only items that were selected by the user",
      "Handled Edge Cases which account for possibilities such as when a user has more than one order, incorrect data entry, and null values",
      "Calculated Taxable Amount and the Tax levied on the order total",
      "Generated Unique Sequential Invoice Numbers while accounting for factors such as concurrent order placing",
      "Pushed The Confirmed Order Details to Firebase RealTime Database",
      "Generated Invoices as PDFs for the end user which includes details such as Invoice Number, User Details, Order Information, Total, Received, and Balance Amount",
    ],
  },
];

export type Experience = {
  companyLogo: string;
  title: string;
  jobLocation: string;
  companyName: string;
  time: string;
  role: string;
  points?: string[];
};
const Index: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" align="center" justify="center" className="mt-4">
      <Text className="font-bold text-xl mb-2">Work Experience</Text>
      {Experiences.map((item, index) => (
        <>
          <WorkCard Job={item} key={index} />
        </>
      ))}
    </Flex>
  );
};
export default Index;
