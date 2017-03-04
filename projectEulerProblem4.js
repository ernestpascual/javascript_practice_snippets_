// intialize variables
var x = 0;
var y = "";
var answer  = 0;

// start dual for loops for multiplying the product
for(i=100; i < 1000; i++){
  for (j=100; j< 1000; j++){
     x = (i*j)
    // reversing a string
     y = x.toString().split("").reverse().join("");
    // remember to parse y so you can compare inside if statement
    	if (x===parseInt(y)){
          if (x > parseInt(answer)){
      answer = x;
    }
        }
        }

}
  console.log(answer);


// reusable number palindrome function on the highest x digit number
var highestNumberPalindrome = function (number){
  // get the lowest and highest number for the range
  var highestNumber = Math.pow(10, number);
  var lowestNumber  = Math.pow(10, number -1)
  var x = 0;
  var y = "";
  var answer = 0;
  // apply the operation
  for(i=lowestNumber; i < highestNumber; i++){
  for (j=lowestNumber; j< highestNumber; j++){
     x = (i*j)
    // reversing a string
     y = x.toString().split("").reverse().join("");
    // remember to parse y so you can compare inside if statement
    	if (x===parseInt(y)){
          if (x > parseInt(answer)){
      answer = x;
    }
        }
        }

}
   return answer;
}
// checking for a three digit number
console.log(highestNumberPalindrome(3));
 
