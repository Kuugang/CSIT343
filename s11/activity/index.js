/*
    2. Create a function called checkAverage which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        - add parameters appropriate to describe the arguments.
        - create a new function scoped variable called average.
        - calculate the average of the 4 number inputs and store it in the variable average.
        - research the use of Math.round() and round off the value of the average variable.
        - update the average variable with the use of Math.round()
        - console.log() the average variable to check if it is rounding off first.
    3. Add an if statement in the checkAverage function to check if the value of avg is less than or equal to 74.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is F"
    4. Add an else if statement to check if the value of avg is greater than or equal to 75 and if average is less than or equal to 79.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is D"
    5. Add an else if statement to check if the value of avg is greater than or equal to 80 and if average is less than or equal to 84.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is C"
    6. Continue to add an else if statement in the checkAverage function to check if the value of avg is greater than or equal to 85 and if average is less than or equal to 89.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is B"
    7. Add an else if statement to check if the value of avg is greater than or equal to 90 and if average is less than or equal to 95.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A"
    8. Add an else if statement to check if the value of average is greater than 96.
        - if it is, return the following message:
        - "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.
*/

function checkAverage(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let avg = Math.round(sum / 4);
  let grade;
  console.log(avg);

  if (avg <= 74) {
    grade = "F";
  } else if (avg >= 75 && avg <= 79) {
    grade = "D";
  } else if (avg >= 80 && avg <= 84) {
    grade = "C";
  } else if (avg >= 85 && avg <= 89) {
    grade = "B";
  } else if (avg >= 90 && avg <= 90) {
    grade = "A";
  } else {
    grade = "A+";
  }
  return (
    "Hello, student, your average is " +
    avg +
    ". The letter equivalent is " +
    grade
  );
}

// Mini Activity (5 mins):// 1. Create a function determineTyphoonIntensity(windSpeed) that returns a message based on wind speed:// < 30: "Not a typhoon yet."// 30 - 61: "Tropical depression detected."// 62 - 88: "Tropical storm detected."// 89 - 117: "Severe tropical storm detected."// 118+: "Typhoon detected."// 2. Test the function with console.log().// console.log(determineTyphoonIntensity(224)); // Expected: "Typhoon detected."// 3. Take a screenshot of your browser console showing the function’s output.// 4. Send the screenshot in the chat.
//
function determineTyphoonIntensity(windSpeed) {
  if (windSpeed >= 118) {
    console.log("Typhoon detected");
  } else if (windSpeed >= 89) {
    console.log("Severe tropical storm detected");
  } else if (windSpeed >= 62) {
    console.log("Tropical storm detected");
  } else if (windSpeed >= 30) {
    console.log("Tropical depression detected");
  } else {
    console.log("Not a typhoon");
  }
}
console.log(determineTyphoonIntensity(100));
