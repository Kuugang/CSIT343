// [SECTION] Array Manipulation with Array Methods
// built-in functions and methods for arrays, wherein it will allow us to manipulate and access array items.
// Three kinds of array methods:
// 1. Non-mutators methods allow us to manage and perform tasks on an array without updating the contents of the original array.
// 2. Iterator Methods allow us to loop over elements/items in an array and perform task with them.
// 3. Mutator methods allow us to manage and perform tasks on an array by updating the contents of the original array.

// [SECTION] Mutator Methods
// Adding and removing elements from the array.

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log("Current Array:");
console.log(fruits);
console.log(fruits.length);

// push()
// Adds an element in the end of an array AND returns the array's new length.
let fruitsLength = fruits.push("Mango");
console.log("push method return: " + fruitsLength);
console.log("Mutated array from push method:");
console.log(fruits);
console.log(fruits.length);

// add multiple elements to an array
fruits.push("Avocado", "Guava");
console.log("Mutated array from push method:");
console.log(fruits);
console.log(fruits.length);

// let's try a function
function addFruit(fruit) {
  fruits.push(fruit);
}

addFruit("Pineapple");
console.log("Mutated array from push method:");
console.log(fruits);
console.log(fruits.length);

// pop()
// Removes the last element in an array AND returns the removed element.

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log("Mutated array from pop method:");
console.log(fruits);
console.log(fruits.length);

function removeFruit() {
  fruits.pop();
}

removeFruit();
console.log("Mutated array from pop method:");
console.log(fruits);
console.log(fruits.length);

// splice()
// Simulataneously removes an elements from a specified index number and adds elements
// Syntax: arrayName.splice(startingIndex, deleteCount, elementsToBeAdded);

let splicedFruits = fruits.splice(1, 2, "Lime", "Cherry");
console.log(splicedFruits);
console.log("Mutated array from splice method: ");
console.log(fruits);

function spliceFruits(index, deleteCount, fruit) {
  fruits.splice(index, deleteCount, fruit);
}

spliceFruits(1, 1, "Avocado");
spliceFruits(2, 1, "Durian");
console.log("Mutated array from splice method: ");
console.log(fruits);

/*
    Mini Activity (5 mins) until 1:46 pm
    1. Create an array named guestList with the following names: ["Alice", "Bob", "Charlie", "David"]. Print the initial array.
    2. "Eve" arrives and should be placed between "Alice" and "Bob". Print the updated array.
    3. "Charlie" decides to leave. Print the updated array.
    4. The last guest on the list also decides to leave.  Print the updated array.
    5. Print the final length of guestList.
    6. Take a screenshot of the browser console and send it in the chat.

    Expected Output:
    ["Alice", "Bob", "Charlie", "David"]
    ["Alice", "Eve", "Bob", "Charlie", "David"]
    ["Alice", "Eve", "Bob", "David"] 
    ["Alice", "Eve", "Bob"] 
    Final guest list length: 3
*/

let guestList = ["Alice", "Bob", "Charlie", "David"];
console.log(guestList);

guestList.splice(1, 0, "Eve");
console.log(guestList);

guestList.splice(3, 1);
console.log(guestList);

guestList.pop();
console.log(guestList);

console.log("Final guest list length: " + guestList.length);
