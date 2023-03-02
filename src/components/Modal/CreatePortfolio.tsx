import { createPortfolioState } from "@/atoms/createPortfolioAtom";
import { auth, firestore } from "@/firebase/clientApp";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import router from "next/router";

type CreatePortfolioProps = {};

const CreatePortfolio: React.FC<CreatePortfolioProps> = () => {
  const [user] = useAuthState(auth);
  const [modalState, setModalState] = useRecoilState(createPortfolioState);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(name);
  };

  const createPortfolio = async () => {
    if (error) setError("");
    const portfolioName = name.toLowerCase().split(" ").join("");

    const format = /["^[\\p{L} .'-]+$"]/;
    if (format.test(name)) {
      setError("Names can only contain letters and spaces");
      return;
    }

    setLoading(true);

    try {
      const commDocRef = doc(firestore, "portfolios", portfolioName);

      await runTransaction(firestore, async (transaction) => {
        const commDoc = await transaction.get(commDocRef);
        if (commDoc.exists()) {
          throw new Error(`Sorry, ${portfolioName} is taken. Try another.`);
        }

        transaction.set(commDocRef, {
          creatorID: user?.uid,
          createdAt: serverTimestamp(),
        });

        // transaction.set(
        //   doc(firestore, `users/${user?.uid}/communitySnippets`, commName),
        //   {
        //     communityId: commName,
        //     isModerator: true,
        //   }
        // );
      });
      handleClose();
      if (router.pathname === "/") router.push(`/user/${portfolioName}`);
      else {
        router.push(`/user/${portfolioName}`);
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Enter your full name
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              <Input
                placeholder="Enter your name"
                _placeholder={{ fontSize: "10pt" }}
                onChange={onChangeHandler}
              />
            </Flex>
            <Button
              isLoading={loading}
              width="100%"
              className="mt-4"
              onClick={createPortfolio}
            >
              Submit
            </Button>
            {error && <Text>{error}</Text>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreatePortfolio;
