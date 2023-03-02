import HeroCard from "@/components/HeroCard";
import ViewTab from "@/components/ViewTab";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { createPortfolioState } from "../atoms/createPortfolioAtom";
import CreatePortfolio from "@/components/Modal/CreatePortfolio";

export default function Home() {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const setCreateModalState = useSetRecoilState(createPortfolioState);

  return (
    <>
      <Head>
        <title>CodeDamn Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <HeroCard />
      <ViewTab /> */}

      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        className="p-3 mt-24 rounded-lg"
      >
        {user ? (
          <>
            <Text className="text-2xl font-black mb-2">
              Let&apos;s build your portfolio!
            </Text>

            {/* <Link href="/edit"> */}
            <CreatePortfolio />
            <Button
              onClick={() => {
                // setAuthModalState({ open: true, view: "login" });
                setCreateModalState({ open: true });
              }}
            >
              Build
            </Button>
            {/* </Link> */}
          </>
        ) : (
          <>
            <Text className="text-2xl font-black mb-2">
              Why do you need a portfolio?
            </Text>
            <Text className="text-md text-center mb-8">
              To showcase your knowledge, skills, projects, and work experience,
              every developer must have a coding profile page like{" "}
              <Link target="_blank" href="https://codedamn.com/user/mehulmpt">
                <span className="text-indigo-700 font-bold ">this</span>
              </Link>
              . This page serves two main purposes: to act as a public
              portfolio, eliminate the need for a separate custom portfolio
              website, and provide a quick and comprehensive overview for
              potential employers.
            </Text>

            <Text className="text-2xl font-black mb-4">
              Want a portfolio just like this?
            </Text>
            <Image
              src="/assets/banner2.png"
              alt="sample banner"
              width="100%"
              className="rounded-lg mask1"
            />

            <Text className="text-2xl font-black mt-2 mb-2">
              Log in to make your own!
            </Text>
            <Button
              onClick={() => {
                setAuthModalState({ open: true, view: "login" });
              }}
            >
              Log in
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}
