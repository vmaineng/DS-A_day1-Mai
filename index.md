# Problem 1

Big O notation is a method to indicate the best code to run and to measure how a code will perform. It looks at the trend of the operations it needs to take to complete to either produce a value or complete a task. Big O notation takes into consideration how much time the code will take to run (time) and how much memory it will consume (space) when executed. It allows us to see the bigger picture instead of focusing on the details.

# Problem 2

1. O(1) constant = rank 1\
   It doesn't matter how many inputs there are because the amount of work to run the code will remain the same for the input.

```js
const box = [1, 2, 3, 4];

const logBoxes = (box) => {
  console.log(box[0]);
  console.log(box[1]);
};

logBoxes(box); // total time complexity: O(2) => consolidated: 0(1)
```

2. O(log n) logarimetic = rank 2\
   This time complexity starts increasing in the beginning and slowly tapers off at the end. Also, it does not iterate through every input.\
   ex: skip by 2+ in the step && binary search (lookup, insert, and delete)

```js
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i *= 3) {
  console.log(i);
}
```

3. O(n) linear = rank 3\
   Linear time occurs when the code is applying the same amount of work to each individual item in the data structure.
   ex: for..loops, while loop, forEach, map, find\

```js
const array = [1, 2, 3, 4];

array.forEach((element) => { //O(n)
  console.log(element);
});

for (let i = 0; i < array.length; i++){ //O(n)
    console.log(array[i]);
}
```

4. O(n^2) quadratic - n x n; rank 4\
   As the inputs increase, the amount of work for each element increases significantly due to a multiplication factor. For example, if there are 4 elements in a nested for...loops, the amount of work increases from 4 to 4 x 4 = 16, etc.\
    ex: nested for loops; map inside a for..loop; an if followed by a for..loop\

```js
const array = [1, 2, 3, ,4]

function logTwo(n)
for (let i = 0; i < n.length; i++) { // O(n)
  for (let j = 0; j < n.length; j++) { // O(n)
    console.log(n[i], n[j]);
  }
}

logTwo(array) //O(n x n)
```

5. O(n!) factorial = rank 5\
   It is difficult to achieve in real life. There are infinite ways to achieve the solutions.\
    ex: recursion

```js
function getLog(base, n) {
  if (base === 0) {
    return 1;
  } else {
    return base * getLog(base, n - 1);
  }
}

console.log(getLog(4, 4));

// 4 * 4 * 4 * 4 = 256 
```

# Problem 3 

We care about Big O and code performance because:

1. It allows programmers to have a general grading metric to assess the performance of how "fast" the code will take to execute.
2. It saves time and money. Also, it helps generate more revenue for the companies.
3. It helps programmers dictate the scalability of the code to be able to handle a signifcant amount of traffic;

# Problem 4

We can't use performance.now() to measure the results of the code since not all computers and browsers are built equally; therefore, the computers will calculate a different 'run' result each time. For example, person1 is running the same code on their Windows computer on Firefox and person2 is running the same code on a Mac using Google Chrome. Although they are running the same code, they will get different results due to different browsers and computers.

# Problem 5

Two constant (push & pop), two linear, and nested for...loop\
<strong>Total: </strong> O(1) + 0(1)+ O(n) + O(n) + O(n^2)

<strong>Consolidated: </strong> 2 + 2n+ n^2 => 2 + n + n^2 => n^2

Final: n^2 b/c worst case scenario has more weight on how the code will perform.

# Problem 6

Constant, linear, constant, and nested triple for...loop
<strong>Total: </strong> 1 + n + 1 + n ^ 3 => 2 + n + n^

<strong>Consolidated: </strong> n^3

# Problem 7

We ignore constants and consolidate our time complexitities because we don't care about the details, we only care about the trend. The trends are listed in the Big O complexity chart, as noted on this website (https://www.bigocheatsheet.com/). In addition, the trend with the worst behavior has more weight to dictate Big O notation.

# Problem 8 

Space complexity pertains to how much memory the code will use. We care about space complexity to save money to refrain from having to buy more storage(memory) space for the computer.

# Problem 9

1. boolean = constant
2. undefined = constant
3. null = constant
4. number = constant

5. string (text) = linear;
6. array = linear (variable) or constant (fixated);
7. object = linear

# Problem 10

1. Array = when you want to access an ordered list and can access the data fast
2. Object = when you want to access a key collection and the data does not need to be in order

# Problem 11

1. constant
2. inserting: constant
3. removing: constant
4. searching 1: constant
5. searching 2: linear
6. accessing: constant
7. retrieving keys: linear
8. retrieving values: linear

# Problem 12

1. push: constant
2. unshift: linear
3. remove 1: constant
4. remove 2: linear
5. searching 1: linear
6. searching 2: quadratic
7. retrieving: constant
8. method 1: linear
9. method 2: linear
10. method 3: linear
11. method 4: linear
12. method 5: linear
13. method 6: linear

# Problem 13

## problem 1

```js
function findFirstIndexOfNumber(number, array){
    for(let i=0; i<array.length; i++){// O(n^2)
        if(array[i]==number){
            return i;
        }
    }
    return -1;
}
```

time: O(n^2) because two nested loops (if nested inside of a for...loop)\
space: constant because it returns an integer.

## problem 2
```js
function findEachIndexOfNumber(number, array){
    let arrayOfIndexes = []; //O(1)
    array.forEach(function(element,index){ //O(n^2)
        if (element === number){
            arrayOfIndexes.push(index);
        }
    });
    return arrayOfIndexes;
}

//Total time: O(1) + O(n^2) =>  O(n^2)
```
time: O(n^2) because nested loops has a heavier drag than constant\
space: linear because it returns an array of elements

## problem 3
```js
const array = [36, 14, 1, 7, 21];

function higherOrLower(array){
    if (array[array.length - 1] > array [0]) {//O(n)
        return "Higher"
    } else if (array[array.length - 1] < array[0]){
        return "Lower"
    } else{
        return "Neither";
    }
}
```

time: O(n) since if..else is linear\
space: linear because it returns text (string).

## problem 4
```js
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
    let sum = 0; //O(1)
    for (let i = 0; i< array.length; i++){ // O(n)
        sum += array[i];
    }
    return sum;
}
```
time: O(n) because you're iterating through each element in the for...loop\
space: linear because it returns an array (variable and not fixated) 

## problem 5

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

function determineSumOfSequentialArray(array) {
    return array.length * (array.length + 1)/2; //O(n) + O(n/2) 
}
```

time: O(n) because we removed constants and iterate through each individual item in the array due to array.length\
space: constant because it returns an integer;

## problem 6
```js
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length -1) {
    let middleIndex = Math.floor((beginIndex + endIndex) / 2); //O(1)/2
    if (array[middleIndex] === number){ //O(n)
        return middleIndex;
    } else if (beginIndex >= endIndex) {
        return -1;
    } else if (array[middleIndex] < number){
        beginIndex = middleIndex + 1;
        return recursiveBinarySearch(number, array, beginIndex, endIndex); //O(n!)
    } else if (array[middleIndex] > number){
        beginIndex = middleIndex - 1;
        return recursiveBinarySearch(number, array, beginIndex, endIndex); //O(n!)
}

//total time = O(1)/2 + O(n) + O(n!) + O(n!) => O(n!)
```


time: O(n!) because it is a recursion, which has a heavier drag on time complexity. \
space: constant because it returns an integer;

## problem 7
```js
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];

function compareArrays(arra1, array2){
    let arrayOfPairs = []; //O(1)
    array1.forEach(function(e, i) { //O(n^2)
        array2.forEach(function(e2, i2){
            if (e ===e2 ){ //O(n)
                arrayOfPairs.push([i, i2]);
            }
        })
    });
    return arrayOfPairs;
}

//total time: O(1) + O(n^2) + O(n) => O(n^2)
```


time: O(n^2) because it is the worst case scenario\
space: linear because it returns an array of pairs (variable and not fixated).

## problem 8

```js
function sortByValue(array){ //O(n^2)
    function swap(array, index1, index2){
        let temporaryValue = array[index1];
        array[index1] = array[index2];
        array[index2] = temporaryValue;
    }
    let count = 1;
    while (count < array.length) { //O(n)
        let swapCount = 0; //O(1)
        for (let i = 0; i < array.length-count; i++) {//O(n)
            if (array[i] > array[i + 1]) {
                swap(array, i, i+1); //O(n!)
                swapCount++;
            }
        }
        count++;
    }
    return array;
}

//total time = O(n^2) + O(n)+ O(1) + O(n) + O(n!)
```

time: O(n!) is the worst case scenario \
space: linear because it returns a variable and not fix values.

## problem 9

```js
function returnDupes(array, array2){
    let dupeArray = []; //O(1)
    array.forEach(function(element){ //O(n^2)
        if (array2.includes(element)){
            dupeArray.push(element); //O(1)
        }
    });
    return dupeArray;
}

//total time = O(1) + O(n^2) + O(1)
```

time: O(n^2) because of the nested loops are the worst case scenario compared to constant time.\
space: linear because it returns an array.

## problem 10

```js
function sumFilteredData(array){
    return array.filter(function(element){ //O(n)
        return ((element > 5) && (element <20)).reduce(function(valueToAdd, currentValue){ //O(n)
            return valueToAdd + currentValue
        }, 0);
    })
}
//Total time = 2O(n) => O(n)
```

time: O(n) because it is the trend\
space: constant because it returns an integer.
