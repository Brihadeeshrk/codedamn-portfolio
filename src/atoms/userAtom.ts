import { atom } from "recoil";

export interface User {
  id: string;
  about_me: string;
  interests: string[];
  languages: string[];
  techSkills: string[];
  privcyType: "public" | "private";
  banner: {
    name: string;
    bannerURL?: string;
    imageURL?: string;
    badge: string;
    jobStatus: string;
    bio: string;
    location: string;
    headerLinks: string[];
  };
}

export interface Stats {
  streak: number;
  league: string;
  points: number;
  karma: number;
}

export interface Project {
  projectBanner?: string;
  projectName: string;
  technologies: string[];
}

export interface Playground {
  title: string;
  technologies: string;
  time?: string;
  sharedWith: string[];
}

export interface Certificate {
  name: string;
  technology: string;
  issueDate: string;
}

export interface Work {
  companyLogo?: string;
  jobTitle: string;
  location: string;
  companyName: string;
  duration: string;
  role: string[];
}

export interface Education {
  collegeLogo?: string;
  location: string;
  degree: string;
  duration: string;
  snippet: string;
}

interface UserState {
  // user:
}
