
function palindrome(str) {
  //regex: remove non-alphanumeric charachters
  var a = str.replace(/[^0-9a-z]/gi, '');
  a.toLowerCase();

  // reversing the string/s
  var array = a.split("");
  array.reverse();
  var compare = array.join("");

  
  // check if the string is a palindrome
  if (a == compare){
     return true;
  } else {
    return false;
  }

}



palindrome("_eye");


// final answer

function palindrome(str) {
  // remove alphanumeric through replace using Regular Expressions
  var StringA = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  
  // string reversal
  var StringB = StringA.split('').reverse().join('');
  
  // check if the string is a palindrome
  if (StringA === StringB) {
  return true;
} else {
  return false;
  }
}



palindrome("eye");

