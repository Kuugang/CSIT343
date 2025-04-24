//Create a Login page with an input for email and password.
//Add Validation:
//Implement validation for the following input fields:
//Email: Must include @ symbol.
//Display an error message for invalid email format.
//Password: Must be at least 8 characters long.
//Display an error message if shorter.
//Use JavaScript event listeners for the input event to provide feedback.
//Error message must not be visible initially.
//Using fetch(), send the values of the email and password to the following URL:
//https://movieapp-api-lms1.onrender.com/users/login
//Check the response of the API. If the response is an object with property access with value as a token string.
//Use console log to check response.
//Show an alert() window.
//Update your local git repository and push to git with the commit message of Add activity code s31.

const loginForm = document.getElementById("login-form");
const inputs = loginForm.getElementsByTagName("input");
const emailInput = inputs[0];
const passwordInput = inputs[1];

const emailInputError = document.getElementById("email-input-error");
const passwordInputError = document.getElementById("password-input-error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//TODO: MAKE THIS GENERAL/REUSABLE
function validateForm() {
  let valid = true;

  emailInputError.classList.add("hidden");
  passwordInputError.classList.add("hidden");

  if (!emailRegex.test(emailInput.value)) {
    emailInputError.innerText = "Invalid email format";
    emailInputError.classList.remove("hidden");
    valid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordInputError.innerText =
      "Password must be at least 8 characters long";
    passwordInputError.classList.remove("hidden");
    valid = false;
  }

  return valid;
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const response = await fetch(
    "https://movieapp-api-lms1.onrender.com/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    },
  );

  if ([200, 201].includes(response.status)) {
    alert("Login successful");
  }
  const data = await response.json();
  console.log(data);
});
