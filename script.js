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
var numerical = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


// combining all arrays
var allArray = [lowerCase, upperCase, numerical, specialChar];


//empty array
var emptyArray =[];







var wantSpecial
var wantCapital
var wantLower
var wantNumber 



function generatePassword() {
  //asking how long does the user wants pass to be
  var numberofChars = prompt ("How many characters would you like your password to contain?");

  if (numberofChars < 8) {

alert("password length must be at least 8 characters");
return "Try Again!"

  }
 else if (numberofChars > 128) {


  alert("Password length must be less than 129 characters");
  return "Try Again!"

 }

 else {


confirmSpecialchar = confirm("click ok if you want special characters in your password");
if (confirmSpecialChar) {

for (var i = 0; i < specialChar.length; i++) {

  combinedArray.push(num[i]);
}

}

 }
  



var testAlert = prompt("Enter Number of characters")


//logic here


wantSpecial = confirm("")






  return(testAlert)   "This is whats goin to show up on page aka password box"
}














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  

