var length, lowerCase, upperCase, numeric, special, randomChar; ;
var result='';
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  length = prompt('Please specify the length of your password, minimum 10 max 64 characters')
  if (length < 10 || length > 64) {
    window.alert('Please make sure the characters are between 10 and 64 ')
    length = prompt('Please specify the length of your password, minimum 10 max 64 characters')
  }
  lowerCase = prompt('Would you like lower-case characters in your password Y/n')
  if (lowerCase != 'n') {
    lowerCase = true
  }
  else {
    lowerCase = false
  }
  upperCase=prompt('Would you like upper case characters in your password? Y/n')
  if (upperCase != 'n') {
   upperCase = true
  }
  else {
    upperCase = false
  }
  numeric=prompt('Would you like numeric characters in your password? Y/n')
  if (numeric != 'n') {
   numeric = true
  }
  else {
    numeric = false
  }
  special=prompt('Would you like pecial  characters in your password? Y/n')
  if (special != 'n') {
   special = true
  }
  else {
    special = false
  }
  
}


// Function for getting a random element from an array
function getRandom(array) { 
  randomChar = array[Math.floor(Math.random() * array.length)]
  result+=randomChar
  length--
  return result

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  while(length > 0){
    if(lowerCase && length>0){
      getRandom(lowerCasedCharacters)
    }
    if(upperCase && length>0){
      getRandom(upperCasedCharacters)
    }
    if(numeric && length>0){
      getRandom(numericCharacters)

    }
    if(special && length>0){
      getRandom(specialCharacters)

    }
  }
  
  return result
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

