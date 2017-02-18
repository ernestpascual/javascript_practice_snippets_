
function mutation(arr) {
  /* 
  my solution to mutatations - free code camp
 
  Return true if the string in the first element of the array contains   
  all of the letters of the string in the second element of the array.

  For example, ["hello", "Hello"], should return true because all of     
  the letters in the second string are present in the first, 
  ignoring   case.

  The arguments ["hello", "hey"] should return false because the         
  string "hello" does not contain a "y".

  Lastly, ["Alien", "line"], should return  true because all of the     
  letters in "line" are present in "Alien".
  */
  
  // turn all the letters in the input array to lowercase letters
  var compareArray = [];
  for (i = 0; i < arr.length; i++){
    arr[i]=arr[i].toLowerCase();
    
  }
  
  // divide each charachter of the second string for comparison
  for(count = 0; count < arr[1].length; count++){
    compareArray.push(arr[1].charAt(count));
  }
  
  
  // validate if arr[1] divided split into individual elements 
  // is an element of arr[0]
  if(arr[0].indexOf(arr[1])===0){
    return true;
  } else if(arr[0].indexOf(arr[1])===-1)
  {
    var countMe = 0;
    for (p=0; p<compareArray.length; p++){
      if (arr[0].indexOf(compareArray[p])===-1){
        countMe++;
      }
    }
    if (countMe > 0){
      return false;
    } else {
      return true;
    }
  }
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
