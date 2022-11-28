//problem 1: Frequency Counter Pattern

const solution = (nums) => {
//step 1: edge cases
//if (!nums.length) return -1;

//step 2: initalize objects to keep track of the counts
let count1 = {};

//step 3: iterate through the elements in array and update to the object.
//check the frequency of each number in the array, if it exists(key), the value will increase by one
//if it does not exist, we will keep the value as one
for (let num of nums) {
    count1[num] = (count1[num] || 0) + 1
}

for (let key in count1) {
    //check if the key occurred more than once
    if (key > (nums.length/2)) return key
}
//if no main element, return -1
//return -1
}

console.log(solution([2,2,1,1,1,2,2]))

//problem 2: Divide and Conquer Pattern

// const arr1 = [-1,0,3,5,9,12]
// const target = 9

//time complexity: O( log n)
//space complexity: O(1) ; returning an integer

// const binaryIterativeSearch = (nums, target) => {
  //step 1: edge cases
//   if (!nums.length) return -1;

  //step 2: initalize variables
//   let start = 0;
//   let end = nums.length - 1;

//   while (start < end) {
    //create a divider
    // let middleIndex = Math.floor((start + end) / 2);
    //return middle of this is the target we're looking for
    // if (nums[middleIndex] === target) {
    //   return middleIndex;
      //else start < target
    // } else if (nums[middleIndex] < target) {
    //   start = middleIndex + 1;
      //else start > target
//     } else {
//       end = middleIndex - 1;
//     }
//   }

//   return -1;

  //else return -1
//};

//console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 2));
