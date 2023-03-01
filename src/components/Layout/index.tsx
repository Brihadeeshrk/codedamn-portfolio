import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";

type indexProps = {
  children: any;
};

const index: React.FC<indexProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box margin="0px auto" mt="60px" width="70%">
        {children}
      </Box>
    </>
  );
};
export default index;
