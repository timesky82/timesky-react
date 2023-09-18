import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import "@/../../public/scss/global.css";
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Pretendard",
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
});

export default theme;
