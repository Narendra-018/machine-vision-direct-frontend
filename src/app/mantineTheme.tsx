import { createTheme } from "@mantine/core";

const mantineThemeObj = createTheme({
  colors: {
    darkBlue: ["#053049","#20425a","#37556b","#4e697c","#667d8e","#7e91a0","#96a7b3","#b0bcc5","#cad2d8","#e4e8ec"],
  },
  primaryShade: 0,
  primaryColor: "darkBlue"
});

export { mantineThemeObj };