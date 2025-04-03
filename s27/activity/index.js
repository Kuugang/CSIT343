const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");

const prevFullName = document.getElementById("prevFullName");
const prevEmail = document.getElementById("prevEmail");
const prevMobileNumber = document.getElementById("prevMobileNumber");

firstName.addEventListener("input", () => {
  prevFullName.innerHTML = `${firstName.value} ${lastName.value}`;
});

lastName.addEventListener("input", () => {
  prevFullName.innerHTML = `${firstName.value} ${lastName.value}`;
});

email.addEventListener("input", () => {
  prevEmail.innerHTML = `${email.value}`;
});

mobileNumber.addEventListener("input", () => {
  if (/^09\d{9}$/.test(mobileNumber.value)) {
    prevMobileNumber.innerHTML = mobileNumber.value;
    prevMobileNumber.style.color = "black";
  } else {
    prevMobileNumber.innerHTML = "Invalid Mobile Number!";
    prevMobileNumber.style.color = "red";
  }
});

document.addEventListener("keyup", () => {
  if (
    /^09\d{9}$/.test(mobileNumber.value) &&
    firstName.value.trim().length != 0 &&
    lastName.value.trim().length != 0
  ) {
    document.getElementById("greeting").innerHTML =
      `Hello, I am ${firstName.value} ${lastName.value}, you can contact me on this number ${mobileNumber.value}`;
  } else {
    document.getElementById("greeting").innerHTML = "";
  }
});
