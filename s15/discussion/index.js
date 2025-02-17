// List all the graduating students from a class

let studentNumberA = "2020-1923";
let studentNumberB = "2020-1924";
let studentNumberC = "2020-1925";
let studentNumberD = "2020-1926";
let studentNumberE = "2020-1927";

// array
let studentNumbers = [
  "2020-1923",
  "2020-1924",
  "2020-1925",
  "2020-1926",
  "2020-1927",
];

// [SECTION] Array
// used to store multiple related values into a single variable
// declared using square brackets ( [] ) are also known as "Array Literals"
// Arrays also provides a number of methods for further manipulation

let grade = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ["Acer", "Lenovo", "HP", "Dell"];

// this will work
// but not recommended
let mixedArr = [12, "Asus", null, undefined, {}];

console.log(grade);
console.log(mixedArr);

// write an array in separate line for readability
let myTasks = ["drink html", "eat javascript", "inhale css", "bake sass"];

console.log(myTasks);

// create an array with values from variables
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];

console.log(cities);

let arr = [];
arr[3] = "Hello";
console.log(arr);
console.log(arr.length); // 4

// [SECTION] Array .length property
// .length property allows us to get and set the total number of items in an array.

let blankArr = [];
console.log(blankArr.length); //0

let fruits = ["apple", "banana", "cherry"];
console.log("Initial Fruit Array: " + fruits);
console.log("Initial Fruit Array Length: " + fruits.length);

fruits.length -= 1;
console.log("Updated Fruit Array: " + fruits);
console.log("Updated Fruit Array Length: " + fruits.length);

function displayLength(array) {
  console.log(array.length);
}

displayLength(myTasks);
displayLength(["Jeff", "Matt", "Andrei"]);
