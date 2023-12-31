import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { koKR } from "@mui/material/locale";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    red: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
  }
}
// Update the Button's color options to include a white option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}
const theme = createTheme(
  {
    palette: {
      // mode: "light",
      red: {
        main: "#999",
        light: "#F5EBFF",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#47008F",
      },
      white: {
        main: "#fff",
        light: "#F5EBFF",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#fff",
      },
      primary: {
        main: "#2e9dd1",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#26a69a",
        light: "#ba68c8",
        dark: "#7b1fa2",
      },
      error: {
        light: "#ef5350",
        main: "#ed1c24",
        dark: "#c62828",
        contrastText: "#fff",
      },
      warning: {
        light: "#ff9800",
        main: "#fda306",
        dark: "#e65100",
        contrastText: "#fff",
      },
      info: {
        light: "#03a9f4",
        main: "#31ccec",
        dark: "#01579b",
        contrastText: "#fff",
      },
      success: {
        light: "#4caf50",
        main: "#339f63",
        dark: "#1b5e20",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Pretendard",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 370,
        md: 700,
        lg: 1200,
        xl: 1536,
      },
    },
    transitions: {
      easing: {
        // This is the most common easing curve.
        easeInOut: "",
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: "",
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: "",
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: "",
      },
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === "info" && {
              backgroundColor: "#60a5fa",
            }),
          }),
        },
      },
    },
  },
  koKR
);

export default theme;
