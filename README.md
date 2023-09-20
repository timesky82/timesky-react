# Material UI - Next.js App Router example in TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with Material UI installed.

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

<!-- #default-branch-switch -->

```bash
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/material-ui-nextjs-ts
cd material-ui-nextjs-ts
```

Install dependencies and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This example uses [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts) to automatically optimize and load Roboto, a custom Google Font.

## Learn more

To learn more about this example:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Customizing Material UI](https://mui.com/material-ui/customization/how-to-customize/) - approaches to customizing Material UI.  
  <br>

# immer

https://www.npmjs.com/package/use-immer

# GUIDE

1. 스타일

- scss
  '/public/scss '
  import "@/../../public/scss/xxx.scss"

- DEV에서 css랜더링 두번 되지만 빌드후 1번만 로딩됨
  React.StrictMode (DEV 모드에서만 활성)때문임

2. 폰트
   pretendard  
   Copyright (c) 2021, Kil Hyung-jin (<https://github.com/orioncactus/pretendard>),
   with Reserved Font Name Pretendard.
   This Font Software is licensed under the SIL Open Font License, Version 1.1.
   This license is copied below, and is also available with a FAQ at:
   <https://scripts.sil.org/OFL> 'Pretendard'

   Ionicons, v4.2.4
   Created by Ben Sperry for the Ionic Framework, http://ionicons.com/
   https://twitter.com/benjsperry https://twitter.com/ionicframework
   MIT License: https://github.com/driftyco/ionicons

3. Image

- '/public/img'
  import "@/../../public/img/xxx.png"
- lazy load
  https://github.com/Aljullu/react-lazy-load-image-component
  MIT License Copyright (c) 2018 Albert Juhé Lluveras

4. Color

  <h2>api </h2>
      <ol>
        <li>datapicker</li>
        <li>tree-view</li>
        <li>calender</li>
        <li>lottie</li>
        <li>chart</li>
      </ol>
      <h2>basic</h2>
      <ol>
        <li>타이포</li>
        <li>컬러</li>
        <li>아이콘</li>
        <li>
          버튼
          <ul>
            <li>토글버튼</li>
            <li>버튼</li>
          </ul>
        </li>
         <li>
          인풋
          <ul>
            <li>텍스트</li>
            <li>텍스트 에어리어</li>
            <li>셀렉트</li>
             <li>라디오</li>
            <li>체크</li>
            <li>토글</li>
            <li>스위치</li>
            <li></li>

          </ul>
        </li>
        <li>
          팝업
          <ul>
            <li>바텀시트</li>
            <li>풀팝업</li>
            <li>팝업</li>
          </ul>
        </li>

        <li>탭</li>
          <!-- 여기 -->
        <li>레이지로드</li>
        <li>툴팁</li>
        <li>뱃지</li>
        <li>스낵바(토스트)</li>
        <li>아코디언</li>


        <li>
          테이블
          <ul>
            <li>버추얼테이블</li>
            <li>pagination</li>
          </ul>
        </li>
        <li>
          갤러리
          <ul>
            <li>masony</li>
            <li>캐러셀</li>
          </ul>
        </li>
      </ol>
