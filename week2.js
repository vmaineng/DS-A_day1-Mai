//problem #1: multiple pointers pattern

const subsequence = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  //if array1 was empty, then there's nothing for array2 to compare to, so it should be false
  //if array1 = 'cat'
  //array2 = ' '
  //then there's nothing for array2 to compare to, so it should be false
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  let Index = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr1[Index]) {
      Index++;
      if (Index === arr1.length) {
        return true;
      }
    }
  }
  return false;
};

console.log(subsequence("sing", "sting"));

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

const longestSubstringInString = (str) => {
    if (str.length === 0) return 0;

let set = new Set(); //stores unique variables from string ; [ ]
let j = 0; //start both at 0

    while (j < str.length){
        if (!set.has(str[j])){
            set.add(str[j])
            j++
        } else {
           return set.size
        }
    }
}

 console.log(longestSubstringInString('rithmschool'))

//' thisisawesome'
// i = [t, h, i, s, i, s, a, w, e, s, o, m , e ]
//j = [t, h, i, s,]


//bonus challenge

// const bonusQuestion = (str) => {

//     let map = new Map();
//     let start = 0;
//     let maxLength = 0;
   

//     for (let i = 0; i < str.length; i++) {
//         if(map.has(str[i])) {
//             maxLength -= start //if contains value, then decrease window from the  start index
//         } else {
//             map.set(str[i]) //set stores key; not value
//             maxLength += str[i]
//         }
//     }
//     return maxLength;
// }

// console.log(bonusQuestion('rollercoaster'));

//map ={ 'r': 0, 'o': 1, 'l': 2, 'e': 4, 'c': 5, 'a': 7, 's': 8, 't': 9}
//i = 0;
//value = 'r'
//map.has r; if not, set the value in array
//then get