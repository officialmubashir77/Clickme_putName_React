import React, { useState } from 'react';
import './App.css';

const App = () => {

let bgColor = "#F4B942" ; 
let ChangeColor = "#E4D9FF" ; 

let btnValue = "Click Me " ; 
let UpdatedbtnValue = " 😇 " ; 

let text = "Roboto"

let [initial , setInitial]  =useState(bgColor)
let [initialValue , setInitialValue ]  =useState(btnValue) ;
let [font , setFont ]  =useState(text) ;



const dbClick = () => {

  // console.log("kok");
  setInitial(bgColor) ;
  setInitialValue(btnValue) ;
  setFont();


}


  const BgChange = () => {

  let val =   prompt("Enter Name : " , "Mubashir");

  setInitial(ChangeColor) ;
  setInitialValue( val + UpdatedbtnValue) ;


  }

  return (
    <div style={{ backgroundColor : initial }}>
        <button onClick={BgChange} onDoubleClick={dbClick} style={{ fontFamily : font }}  >  {initialValue} </button>

    </div>
  )
}

export default App

