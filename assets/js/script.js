//Criteria variables
var max;
var lowercase;
var uppercase;
var numeric;
var special;

//Criteria values
var lowercaseValues = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericValues = '0123456789';
var specialValues = '~!@#$%^&*()_+{}|:';

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
  //Criteria prompts
  //Max length for password
  var maxLength = window.prompt("Please enter a maxlength below 129, but greate than 7.");
  if (maxLength <= 128 && maxLength >= 8) {
    max = maxLength;
    console.log("The max characters will be " + max);
  } else if (maxLength < 8) {
    var maxLength = window.prompt("Invalid. Please select a number higher than 7.");
    max = maxLength;
  } else if (maxLength > 128) {
    var maxLength = window.prompt("Invalid. Please select a number lower than 129.");
    max = maxLength;
  } else {
  }

  //Lowercase characters prompt
  var lowercasePrompt = window.prompt("Would you like to include lowercase characters? Enter 1 for \"YES\" or 2 for \"NO\"");
  if (lowercasePrompt == 1) {
    lowercase = "yes";
    console.log("You want to include lowercase characters");
  } else if (lowercasePrompt == 2) {
    lowercase = "no";
    console.log("You don't want to include lowercase characters");
  } else {
    window.prompt("Invalid. Would you like to include lowercase characters? Enter 1 for \"YES\" or 2 for \"NO\"");
    console.log(lowercasePrompt);
  }

  //Uppercase characters prompt
  var uppercasePrompt = window.prompt("Would you like to include uppercase characters? Enter 1 for \"YES\" or 2 for \"NO\"");
  if (uppercasePrompt == 1) {
    uppercase = "yes";
    console.log("You want to include uppercase characters");
  } else if (uppercasePrompt == 2) {
    uppercase = "no";
    console.log("You don't want to include uppercase characters");
  } else {
    window.prompt("Invalid. Would you like to include uppercase characters? Enter 1 for \"YES\" or 2 for \"NO\"");
    console.log(uppercasePrompt);
  }

  //Numeric characters prompt
  var numbericPrompt = window.prompt("Would you like to include numeric characters? Enter 1 for \"YES\" or 2 for \"NO\"");
  if (numbericPrompt == 1) {
    numeric = "yes";
    console.log("You want to include numeric characters");
  } else if (numbericPrompt == 2) {
    numeric = "no";
    console.log("You don't want to include numeric characters");
  } else {
    window.prompt("Invalid. Would you like to include numeric characters? Enter 1 for \"YES\" or 2 for \"NO\"");
    console.log(numbericPrompt);
  }

  //Special characters prompt
  var specialPrompt = window.prompt("Would you like to include special characters? Enter 1 for \"YES\" or 2 for \"NO\"");
  if (specialPrompt == 1) {
    special = "yes";
    console.log("You want to include special characters");
  } else if (specialPrompt == 2) {
    lowercase = "no";
    console.log("You don't want to include special characters");
  } else {
    window.prompt("Invalid. Would you like to include special characters? Enter 1 for \"YES\" or 2 for \"NO\"");
    console.log(specialPrompt);
  }

  //Functions

  console.log("Max: " + max + "\n" + "Lowercase: " + lowercase + "\n" + "Uppercase: " + uppercase + "\n" + "Numeric: " + numeric + "\n" + "Special: " + special);
  //Empty array to determine criteria list
  var criteriaList = [];
  if (lowercase == "yes") {
    criteriaList.push(lowercase);
  } else {
    console.log("Lowercase charactersnot included.")
  }

  if (uppercase == "yes") {
    criteriaList.push(uppercase);
  } else {
    console.log("Uppercase charactersnot included.")
  }

  if (numeric == "yes") {
    criteriaList.push(numeric);
  } else {
    console.log("Numeric characters not included.")
  }

  if (special == "yes") {
    criteriaList.push(special);
  } else {
    console.log("Special characters not included.")
  }

  console.log(criteriaList);

  var newPassword = "";
  var passwordCriterias = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '~!@#$%^&*()_+{}|:"<>?';

  for (i = 1; i <= max; i++) {
    var char = Math.floor(Math.random() * passwordCriterias.length);
    newPassword += passwordCriterias.charAt(char)
  }
  console.log(newPassword);
  return newPassword;

}
