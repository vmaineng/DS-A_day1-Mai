//problem 1 - binary search - triangle - two sides should equal greater than 3rd side

//brute force method
//step 1 - edge cases
//if array empty, then return -1

// const triangleNumber = (nums) => {
//   if (!nums.length) return -1;

  //step 2 -
  //initialize sum to keep track of how many triplets there are
  // let sum = 0;

  //iterate through each index

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       if (
  //         nums[i] + nums[j] > nums[k] &&
  //         nums[i] + nums[k] > nums[j] &&
  //         nums[j] + nums[k] > nums[i]
  //       ) {
  //         sum++;
          //console.log(sum);
//         }
//       }
//     }
//     return sum;
//   }
// };

// console.log(triangleNumber([2, 2, 1, 5]));

//const triangleNumber = (nums) => {
  //nums.sort();

//}

//console.log(triangleNumber([2,2,3,4]))

//problem 2 - frequency counter pattern

//brute force method


// const findDuplicates = (nums) => {
  //step 1 - edge cases 

  // if (!nums.length) return -1;

//step 2 - loop through to see if numbers are the same then add them to the total

//   let sum = 0; 

//   for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++){
//       if (nums[i] === nums[j]){
//         console.log(nums[i], nums[j])
//         sum += 1;
//       } else {
//         return 0;
//       }
//     }
//   }
// }


const findDuplicates = (nums) => {
//step 1 - edge cases
if (!nums.length) return -1;

//step 2 - initialize variables
//use set to get an array of all the integers that appears twice
let set = new Set(nums);

//step 3 - iterate through each element to check the frequency

for (let n of nums) set.has(n) ? set.delete(n) : set.add(n)

return Array.from(set)

}

console.log(findDuplicates([4,3,2,7,8,2,3,1]))
