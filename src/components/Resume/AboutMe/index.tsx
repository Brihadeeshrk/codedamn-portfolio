import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Flex direction="column" align="center" justify="center" className="mt-2">
      <Text className="font-bold text-xl">About Me</Text>
      <Flex
        className="bg-slate-100 p-4 w-full rounded-lg mt-4"
        direction="column"
      >
        {!readMore ? (
          <Text>
            I'm a Senior Information Science and Engineering Student at
            M.S.Ramaiah Institute of Technology. I'm a Web Developer by interest
            and I'm eager to learn new skills and Technologies. I also built and
            maintain my blog, where I post articles on topics I find
            interesting/challenging...
          </Text>
        ) : (
          <Text>
            I'm a Senior Information Science and Engineering Student at
            M.S.Ramaiah Institute of Technology. I'm a Web Developer by interest
            and I'm eager to learn new skills and Technologies. I also built and
            maintain my blog, where I post articles on topics I find
            interesting/challenging. I'm currently fluent with the MERN stack,
            but I'm working on projects to strengthen my experience when it
            comes to Technologies such as Next, Gatsby.
          </Text>
        )}
        <Button
          className="mt-2"
          width="100px"
          onClick={() => setReadMore(!readMore)}
        >
          Read more
        </Button>
      </Flex>
    </Flex>
  );
};
export default Index;
