
function confirmEnding(str, target) {
  
  // get last letter
  if (target.length == 1){
    var getLastLetter = str.substr(str.length -1, target.length);
  if (getLastLetter == target){
    return true;
  }else {
    return false;
  }
  } else {
  // get last word
    var getLastWord = str.substr(str.length - target.length, target.length);
    if (getLastWord == target){
    return true;
  }else {
    return false;
  }
  }
  
  
  
}

confirmEnding("Bastian", "n");
