var x = 0;
var y = "";
var z = "";
var answer  = 0;
for(i=100; i < 1000; i++){
  for (j=100; j< 1000; j++){
     x = (i*j)
     y = x.toString().split("").reverse().join("");
     z = x.toString();
    	if (z===y){
          if (parseInt(z) > parseInt(answer)){
      answer = z;
    }
        }
        }

}
  console.log(answer);
