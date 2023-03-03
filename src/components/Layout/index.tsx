import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import Footer from "./Footer";

type indexProps = {
  children: any;
};

const index: React.FC<indexProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Box margin="0px auto" mt="60px" width="75%">
        {children}
      </Box>
      <Footer />
    </div>
  );
};
export default index;
