import { createTheme } from "@mui/material/styles"; 

const Colors = {
  primary: "#4b5c6b",
  secondary: "#c3cfd9",
  success: "#006d77",
  info: "#0077b6",
  danger: "#ba1a1a",
  warning: "#f57c00",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#D5D5D5",
  body_bg: "F3F6F9",
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    }
  }
});

export default theme;