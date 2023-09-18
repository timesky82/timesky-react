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
     <h1>
       Hello {person.name} ({person.age})
     </h1>
     <input
       onChange={(e) => {
         updateName(e.target.value);
       }}
       value={person.name}
     />
     <br />
     <button onClick={becomeOlder}>Older</button>
   </div>
 );
};
