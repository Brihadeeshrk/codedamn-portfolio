import "@fontsource/inter";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFFDD0",
    },
  },
  fonts: {
    body: "Inter, sans serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#EEEEEE",
      },
    }),
  },
  components: {
    //   Button,
  },
});
