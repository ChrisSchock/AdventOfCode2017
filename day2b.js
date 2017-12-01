let input = "0"
var sum = 0;
var steps = input.length / 2
var rest = 0;
for (var i=0; i<(input.length-1);i++){
 if ((i+steps) >= (input.length)){
   rest = (i+steps)-(input.length);
   if (input[i] === input[rest]){
     sum+=Number(input[rest]);
   }
 } else if (input[i] === input[i+steps]){
   sum+=Number(input[i]);
 }
}
console.log(sum);
