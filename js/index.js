// const PI = 3.14159;
// let radius;
// let circumstance;

// //PI = 420.74;


// //radius=window.prompt("enter the radius of a circle");



// // console.log(circumstance);

// document.getElementById("mySubmit").onclick = function(){
//  radius=document.getElementById("myText").value;
 
//  radius=Number(radius);
// circumstance= 2*PI*radius;
// document.getElementById("myH3").textContent = circumstance + "cm";

// }

const decreaseBtn = documnet.getElemetnById("decreaseBtn");
const increaseBtn = documnet.getElemetnById("increaseBtn");
const resetBtn = documnet.getElemetnById("resetBtn");
const countLabel= documnt.getElementById("countLabel");

let count=0;

increaseBtn.onclick =function(){
 count++;
 countLabel.textContent=count;
}
decreaseBtn.onclick =function(){
 count--;
 countLabel.textContent=count;
}
resetBtn.onclick =function(){
 count=0;
 countLabel.textContent = count;
}