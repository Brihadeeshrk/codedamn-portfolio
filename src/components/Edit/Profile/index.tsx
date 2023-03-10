import useSelectFile from "@/hooks/useSelectFile";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import router from "next/router";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { profileState } from "../../../atoms/userAtom";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const { onSelectFile, selectedFile, setSelectedFile } = useSelectFile();
  const [loading, setLoading] = useState(false);
  const [profileStateValue, setProfileState] = useRecoilState(profileState);

  // Badge Visibility
  const [badgesVis, setBadgesVis] = useState(false);
  // XP Visibility
  const [XPVis, setXPVis] = useState(false);
  // Followers Visibility
  const [FAndF, setFandF] = useState(false);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {
      target: { name, value },
    } = event;

    setProfileState((prev) => ({
      ...prev,
      [name]: value,
      profilePic: selectedFile,
    }));
  };

  const onClick = () => {
    setLoading(true);
    setProfileState((prev) => ({
      ...prev,
      visibility: [
        { name: "fandf", visible: !FAndF },
        { name: "xp", visible: !XPVis },
        { name: "achievementbadges", visible: !badgesVis },
      ],
    }));

    console.log("Final Profile: ", profileStateValue);
    setLoading(false);
    router.push(`/user/${router.query["portfolioName"]}`);
  };

  const BadgeSwitchHandler = () => {
    setBadgesVis(!badgesVis);
  };
  const XPSwitchHandler = () => {
    setXPVis(!XPVis);
  };
  const FandFSwitchHandler = () => {
    setFandF(!FAndF);
  };

  return (
    <Flex width="100%" direction="column">
      {/* Upload New Picture */}
      <Flex direction="row" align="center">
        <Image
          src={selectedFile ? selectedFile : profileStateValue.profilePic}
          className="rounded-full h-16"
          alt="avatar"
        />
        <input
          ref={selectedFileRef}
          type="file"
          hidden
          name="profilePic"
          onChange={onSelectFile}
        />
        <Button
          padding="10px 10px"
          bg="#4F46E5"
          fontSize="8pt"
          color="white"
          ml={4}
          onClick={() => {
            selectedFileRef.current?.click();
          }}
        >
          Upload new picture
        </Button>
        <Button
          fontSize="8pt"
          color="gray.700"
          ml={4}
          onClick={() => setSelectedFile("")}
        >
          Delete
        </Button>
      </Flex>

      {/* Input Fields */}
      <Flex direction="column" className="mt-6">
        {/* Display Name */}
        <Text className="text-sm text-black font-bold mb-1">Display name</Text>
        <Input
          _placeholder={{ fontSize: "5pt" }}
          name="displayname"
          onChange={onChange}
        />
        <Text className="text-xs text-slate-400 mt-1">
          Name entered above will be used for all issued certificates
        </Text>

        {/* Bio */}
        <Text className="text-sm text-black font-bold mt-4  mb-1">
          Header Bio
        </Text>
        <Input
          _placeholder={{ fontSize: "5pt" }}
          name="bio"
          onChange={onChange}
        />

        {/* About */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">About</Text>
        <Textarea size="sm" name="about" onChange={onChange} />

        {/* Profession */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">
          Profession
        </Text>
        <Input
          _placeholder={{ fontSize: "5pt" }}
          name="profession"
          onChange={onChange}
        />

        {/* Date of birth */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">
          Date of birth
        </Text>
        <Input
          name="dateofbirth"
          placeholder="Select Date and Time"
          size="md"
          type="date"
          onChange={onChange}
        />

        {/* Gender */}
        <Text className="text-sm text-black font-bold mt-4 mb-1">Gender</Text>
        <Select
          name="gender"
          placeholder="What is your gender"
          _placeholder={{ color: "gray.200" }}
          onChange={onChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </Flex>

      {/* Section Visibility */}
      <Flex direction="column" className="mt-8">
        <Text className="font-bold text-sm">Section Visibility</Text>
        <Text className=" text-xs text-slate-400">
          Select which sections and content should show on your profile page
        </Text>

        <Flex direction="column" className="bg-slate-100 mt-2 p-2 rounded-lg">
          {/* Followers and Following */}
          <Flex direction="row" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">Followers and Following</Text>
              <Text className=" text-xs text-slate-400">
                Shows your followers and the users you follow on codedamn
              </Text>
            </Box>
            <Switch
              name="fandf"
              defaultChecked={profileStateValue.visibility[0].visible}
              onChange={FandFSwitchHandler}
            />
          </Flex>

          {/* XP */}
          <Flex direction="row" className="mt-2" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">XP</Text>
              <Text className=" text-xs text-slate-400">
                Shows the XP you have earned
              </Text>
            </Box>
            <Switch
              name="xp"
              defaultChecked={profileStateValue.visibility[1].visible}
              onChange={XPSwitchHandler}
            />
          </Flex>

          {/* Achievement Badges */}
          <Flex direction="row" className="mt-2" justify="space-between">
            <Box>
              <Text className="font-bold text-sm">Achievement Badges</Text>
              <Text className=" text-xs text-slate-400">
                Shows your relative percentile and profeciency
              </Text>
            </Box>
            <Switch
              name="achievementbadges"
              defaultChecked={profileStateValue.visibility[2].visible}
              onClick={BadgeSwitchHandler}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="row" justify="space-between" className="mt-4">
        <Flex></Flex>
        <Flex>
          <Button mr={2}>Cancel</Button>
          <Button
            bg="#4F46E5"
            color="white"
            onClick={onClick}
            isLoading={loading}
          >
            Save changes
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Index;
