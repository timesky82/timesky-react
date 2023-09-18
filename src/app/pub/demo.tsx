"use client";
import * as React from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
 const [person, updatePerson] = useImmer({
   name: "Michel",
   age: 33,
 });

 function updateName(name:any) {
   updatePerson((draft) => {
     draft.name = name;
   });
 }

 function becomeOlder() {
   updatePerson((draft) => {
     draft.age++;
   });
 }

 return (
   <div className="App">
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
         팝업
         <ul>
           <li>바텀시트</li>
           <li>풀팝업</li>
           <li>팝업</li>
         </ul>
       </li>
       <li>
         인풋
         <ul>
           <li>라디오</li>
           <li>체크</li>
           <li>토글</li>
           <li>텍스트</li>
           <li>텍스트 에어리어</li>
         </ul>
       </li>
       <li>탭</li>
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
   </div>
 );
};
