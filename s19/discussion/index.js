// console.log("Hello World");

// [SECTION] Non-Mutator Methods
// are functions that do not modify or change an array after they're created.

// indexOf()
// returns the index number of the first matching element found in the array.
// if no match is found, the result will be -1
let countries = ["US", "PH", "SG", "CAN", "TH", "PH", "FR", "DE"];

let firstIndex = countries.indexOf("PH");
console.log("Result of indexOf method: " +firstIndex);

let invalidCountry = countries.indexOf("BR");
console.log("Result of indexOf method: " +invalidCountry);

// slice()
// Portion/slice elements from an array AND returns a new array.

// Slicing off elements from the specified index (2), last element of the array. 
let slicedArrayA = countries.slice(2);
console.log("Result from slice method:");
console.log(slicedArrayA);

// Slicing off elements from the specified index, to another index
let slicedArrayB = countries.slice(2, 4);
console.log("Result from slice method:");
console.log(slicedArrayB);

// Slicing off element starting from the last element of an array
let slicedArrayC = countries.slice(-3);
console.log("Result from slice method:");
console.log(slicedArrayC);

// concat()
// Combines two arrays and returns the combined result

let taskArrayA = ["drink HTML", "eat Javascript"];
let taskArrayB = ["inhale CSS", "breathe SASS"];
let taskArrayC = ["get Git", "be Node"];


let tasks = taskArrayA.concat(taskArrayB);
console.log("Result from concat method: ");
console.log(tasks);

// combined multiple arrays
let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log("Result from concat method: ");
console.log(allTasks);

// combine arrays with elements.
let combinedTasks = taskArrayA.concat("smell Express", "throw React");
console.log("Result from concat method: ");
console.log(combinedTasks);

// includes()
// Checks if the given argument exists within the array.
// returns true if item/element was found, else, returns false

let carBrands = ["Toyota", "Nissan", "Chevrolet", "Ford"];
let isExisting1 = carBrands.includes("Ford");
let isExisting2 = carBrands.includes("Ferrari");

console.log("Result of includes method: ");
console.log(isExisting1);
console.log(isExisting2);

/*
    Mini Activity (5 mins) 1:45 pm
    
    1. Create an array named guestList with the names: ["Alice", "Bob", "Charlie", "David", "Eve"].
    2. Check if "Charlie" is in the guest list and print the result.
    3. Find and print the index of "David".
    4. Create a new array containing only the first and last guests, then print the result.
    5. Take a screenshot of the console output and send it in the chat.

    Expected output:
    Guest list: Alice,Bob,Charlie,David,Eve
    Is Charlie on the list? true
    David index number is: 3
    First and last guests: Alice,Eve
*/

let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Guest list: " +guestList);

console.log("Is Charlie on the list? " +guestList.includes("Charlie"));

console.log("David index number is: " +guestList.indexOf("David"));

// Method Chaining
let firstAndLast = guestList.slice(0, 1).concat(guestList.slice(-1));
console.log(firstAndLast);
console.log("First and last guest: "+firstAndLast);

console.log(guestList)