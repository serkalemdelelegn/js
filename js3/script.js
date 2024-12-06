// let age=25;

// if(age >= 18){
//  console.log("you are older enogh to enter this site");
// }
// else{
//  console.log("you are not enogh to enter this site");
// }

const myText= document.getElementById("myText");
const mySubmit= document.getElementById("mySubmit");
const resultElement= document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
 age= myText.ariaValueMax;
 age = Number(age);

 if(age>=100){
 
  resultElement.textContent = "you can't get the licence within this age";
 }
 else if (age >=18){
  
  resultElement.textContent = "you are enogh to drive";
  // if(isStudent){
  //  console.log("you are passed");
 
  // }
  // else{
  //  console.log("you are not passed");
  // }
 }
 else if(age <= 0 ){
 
  resultElement.textContent = "your age can't be below zero";
 }
 
 else{
  
  resultElement.textContent = "you are not enogh to drive";
 }
}


