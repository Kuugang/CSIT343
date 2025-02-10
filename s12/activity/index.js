/*
    2. Create a function called login which is able to receive 3 parameters called username,password and role.
        - add an if statement to check if the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
        - if it is, return the following to inform the user that their input should not be empty:
        - "Inputs must not be empty"

    3. Add an else statement to the if statement in the login function. Inside the else statement add a switch to check the user's role add 3 cases and a default:
        - Look up JS Switch Statements to be able to accomplish the output for this activity.
        - if the user's role is admin, return the following message:
        - "Welcome back to the class portal, admin!"
        - if the user's role is teacher, return the following message:
        - "Thank you for logging in, teacher!"
        - if the user's role is a student, return the following message:
        - "Welcome to the class portal, student!"
        - if the user's role does not fall under any of the cases, as a default, return a message:
        -  "Role out of range."
        - Look up Switch Statements to be able to complete the output for this activity.
*/

/*
    4.  Create a function `getSeason()` that returns the season based on the month.
        - Use a switch case statement.
        - Dec - Feb = Winter
        - Mar - May = Spring
        - Jun - Aug = Summer
        - Sep - Nov = Fall
*/

function login(username, password, role) {
  if (
    !username ||
    !password ||
    username.trim().length <= 0 ||
    password.trim().length <= 0
  ) {
    return "Inputs must not be empty";
  } else {
    switch (role.toUpperCase()) {
      case "ADMIN":
        return "Welcome back to the class portal, admin!";
      case "TEACHER":
        return "Thank you for logging in, teacher!";
      case "STUDENT":
        return "Welcome to the class portal, student!";
      default:
        return "Role out of range";
    }
  }
}

function getSeason(month) {
  let season;
  switch (month.toUpperCase()) {
    case "DECEMBER":
    case "JANUARY":
    case "FEBRUARY":
      season = "Winter";
      break;
    case "MARCH":
    case "APRIL":
    case "MAY":
      season = "Spring";
      break;
    case "JUNE":
    case "JULY":
    case "AUGUST":
      season = "Summer";
      break;
    case "SEPTEMBER":
    case "OCTOBER":
    case "NOVEMBER":
      season = "Fall";
      break;
    default:
      return "Invalid Month";
  }
  return season;
}
