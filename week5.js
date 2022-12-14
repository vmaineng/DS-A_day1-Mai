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

const fakeData = { name: "mai", last: "vang" };

//merge sort by the rank
const mergeSortRank = (obj) => {
  // edge case - check if obj's length is <= 1 b/c can assume it's already sorted, return obj as is
  if (Object.keys(obj).length <= 1) return obj;

  //find middle of obj
  let mid = Math.floor(Object.keys(obj).length / 2);
  console.log(mid); //1

  //find left of obj
  let left = mergeSortRank(obj.slice(0, mid));

  //find right of obj
  let right = mergeSortRank(obj.slice(mid));

  //merge the sub arrays back together
  return merge(left, right);

  function merge(arr1, arr2) {
    //initialize empty array
    let results = [];

    //initalize pointers
    let i = 0;
    let j = 0;

    //loop through each array until the end of the array has been reaached
    for (let i in data.results.payload) {
      data.results.payload[i].profile;
    }
  }
};

console.log(mergeSortRank(data));

//merge sort by the ratings and rank

//problem 2 singly linked list

//creating the node class
// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

//push and pop for SLL class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //create a new node to pass in the new val
    let newNode = newNode(val);

    //edge case - if linked list is empty, then assign head and tail to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //update length
    this.length++;

    //return the entire linked list back
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = this.tail;

    //traverse through linked list
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;

    //set newTail to point to null
    this.tail.next = null;

    //modify length
    this.length--;

    //if last value is removed and linked list is empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

//problem 3
//find maxarea - sliding window to find max between two elements

//const maxArea = (height) => {};
