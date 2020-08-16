/*
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

var promptLength = window.prompt("Please enter a maximum length for your password.");
console.log("Your password will be between 8 to " + promptLength + " characters long.");
if (promptLength >= 8) {
    var promptLowercase = window.prompt("Would you like to include lowercase characters? Enter 1 for YES and 2 for NO");
    console.log("You want to include lowercase characters");
    if (promptLowercase === "1") {
        var promptUppercase = window.prompt("Would you like to include uppercase characters? Enter 1 for YES and 2 for NO");
        console.log("You want to include uppercase characters");
        if (promptUppercase === "1") {
            var promptNumeric = window.prompt("Would you like to include numeric characters? Enter 1 for YES and 2 for NO");
            console.log("You want to include numeric characters");
            if (promptNumeric === "1") {
                var promptSpecial = window.prompt("Would you like to include special characters? Enter 1 for YES and 2 for NO");
                console.log("You want to include special characters");
            }
        }
    }
}
else {
    window.alert("Minimum length must be 8");
}

function criteria() {
    console.log(promptLength, promptLowercase, promptUppercase, promptNumeric, promptSpecial);
    if (promptLength >= 8) {
        length = Math.ceil(Math.random() * 128);
        window.alert(length);
    }
    if (promptLowercase === 1) {
        lowercase = console.log();
        window.alert(promptLowercase);
    }
    if (promptUppercase === 1) {
        uppercase = console.log();
        window.alert(promptUppercase);
    }
    if (promptNumeric === 1) {
        numeric = console.log();
        window.alert(promptNumeric);
    }
    if (promptSpecial === 1) {
        special = console.log();
        window.alert(promptSpecial);
    }
}

criteria();