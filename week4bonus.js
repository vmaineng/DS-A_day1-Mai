//capitalizeFirstLetter

//iterative approach
// const capitalizeFirstLetter = (array) => {
//     return array.map(element => element.charAt(0).toUpperCase() + element.slice(1));
// }

//recursive approach
const capitalizeFirstLetter = (array) => {
  //edge case - if array is empty, return -1;
  if (!array.length) return -1;

  //base case - if array has one element, grab the first character and uppercase, then add rest of the words
  if (array.length === 1) return [array[0][0].toUpperCase() + array[0].slice(1)]; //need array around otherwise it converts to an object

  //recursive case - recall the function
  //if array is not capitalize, grab the first letter of each word
  let res = capitalizeFirstLetter(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0][0].toUpperCase() + array[0].slice(1))  //res.push is not a function
return res;
};

console.log(capitalizeFirstLetter(['dog', 'car', 'horse']));
