
/*
First thing we’ll do is define the characters that the password can contain. 
A strong password should contain a mix of lowercase and uppercase letters, numbers and symbols as follows:
*/

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


// Next we’ll declare variables for each of the DOM elements we’ll be working with:


const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

/*
When the “Generate Password” is clicked we’ll create a string with the allowed characters 
based on length specified and the options selected. This data is then passed to the generatePassword function:
*/

generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

// And here is the generatePassword function that creates the password:

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Finally the functionality for copy to clipboard button:

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});