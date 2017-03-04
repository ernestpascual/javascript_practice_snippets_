var x = 0;
var y = "";
var answer  = 0;
for(i=100; i < 1000; i++){
  for (j=100; j< 1000; j++){
     x = (i*j)
     y = x.toString().split("").reverse().join("");
    	if (x===parseInt(y)){
          if (x > parseInt(answer)){
      answer = x;
    }
        }
        }

}
  console.log(answer);
