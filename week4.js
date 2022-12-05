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

//const capitalizeAllLetters = (array) => {

//edge cases
//if (!array.length) return -1;

//base case - exit the loop
//if (array.toUpperCase()) return array;

//recursive path - recall the function
//capitalizeAllLetters(array.toUpperCase());

//}

//console.log(capitalizeAllLetters(['tony', 'kim']));

//problem 3 recursion



//problem 4 recursion




//problem 5 bubble sort