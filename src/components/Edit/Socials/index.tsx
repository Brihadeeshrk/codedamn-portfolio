import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { socialState } from "../../../atoms/userAtom";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  const setProfileState = useSetRecoilState(socialState);
  const socialStateValue = useRecoilValue(socialState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setProfileState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Flex width="100%" direction="column">
      {/* Input Fields */}
      <Flex direction="column" className="mt-6">
        {/* Github */}
        <Text className="text-sm text-black font-bold mb-1">Github</Text>
        <Input
          placeholder="github.com/"
          _placeholder={{ fontSize: "10pt" }}
          name="github"
          onChange={onChange}
        />

        {/* LinkedIn */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">LinkedIn</Text>
        <Input
          placeholder="Linkedin Profile URL"
          _placeholder={{ fontSize: "10pt" }}
          name="linkedin"
          onChange={onChange}
        />

        {/* Facebook */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Facebook</Text>
        <Input
          placeholder="Facebook Profile URL"
          _placeholder={{ fontSize: "10pt" }}
          name="facebook"
          onChange={onChange}
        />

        {/* Instagram */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">
          Instagram
        </Text>
        <Input
          placeholder="Instagram Profile URL"
          _placeholder={{ fontSize: "10pt" }}
          name="instagram"
          onChange={onChange}
        />

        {/* Dribble */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Dribble</Text>
        <Input
          placeholder="Dribble Profile URL"
          _placeholder={{ fontSize: "10pt" }}
          name="dribble"
          onChange={onChange}
        />

        {/* Behance */}
        <Text className="text-sm text-black font-bold mb-1 mt-6">Behance</Text>
        <Input
          placeholder="Behance Profile URL"
          _placeholder={{ fontSize: "10pt" }}
          name="behance"
          onChange={onChange}
        />
      </Flex>

      <Flex direction="row" justify="space-between" className="mt-4">
        <Flex></Flex>
        <Flex>
          <Button mr={2}>Cancel</Button>
          <Link href="/">
            <Button
              bg="#4F46E5"
              color="white"
              onClick={() =>
                console.log("Final Social State", socialStateValue)
              }
            >
              Save changes
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Index;
