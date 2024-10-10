// Challenge 1: Fahrenheit to Celsius
// (F - 32) * 5 / 9

let F;
let C;

// "Regular" way of creating function:
// function getCelsius(F){
//     C = (F - 32) * 5 / 9;
//     console.log(C);
// }

// getCelsius(55);
// getCelsius(90);

// Arrow function:
const getCelsius = (F) => (F-32) * 5 / 9;

console.log(getCelsius(90));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2: minMax

const minMax = (numbers) => {
    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers)
    };
  };
  
  console.log(minMax([100, 200, 300, 400, 500]));
  console.log(minMax([10, 20, 30, 40, 50]));

// Challenge 3: IIFE rectangle's area

(function (length, width){
    console.log(`The area of the rectangle with a length of ${length} and a width of ${width} is ${length*width}.`);
})(10, 5);


  




  

