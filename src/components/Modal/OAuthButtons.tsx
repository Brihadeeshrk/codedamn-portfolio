import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [error, setError] = useState("");
  const [signInWithGoogle, user, loading, signInError] =
    useSignInWithGoogle(auth);

  if (signInError) setError(signInError.message);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
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

      {signInError && <Text>{error}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
