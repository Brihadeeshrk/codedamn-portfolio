import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { profileState } from "../../../atoms/userAtom";

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const [readMore, setReadMore] = useState(false);
  const profileStateValues = useRecoilValue(profileState);

  function truncate(str: string, maxlength: number) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  return (
    <Flex direction="column" align="center" justify="center" className="mt-2">
      <Text className="font-bold text-xl">About Me</Text>
      <Flex
        className="bg-slate-100 p-4 w-full rounded-lg mt-4"
        direction="column"
      >
        {!readMore ? (
          <Text>{truncate(profileStateValues.about, 250)}</Text>
        ) : (
          <Text>{profileStateValues.about}</Text>
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
