import { atom } from "recoil";

export type Visibility = {
  name: string;
  visible: boolean;
};
export interface UserProfile {
  profilePic?: string;
  bio: string;
  bannerPic?: string;
  displayname: string;
  about: string;
  profession?: string;
  dateofbirth: string;
  gender: string;
  visibility: Visibility[];
}

const defaultProfileState: UserProfile = {
  displayname: "Placeholder Name",
  bio: "Placeholder Name",
  profilePic: "/assets/man-ph.jpeg",
  bannerPic: "/assets/banner.png",
  about: `I'm a Senior Information Science and Engineering Student at
  M.S.Ramaiah Institute of Technology. I'm a Web Developer by
  interest and I'm eager to learn new skills and Technologies. I
  also built and maintain my blog, where I post articles on topics I
  find interesting/challenging. I'm currently fluent with the
  MERN stack, but I'm working on projects to strengthen my
  experience when it comes to Technologies such as Next, Gatsby.`,
  dateofbirth: "21-01-2001",
  gender: "",
  visibility: [
    {
      name: "fandf",
      visible: true,
    },
    {
      name: "xp",
      visible: true,
    },
    {
      name: "achievementbadges",
      visible: true,
    },
  ],
};

export const profileState = atom<UserProfile>({
  key: "profileState",
  default: defaultProfileState,
});
