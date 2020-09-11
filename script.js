// Assignment Code
var generateBtn = document.querySelector("#generate");


//global variable





//array if user wants special characters

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]



//array if user wants capital letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//array if user wants lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//array of numbers user can use if wanting numbers
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



//empty array
var emptyArray = [];

// 
var passwordArray = [];




function generatePassword() {
  //asking how long does the user wants pass to be
  var userChara = prompt("How many characters would you like your password to contain?");

  if (userChara < 8) {
    alert("Password length must be atleast 8 characters");
    return
  } else if (userChara > 128) {

    alert("Password length must be less than 128 characters");
    return


  } else {

    var ifUpperCase = confirm("Click OK if you would like to include uppercase characters?");

    if (ifUpperCase === true){
      emptyArray.push(upperCase)
     }
     var ifLowerCase = confirm("Click OK if you would like to include lowercase characters?");

     if (ifLowerCase === true){
      emptyArray.push(lowerCase)
     }


     var ifSpecial = confirm("Click OK if you would like to include special characters?");
     
     if (ifSpecial === true){
      emptyArray.push(ifSpecial)
     }
     var ifNumber = confirm("Click OK if you would like to include numerical characters?");
     
     if (ifNumber === true){
      emptyArray.push(ifNumber)
     }

  }

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


