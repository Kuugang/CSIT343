//Add Validation:
//Implement validation for the following input fields:
//Email: Must include @ symbol.
//Display an error message for invalid email format.
//Password: Must be at least 8 characters long.
//Display an error message if shorter.
//Confirm Password: Must match the Password field.
//Display an error message if passwords do not match.
//Use JavaScript event listeners for the input event to provide feedback.
//Error message must not be visible initially.

const registerForm = document.getElementById("register-form");
const inputs = registerForm.getElementsByTagName("input");
const emailInput = inputs[0];
const passwordInput = inputs[1];
const confirmPasswordInput = inputs[2];

const emailInputError = document.getElementById("email-input-error");
const passwordInputError = document.getElementById("password-input-error");
const confirmPasswordInputError = document.getElementById(
  "confirm-password-input-error",
);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateForm() {
  let valid = true;

  emailInputError.classList.add("hidden");
  passwordInputError.classList.add("hidden");
  confirmPasswordInputError.classList.add("hidden");

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

  if (passwordInput.value != confirmPasswordInput.value) {
    confirmPasswordInputError.innerText = "Passwords do not match";
    confirmPasswordInputError.classList.remove("hidden");
    valid = false;
  }
  return valid;
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  fetch("https://movieapp-api-lms1.onrender.com/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  });
});
