import React from "react";

import { useState } from "react";




export const Form = () => {

let [firstName, setFirstName] = useState("");

let [lastName, setLastName] = useState("");




const handleFirstBox = (change) => {

setFirstName(change.target.value);

};




const handleSecondBox = (change) => {

setLastName(change.target.value);

};



const handleGreetClick = () => {

alert(`Hello ${firstName} ${lastName}`);

};


 return (

 <div className ="boxes">



 <label>First Name:</label>
 <input type="text" value={firstName} onChange={handleFirstBox} />

<br/>


 <label>Last Name:</label>




<input type="text" value={lastName} onChange={handleSecondBox} />

 <br/>




 <button onClick={handleGreetClick}>Greet Me</button>

 </div>

 );

};




  