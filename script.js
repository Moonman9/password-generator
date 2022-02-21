// Asks user to define length of charcters from 8 to 128
var length = function() {
  return window.prompt("How many characters would you like? (8-128)");
}
// creates boolean string for remaining character attributes
var charAt = function() {
  var attributes = [false];
  attributes[0] = window.confirm("Would you like to include lowercase characters? (a-z):");
  attributes[1] = window.confirm("Would you like to include uppercase characters? (A-Z):");
  attributes[2] = window.confirm("Would you like to include numeric characters? (0-9):");
  attributes[3] = window.confirm("Would you like to include special characters? ('@', '#', '$', etc.):");
  return attributes;
}
// checks to see if password length reqirments are met by changing string into integer to manipuate
var generatePassword = function() {
  var lengthReq = 0;
  lengthReq = length();
  while ((lengthReq < 8 || lengthReq > 128) || !parseInt(lengthReq)) {
    window.alert("Invalid entry. Length must be a numeric value from 8-128.");
    lengthReq = length();
  }

  // makes sure one character attribute is selected
  var attributes = charAt();
  while (!(attributes[0] || attributes[1] || attributes[2] || attributes[3])) {
    window.alert("Please select 'OK' for at least one option.");
    attributes = charAt();
  }

  //array for viable characters
  // lists all characters inbetween each index boundary on an array as strings
  var selectChars = [];
  if (attributes[0]) {
    // uppercase characters a-z
    for (var i = 97; i <= 122; i++)
      selectChars.push(String.fromCharCode(i));
  }
  if (attributes[1]) {
    // lowercase characters A-Z
    for (var i = 65; i <= 90; i++)
      selectChars.push(String.fromCharCode(i));
  }
  if (attributes[2]) {
    // numeric characters 0-9
    for (var i = 48; i <= 57; i++)
      selectChars.push(String.fromCharCode(i));
  }
  if (attributes[3]) {
    // special character
    for (var i = 32; i <= 47; i++)
      selectChars.push(String.fromCharCode(i));
    for (var i = 58; i <= 64; i++)
      selectChars.push(String.fromCharCode(i));
    for (var i = 91; i <= 96; i++)
      selectChars.push(String.fromCharCode(i));
    for (var i = 123; i <= 126; i++)
      selectChars.push(String.fromCharCode(i));
  }

  // randomize and generate password
  var password = "";
  for (var i = 0; i < lengthReq; i++) 
    password += selectChars[Math.ceil(Math.random()*selectChars.length)-1]; 
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 // get reference to the #copy element
var copyBtn = document.querySelector('#copy');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// write function to copy password
function copyPassword() {
  // selects password
  password.select();
  // copy text
  document.execCommand('Copy');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// add event listenr to copy genrated password
copyBtn.addEventListener("click", copyPassword);