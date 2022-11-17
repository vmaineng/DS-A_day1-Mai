# Problem 1

Big O notation is a method to measure how a code will perform. It looks at the trend of the operations it needs to take to complete to either produce a value or complete a task. Big O notation takes into consideration how much time the code will take to run (time) and how much memory it will consume (space). It allows us to see the bigger picture instead of focusing on the details. 

# Problem 2

1. O(1) constant = rank 1\
   It doesn't matter how many inputs there are because the amount of work to run the code will remain the same for each input inserted into the code (known as constant time).

```js
const box = [1, 2, 3, 4]

const logBoxes = (box) => {
  console.log(box[0]);
  console.log(box[1]);
};

logBoxes(box); // total time complexity: O(2) => consolidated: 0(1)
```

2. O(log n) logarimetic = rank 2\
   This time complexity starts increasing in the beginning and slowly tapers off at the end. Also, it does not iterate through every single elements.\
   ex: skip by 2+ in the step && binary search (lookup, insert, and delete)

```js
const arr = [1, 2, 3, ,4]

for (let i = 0; i < arr.length; i *= 3) {
  console.log(i);
}
```

3. O(n) linear = rank 3\
   Linear time occurs when the code is applying the same amount of work to each individual item in the data structure.
   ex: for..loops, while loop, forEach, map, find\

```js
const array = [1, 2, 3, 4]

array.forEach((element) => {
  console.log(element);
});
```

4. O(n^2) quadratic - n x n; rank 4\
As the elements increases, the amount of work for each element increases significantly. For example, if there are 4 elements, the amount of work increases quadraticly (ex: starts at 4, increases to 16 (4^2), etc.\
   ex: nested for loops; map inside a for loop\

```js
const array = [1, 2, 3, ,4]

function logTwo(n)
for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < n.length; j++) {
    console.log(n[i], n[j]);
  }
}

logTwo(array)
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

console.log(getLog(16, 2));
```

# Problem 3 (come back to problem 2 and 3)
We care about Big O and code performance because:
1) All computers will produce different output. 
2) It saves time and money, and can't assess the same code with all computers. 
3) It has scalability of the code ; if we add more data and code, we want it to execute it effectively

# Problem 4

We can't use performance.now() to measure the results of the code since not all computers and browsers are built equally; therefore, the computers will calculate a different 'run' result each time. For example, person1 is running the same code on their Windows computer on Firefox and person2 is running the same code on a Mac using Google Chrome. Although they are running the same code, they will get different results due to different browsers and computer.

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

We ignore constants and consolidate our time complexitities because we don't care about the details, we only care about the trend. In addition, the trend with the worst behavior has more weight to dictate Big O. (need more)

# Problem 8 (need more)

Space complexity pertains to  how much memory the code will use. We care about space complexity to save money to refrain from having to buy more storage space for the computer.

# Problem 9

1. boolean = constant  
2. undefined = constant
3. null = constant
4. number = constant

1. string (text) = linear; 
2. array = linear
3. object = linear

# Problem 10

1. array = when you want to access an ordered list and can access the data fast
2. object = when you want to access a key collection and the data does not need to be in order

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

time: n^2 because two nested loops\
space: constant because it returns an integer.


## problem 2

time: \
space: linear because it returns an array of elements

## problem 3

time: \
space: linear because it returns text (string).

## problem 4

time: linear because you're iterating through each element in the\
space: constant because it returns an integer.

## problem 5

time: \
space: constant because it returns an integer;

## problem 6

time: \
space: constant because it returns an integer;

## problem 7

time: \
space: linear because it returns an array of pairs.

## problem 8

time: linear, linear, \
space: linear because it returns an array. 

## problem 9

time: linear, constant, constant => O(n)\
space: linear because it returns an array.

## problem 10

time: constant, constant => O(1)\
space: constant because it returns an integer.
