import {nanoid,customAlphabet}from "nanoid";
import{validateInputs}from "./index.js"
const button =document.querySelector(".button")
const HandleEventCreate=()=>{
  const randomText = customAlphabet("abcdfghijklmnopqrstuvwxyz@$", validateInputs().textLength);
    const randomNums = customAlphabet("0123456789", validateInputs().numsLength);
const text =document.querySelector(".text")
 const nickName = randomText() + randomNums(); 
text.textContent=`Password:${nickName}`


};
button.addEventListener("click" ,HandleEventCreate);