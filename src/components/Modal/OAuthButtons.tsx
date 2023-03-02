import { auth } from "@/firebase/clientApp";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [error, setError] = useState("");
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleError) setError(googleError.message);
  if (githubError) setError(githubError.message);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={googleLoading}
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <Image
          src="/assets/googlelogo.png"
          height="20px"
          alt="Google Logo"
          mr={2}
        />
        Continue With Google
      </Button>

      {(googleError || githubError) && <Text>{error}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
