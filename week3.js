//problem 1: Frequency Counter Pattern

//const nums = (arr) => {
//step 1: edge cases


//step 2: 


//step 3: 


//}



//problem 2: Divide and Conquer Pattern

// const arr1 = [-1,0,3,5,9,12]
// const target = 9

//time complexity: O( log n)
//space complexity: O(1) ; returning an integer

const binaryIterativeSearch = (nums, target) => {
//step 1: edge cases
if (!nums.length) return -1

//step 2: initalize variables
let start = 0;
let end = nums.length - 1;

//create a divider
//return middle of this is the target we're looking for

while (start < end) {
    let middleIndex = Math.floor((start + end)/2)

    if (nums[middleIndex] === target) {
        return middleIndex;
    } else if (nums[middleIndex] < target) {
        start = middleIndex + 1;
    } else {
        end = middleIndex - 1;
    }
}

return - 1
//else start < end

//else start > end

//else return -1

}

console.log(binaryIterativeSearch([-1,0,3,5,9,12], 2))
