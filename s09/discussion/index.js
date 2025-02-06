console.log("S09 Discussion!");

// Function and Parameters
/*
- A "parameter" acts as a named variable/container that exists only inside of a function
- It is used to store information that is provided to a function when it is called/invoked.

	Syntax:
		function functionName(parameter) {
			//code to be executed
		}

		functionName(argument)

*/

function printName(name) {
  console.log("My name is " + name);
}

printName("Juana");
printName("John");

// Variables as Arguments

let sampleVariable = "Jane";
printName(sampleVariable);

function checkDivisibilityBy8(num) {
  let remainder = num % 8;
  console.log("The remainder of " + num + " divided by 8 is: " + remainder);
  let isDivisibleBy8 = remainder === 0;
  console.log("Is " + num + " divisible by 8?");
  console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
checkDivisibilityBy8(28);
