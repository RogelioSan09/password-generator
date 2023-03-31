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

  var wantsChar = characterParameters();
  console.log(wantsChar);

  function characterParameters(){
    var wantsArr = [];
    console.log(wantsArr);

    do {
    alert("Please choose one or more of the following characters to include in your password.");

    var wantsLowercase = confirm("Would you like to include lowercase characters?");
    console.log(wantsLowercase);
    var wantsUppercase = confirm("Would you like to include uppercase characters?");
    console.log(wantsUppercase);
    var wantsNumeric = confirm("Would you like to include numeric characters?");
    console.log(wantsNumeric);
    var wantsSpecial = confirm("Would you like to include special characters?");
    console.log(wantsSpecial);

    if (wantsLowercase){
        wantsArr.push("abcdefghijklmnopqrstuvwxyz");
        console.log(wantsArr);
    }
    if (wantsUppercase){
      wantsArr.push("ABCDEFGHIJKLMNOPQRSTUVWXZY");
      console.log(wantsArr);
    }
    if (wantsNumeric){
      wantsArr.push("0123456789");
      console.log(wantsArr);
    }
    if (wantsSpecial){
      wantsArr.push("!@#$%^&*");
      console.log(wantsArr);
    }
    } while (wantsArr == []);

    return wantsArr;

  }

  //Generates a password after determining users desired password length
  var password = generatePassword();

  function generatePassword (){
    var characters = wantsChar[0] + wantsChar[1] + wantsChar[2] + wantsChar[3];
    console.log(characters);
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