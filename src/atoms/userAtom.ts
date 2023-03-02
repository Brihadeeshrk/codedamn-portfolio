import { atom } from "recoil";

export type Visibility = {
  name: string;
  visible: boolean;
};
export interface UserProfile {
  profilePic?: string;
  bannerPic?: string;
  displayname: string;
  about: string;
  profession?: string;
  dateofbirth: string;
  gender: string;
  visibility?: Visibility[];
}

const defaultProfileState: UserProfile = {
  displayname: "",
  about: "",
  dateofbirth: "",
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
