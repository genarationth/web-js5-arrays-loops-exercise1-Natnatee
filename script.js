// ## Exercise1

// #### 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//     - What is the length of the array?
//     - Write a function called myAlphabetLength which console.logs the length of the array.

// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets. 
//     - Console.log each item in the array. Also console.log the index for each planet.


// #### 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true]; 
   		
//1.1
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const myAlphabetLength = () =>{
    console.log(myAlphabet.length);
}
myAlphabetLength()
//1.2
let Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

Planets.forEach(function(planet) {
    console.log(planet);
});
//1.3
let myArr = [ 1, 2, 'One', true];
myArr.forEach(function(myArr) {
    console.log(myArr);
});

