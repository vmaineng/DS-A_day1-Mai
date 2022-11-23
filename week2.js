//problem #1: multiple pointers pattern

// const subsequence = (str1, str2) => {
//   let arr1 = str1.split("");
//   let arr2 = str2.split("");

//   //if array1 was empty, then there's nothing for array2 to compare to, so it should be false
//   //if array1 = 'cat'
//   //array2 = ' '
//   //then there's nothing for array2 to compare to, so it should be false
//   if (arr1.length === 0 || arr2.length === 0) {
//     return false;
//   }

//   let Index = 0;

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === arr1[Index]) {
//       Index++;
//       if (Index === arr1.length) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(subsequence("sing", "sting"));

//problem #2: sliding window pattern
//psuedocode
//loop through str array
// total += i != j
//break;

//start
//end = j will keep iterating through the length of str array
//checking to see if the set has the letter at the index
//add it, then keep iterating through
//else if it does have the letter at the index
//return the maxSum

// const longestSubstringInString = (str) => {
//     if (str.length === 0) return 0;

// let set = new Set(); //stores unique variables from string ; [ ]
// let j = 0; //start both at 0

//     while (j < str.length){
//         if (!set.has(str[j])){
//             set.add(str[j])
//             j++
//         } else {
//            return set.size
//         }
//     }
// }

//  console.log(longestSubstringInString('rithmschool'))

//' thisisawesome'
// i = [t, h, i, s, i, s, a, w, e, s, o, m , e ]
//j = [t, h, i, s,]


//bonus challenge
//ex: 'rollercoaster' => 'lercoast'
//start in middle and divide length by 2
//one end of the window expands to the left
//the other end expands to the right
//return size of the window


const bonusQuestion = (str) => {

    let map = new Map();
    let start = 0;
    let maxLength = 0;

    if (str.length === 0) return 0;


    for (let i = 0; i < str.length; i++) {
        if(map.has(str[i])) {
            start++;
            
        } else {
            map.set(str[i]) //set stores key; not value
        }
    }
    return maxLength;
}

console.log(bonusQuestion('rollercoaster'));

    // let set = new Set(); //stores unique variables from string ; [ ]
    // let j = 3; //start both at 0
    // let i = 0; 
    
    //     while (j < str.length){
    //         while (i < str.length){
    //         if (!set.has(str[j])){
    //             set.add(str[j])
    //             j++
    //         } else {
    //            return set
    //         }
    //     }
    //     }
    // }

    // let left = 0;
    // let right = str.length - 1;

    
    // let set = new Set();
    // let middle = Math.floor(str.length / 2);
    // // console.log(middle)

    // for (let i = middle; i < right; i++) {
    //     for (let j = i - 1; j > left; j--){
    //         console.log(i, j)
    //         if (!set.has(str[j])){
    //             set.add(str[j])
    //             j--
    //         console.log(set)
    //         } else if (!set.has(str[i])) {
    //             set.add(str[i])
    //             i++
    //             //console.log(set)
    //         } else {
    //             return set
    //         }
    //     }
    //}
//}



 //[    ]
 //0    str.length-1
 //i    j
