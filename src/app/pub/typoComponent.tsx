"use client";
import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";

export default function TypoComponent() {
  return (
    <ThemeRegistry>
      <h2 className="mb10">Typo</h2>
      <div className="more">
        <div className="text_body mb10 text_800">
          Pretendard ExtraBold - 800
        </div>
        <br />
        <div className="text_body mb10 text_700">Pretendard Bold - 700 </div>
        <br />
        <div className="text_body mb10 text_600">Pretendard SemiBold - 600</div>
        <br />
        <div className="text_body mb10 text_400">Pretendard Regular - 400 </div>
        <br />
        <div className="text_body mb10 text_300">Pretendard Light - 300 </div>
        <br />
      </div>
      <Box sx={{ width: "100%" }}>
        <div className="mb30">
          <h1>h1 --베이직 인터내셔널 basicit.co.kr </h1>
          <p className="text_body">
            font-weight: 500; font-size: 48px; line-height: 1.167; color: #333;
          </p>
        </div>
        <div className="mb30">
          <h2>h2 --베이직 인터내셔널 basicit.co.kr </h2>
          <p className="text_body mb10">
            font-weight: 700; font-size: 28px; line-height: 1.167; color: #333;
          </p>
        </div>
        <div className="mb30">
          <h3 className="text_body">
            text_body --베이직 인터내셔널 basicit.co.kr{" "}
          </h3>
          <p className="text_body mb10">
            font-weight: 400; font-size: 16px; line-height: 1.167; color: #333;
          </p>
        </div>

        <div className="mb30">
          <p className="text_body2">
            text_body2 --베이직 인터내셔널 basicit.co.kr
          </p>
          <p className="text_body mb10">font-size: 18px; line-height: 1.5;</p>
        </div>
        <div className="mb30">
          <p className="text_12 mb10">
            text_12 --베이직 인터내셔널 basicit.co.kr
          </p>
          <p className="text_body "> font-size: 12px; font-weight: 600;</p>
        </div>
        <div className="mb30">
          <p className="text_16 mb10">
            text_16 --베이직 인터내셔널 basicit.co.kr
          </p>
          <p className="text_body ">font-size: 16px;</p>
        </div>
        <div className="mb30">
          <p className="text_24 mb10">
            text_24 --베이직 인터내셔널 basicit.co.kr
          </p>
          <p className="text_body ">font-size: 24px;</p>
        </div>
      </Box>
    </ThemeRegistry>
  );
}
