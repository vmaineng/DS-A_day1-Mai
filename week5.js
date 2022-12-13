//problem 1 merge sort

const data = {
  results: {
    payload: [
      {
        profile: {
          name: "Tony",
          rank: 9,
          favorites: [
            {
              title: "Spider-Man",
              rating: 5,
            },
            {
              title: "Spongebob",
              rating: 9,
            },
          ],
        },
      },
      {
        profile: {
          name: "John",
          rank: 2,
          favorites: [
            {
              title: "Hulk",
              rating: 1,
            },
            {
              title: "Top Gun",
              rating: 8,
            },
          ],
        },
      },
    ],
  },
};


//console.log(data["results"]["payload"][1]["profile"]["rank"]); //how to get rank of 2 for John
//console.log(data.results.payload) - gets to array of object filled with profiile

//console.log(data["results"]["payload"][1]["profile"].favorites[0].rating); //got rating for Hulk for John

const fakeData = {name: "mai", last: "vang"}

//merge sort by the rank
const mergeSortRank = (obj) => {

// edge case - check if obj's length is <= 1 b/c can assume it's already sorted, return obj as is
if (Object.keys(obj).length <= 1) return obj;

//find middle of obj
let mid = Math.floor(Object.keys(obj).length/2)
console.log(mid) //1

//find left of obj
let left = mergeSortRank(obj.slice(0, mid))

//find right of obj
let right = mergeSortRank(obj.slice(mid))

//merge the sub arrays back together
return merge(left, right)

function merge(arr1, arr2) {

    //initialize empty array
    let results = [];

    //initalize pointers
    let i = 0;
    let j = 0;

    //loop through each array until the end of the array has been reaached
    for (let i in data.results.payload) {
        data.results.payload[i].profile
    }
}

}

console.log(mergeSortRank(data))



//merge sort by the ratings and rank


//problem 2 singly linked list

//creating the node class
// class Node {
//     constructor(val){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }

//push and pop for SLL class
// class SinglyLinkedList{
//     constructor() {
        
//     }
// }


//problem 3
//find maxarea - sliding window to find max between two elements

const maxArea = (height) => {
    
}
