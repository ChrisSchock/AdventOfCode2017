let input = "0"
var sum = 0;
input+=input[0];
for (var i=0; i<(input.length-1);i++){
  if (input[i] === input[i+1]){
      sum+=Number(input[i]);
  }
}
console.log(sum);
