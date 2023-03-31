// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password");

  //var lowercase = "abcdefghijklmnopqrstuvwxyz";
  //var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
  //var numeric = "0123456789";
  //var special = "!@#$%&*";
  
  
  //Stores users desired length password on variable length password
  var passwordLength = lengthRequest();
  console.log(passwordLength);

  //Ask user for desired length password
  function lengthRequest() {
     var userInput = prompt("What is the desired length of your password? Note: Your password must be a minimum of 8 characters and a maximum of 128 characters.");
     console.log(userInput);

     //Checks if password length requirements are met
    if (userInput >= 8 && userInput <= 128){
      console.log(userInput);
      // returns users desired length password
      return userInput;
    } 
    //Alerts user of password length requirements not met
    else {
      alert("Does not meet length requirements.");
      return;
    }
  }

  //Generates a password after determining users desired password length
  var password = generatePassword();

  function generatePassword (){
    var characters = ("abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXZY" + "0123456789" + "!@#$%^&*");
    console.log(characters);
    console.log("abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXZY" + "0123456789" + "!@#$%^&*");
    var result = " ";
    console.log(result);
    var charactersLength = passwordLength;
    console.log(charactersLength);

    for ( let i = 0; i < passwordLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        console.log(result);
    }
    // return a random password of the length user requested
    return result;
  }
     
  /*
  function generatePassword (passwordLength){

      if (characterParameters == [true, true, true, true]){
        var characters = (lowercase + uppercase + numeric + speacial);
        var result = " ";
        var charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
      }
      if (wantsLowercase && wantsUppercase && wantsNumeric){
        function generatePassword() {
          var length = passwordLength
          var characters = (lowercase + uppercase + numeric);
          var result = " ";
          var charactersLength = characters.length;
          for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
      
          return result;
        }
      }
      if (wantsLowercase && wantsUppercase){
        function generatePassword (){
          return Math.floor(Math.random() * 10);
        }
      }
      if (wantsLowercase || wantsUppercase || wantsNumeric || wantsSpecial){
        function generatePassword (){
          return Math.floor(Math.random() * 10);
        }
      }
      else {
        alert("You must choose at least one character type.")
      }
    
    
  }
  */
  passwordText.value = password;
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);