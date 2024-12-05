// console.log(Math.PI);

// let x =3.25;
// let y=2;
// let z;

// z = Math.round(x);
// z= Math.floor(x);
// z=Math.ceil(x);
// z= Math.trunc(x);
// z = Math.pow(x);
// z = Math.sqrt(x);
// z = Math.log(x);
// z= Math.sin(x);
// z= Math.cos(x);
// z= Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);



// console.log(z);

/* Random number geneator*/

// const min = 50;
// const max = 100;


// let randome = Math.floor( Math.random() * (max - min))+ min;

// console.log(randome);

const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max =6;
let randomNum;

myButton.onclick = function(){
 randomNum = Math.floor(Math.random() * max) +min;
 myLabel.textContent = randomNum;
}

