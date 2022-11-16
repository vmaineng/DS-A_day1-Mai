# Problem 1

Big O notation is a method to measure algorithms. It takes into consideration how much time the code will take to run (time) and how much memory it will consume (space). Also, it helps look at the trends of the code instead of each specific details.

# Problem 2

1. O(1) constant = rank 1\
   It doesn't matter on the length of the inputs because the time complexity will remain the same.

```js
const example1 = (num1, num2) => {
  return num1 * num2;
};
```

2. O(log n) logarimetic = rank 2\
   This time complexity starts increasing in the beginning and slowly decreased at the end because it does not look at each elements\
   ex: skip by 2+ in the step && binary search

```js
for (let i = 0; i < arr.length; i *= 2) {
  console.log(i);
}
```

3. O(n) linear = rank 3\
   It iterate one item at a time
   ex: for..loops, while loop, forEach, map, find\

```js
array.forEach((element) => {
  console.log(element);
});
```

4. O(n^2) quadratic - n x n; rank 4\
   ex: nested for loops; map inside a for loop\

```js
for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < n.length; j++) {
    console.log(i, j);
  }
}
```

5. O(n!) factorial = rank 5\
    difficult to achieve in real life
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

# Problem 3

all computers will produce different output. It saves time and money, and can't assess the same code with all computers. Also, it has scalability of the code ; if we add more data and code, we want it to execute it effectively

# Problem 4

Not all computers and browsers are built equally; therefore, they will produce a different time output each time. every browsers are built different

# Problem 5

total: 0(1)+ O(n) + O(n) + O(n^2)

consolidated: 1 + 2n+ n^2 => 1 + n + n^2 => n^2

final: n^2 b/c we look at worst case scenario

# Problem 6

total: 1 + n + n ^ 3

consolidated: n^3

# Problem 7

we don't care about details, we care about trend. which one is the worst behavior

# Problem 8

space = how much memory it takes. save money to use less memory in the computer

# Problem 9

1. boolean = constant ; 1 or 0;
2. undefined = constant
3. null = constant
4. number = constant
5. string = linear; strings can be constant;
6. array = linear
7. object = linear

# Problem 10

1. array = when you want to access an ordered list and can access the data fast knowing where it is stored in memory
2. object = when you want to access key collection and the data does not need to be in order

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

time: n^2\
space: linear\
explanation: 

## problem 2

time: \
space:

## problem 3

time: \
space:

## problem 4

time: \
space:

## problem 5

time: \
space:

## problem 6

time: \
space:

## problem 7

time: \
space:

## problem 8

time: \
space:

## problem 9

time: \
space:

## problem 10

time: \
space:
