// Assignment Code
var generateBtn = document.querySelector("#generate");


//array of all special characters

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];



//array of all capital letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//array of all lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//array of numbers user can use if wanting numbers
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



//global variables
var userChara;
var ifUpperCase;
var ifLowerCase;
var ifSpecial;
var ifNumber;
var userPassword;




//function that generates the pass
function generatePassword() {



  // array with all arrays combined
  var emptyArray = [];

  // pass array
  var passwordArray = [];

  //asking how long does the user wants pass to be
  var userChara = prompt("How many characters would you like your password to contain?");
  //if pass less than 8 chara
  if (userChara < 8) {
    alert("Password length must be atleast 8 characters");
    return
    //if pass more than 128
  } else if (userChara > 128) {


    alert("Password length must be less than 129 characters");
    return


  } else {
    //confirm if user wants uppercase 
    var ifUpperCase = confirm("Click OK if you would like to include uppercase characters?");
    //if user clicks OK
    if (ifUpperCase) {
      for (var i = 0; i < upperCase.length; i++) {
        emptyArray.push(upperCase[i]);
      }
    }



    //confirm if user wants lowercase
    var ifLowerCase = confirm("Click OK if you would like to include lowercase characters?");
    //if user clicks ok
    if (ifLowerCase) {
      for (var i = 0; i < lowerCase.length; i++) {
        emptyArray.push(lowerCase[i]);

      }


    }


    //confirm if user wants special characters
    var ifSpecial = confirm("Click OK if you would like to include special characters?");
    //if user clicks ok
    if (ifSpecial) {
      for (var i = 0; i < specialChar.length; i++) {
        emptyArray.push(specialChar[i]);
      }


    }




    //confirm if user wants numbers
    var ifNumber = confirm("Click OK if you would like to include numerical characters?");
    //if user clicks ok
    if (ifNumber) {
      for (var i = 0; i < numerical.length; i++) {
        emptyArray.push(numerical[i]);




      }
    }
    for (var i = 0; i < userChara; i++) {
      //choosing random index from empty array
      passwordArray.push(emptyArray[(Math.floor(Math.random() * emptyArray.length))]);
    } // return 
    userPassword = passwordArray.join("");
    return userPassword;

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



