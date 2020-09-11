// Assignment Code
var generateBtn = document.querySelector("#generate");







//array if user wants special characters

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]



//array if user wants capital letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//array if user wants lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//array of numbers user can use if wanting numbers
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



// array with all arrays combined
var emptyArray = [];

// 
var passwordArray = [];

//global variables?
var userChara;
var ifUpperCase;
var ifLowerCase;
var ifSpecial;
var ifNumber;


function generatePassword() {
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
    if (ifUpperCase === true) {
      emptyArray.push(upperCase)


      {


        for (var i = 0; i < upperCase.length; i++) {
          // putting all the stuff from specialChar array into emptyArray
          emptyArray.push(upperCase[i]);
        }

      }
    }
    //confirm if user wants lowercase
    var ifLowerCase = confirm("Click OK if you would like to include lowercase characters?");
    //if user clicks ok
    if (ifLowerCase === true) {
      emptyArray.push(lowerCase)
      {


        for (var i = 0; i < lowerCase.length; i++) {
          // putting all the stuff from specialChar array into emptyArray
          emptyArray.push(lowerCase[i]);
        }


      }
    }

    //confirm if user wants special characters
    var ifSpecial = confirm("Click OK if you would like to include special characters?");
    //if user clicks ok
    if (ifSpecial === true) {
      emptyArray.push(ifSpecial)
      {



        for (var i = 0; i < specialChar.length; i++) {
          // putting all the stuff from specialChar array into emptyArray
          emptyArray.push(specialChar[i]);
        }


      }


    }

    //confirm if user wants numbers
    var ifNumber = confirm("Click OK if you would like to include numerical characters?");
    //if user clicks ok
    if (ifNumber === true) {
      emptyArray.push(ifNumber)
      {


        for (var i = 0; i < numerical.length; i++) {
          // putting all the stuff from specialChar array into emptyArray
          emptyArray.push(numerical[i]);





        }

      }

    }



























    // looping to build the array with the password
    for (var i = 0; i < userChara; i++) {
      //choosing random index from empty array
      passwordArray.push(emptyArray[(Math.floor(Math.random() * emptyArray.length))]);
    }





    // Write password to the #password input
    function writePassword() {
      var passwordArray = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);


