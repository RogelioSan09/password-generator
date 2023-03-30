// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword (){
  return Math.floor(Math.random() * 10);
}

function writePassword() {
  //Alert user 
  alert("Please choose one or more of the following characters to include in your password.");

  var wantsLowercase = confirm("Would you like to include lowercase characters?");
  var wantsUppercase = confirm("Would you like to include uppercase characters?");
  var wantsNumeric = confirm("Would you like to include numeric characters?");
  var wantsSpecial = confirm("Would you like to include special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);