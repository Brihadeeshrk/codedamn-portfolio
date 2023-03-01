import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "black",
      _hover: {
        bg: "gray.400",
      },
    },
    banner: {
      color: "white",
      bg: "rgba(255,255,255,0.3)",
      padding: "10px",
      border: "1px solid",
      borderColor: "white",
      _hover: {
        bg: "rgba(255,255,255,0.7)",
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
