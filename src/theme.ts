import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    color: {
      white: string;
      light: string;
      dark: string;
      purple: string;
      lightGray: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      white?: string;
      light?: string;
      dark?: string;
      purple?: string;
      lightGray?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  color: {
    white: "#FFFFFF",
    light: "#2C2D30",
    dark: "#222222",
    purple: "#423AA9",
    lightGray: "#444444",
  },
});

export default theme;
