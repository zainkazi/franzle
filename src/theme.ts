// Color codes
// 799cd1
// 5377ad
// 355181

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      200: "#799cd1",
      300: "#5377ad",
      400: "#355181",
    },
  },
});

export default theme;
