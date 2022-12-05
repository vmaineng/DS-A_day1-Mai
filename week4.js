//problem 1 recursion

//iterative approach
//const flatTheArray = (arr) => {

//step 1 edge cases
//if (!arr.length) return -1;

//step 2 
//initialize the array

//let results = [];

//for...loop iterate through the array

// for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//         results = results.concat(flatTheArray(arr[i]));
//     } else {
//         results.push(arr[i]);
//     }
// }
// return results;
// }

// console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));


//problem 2 recursion

// const capitalizeAllLetters = (array) => {

//edge cases
// if (!array.length) return -1;

//base case - exit the loop
// if (array.length === 1) return [array[0].toUpperCase()];

//recursive path - recall the function
// let results = capitalizeAllLetters(array.slice(0, -1));
// results.push(array.slice(array.length - 1)[0].toUpperCase());
// return results;

// }

// console.log(capitalizeAllLetters(['mai', 'vang']));

//problem 3 recursion

//iterative method
// function factorial(x){
//step 1 edge cases - if x is not a number, return -1
//if (x !== NaN) return -1;

//initialize sum
//let sum = 1;

//base case
// if (sum === 2) {
//     return sum = 2;
// }

//iterate through numbers; not positions; to get the previous number and keep multiplying
// for (let i = 2; i <= x; i++){
//   sum =  sum * i;
// }
// return sum;
// }

// console.log(factorial(7))


//recursive approach



//base case


//problem 4 recursion




//problem 5 bubble sort

// const data = [ 
//     { 
//         name: 'John Smith',  
//         age: new Map('age', 88),  
//         favoriteMovie: [ 
//             { 
//                 title: 'Hulk',  
//                 genre: 'action',  
//                 rating: 6 
//             } 
//         ] 
//     }, 
//     { 
//         name: 'Tony Kim',  
//         age: new Map('age', 33),  
//         favoriteMovie: [ 
//             { 
//                 title: 'Top Gun',  
//                 genre: 'action',  
//                 rating: 10 
//             } 
//         ] 
//     }, 
//     { 
//         name: 'John Smith',  
//         age: new Map('age', 15),  
//         favoriteMovie: [ 
//             { 
//                 title: 'Saw',  
//                 genre: 'horror',  
//                 rating: 8 
//             } 
//         ] 
//     } 
// ]