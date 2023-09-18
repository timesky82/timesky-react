"use client";
import * as React from "react";
import { Breakpoint, Theme, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import "@/../../public/scss/global.scss";
// export const metadata = {
//   title: "메인페이지 React",
//   description: "",
//   // viewport: "width=380, initial-scale=1",
// };
type BreakpointOrNull = Breakpoint | null;
function useWidth() {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const width = useWidth();
  return (
    <html lang="ko">
      <head>
        <meta name="title" content="베이직인터내셔널" />
        <meta
          name="description"
          content="CMS와 마이크로서비스, 클라우드를 주로 하는 SI 업체입니다."
        />
        <meta
          name="keywords"
          content="클라우드,마이크로서비스,인프라,CMS,SyncCMS,SyncInfra,SyncBoot,생산성,개발,자바"
        />
        <meta
          name="naver-site-verification"
          content="d619c27c3687c9e108733dbee1336c36b87cfbd0"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="베이직인터내셔널 홈페이지" />
        <meta
          property="og:description"
          content="CMS와 마이크로서비스, 클라우드를 주로 하는 SI 업체입니다."
        />
        <meta
          property="og:image"
          content="https://basicit.co.kr/img/assets/favicon.png"
        />
        <meta property="og:url" content="https://basicit.co.kr" />
      </head>
      <ThemeRegistry>
        <body className={width}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
