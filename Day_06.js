// Activity 1: Array Creation and Access

// Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);

// Activity 2: Array Methods (Basic)

// Task 3
arr.push(6);
console.log("After push:", arr);

// Task 4
arr.pop();
console.log("After pop:", arr);

// Task 5
arr.shift();
console.log("After shift:", arr);

// Task 6
arr.unshift(0);
console.log("After unshift:", arr);

// Activity 3: Array Methods (Intermediate)

// Task 7
let doubledArray = arr.map(num => num * 2);
console.log("Doubled array:", doubledArray);

// Task 8
let evenArray = arr.filter(num => num % 2 === 0);
console.log("Even numbers array:", evenArray);

// Task 9
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("Sum of array elements:", sum);

// Activity 4: Array Iteration

// Task 10
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Task 11
console.log("Using forEach method:");
arr.forEach(element => console.log(element));

// Activity 5: Multi-dimensional Arrays

// Task 12
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix:", matrix);

// Task 13
let specificElement = matrix[1][2]; // Accessing element at second row, third column
console.log("Specific element at matrix[1][2]:", specificElement);
