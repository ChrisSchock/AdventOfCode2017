let input = "538 74 948";
let numbers = input.split(' ');				// split input into an array of strings containing sequences
var checksum = 0;
var digits = []
var container = []

for (var i=0; i<=(numbers.length-1);i++) {
	var digits = numbers[i].split('');		// split sequences into digits
	var pos = 0;
	while (pos<digits.length){				
		container.push(Number(digits[pos]));	// put the digits in another array as integers
		pos++;
	}
	let biggest = Math.max(container);		// looking for the highest integer
	let smallest = Math.min(container);		// looking for the smalest integer
	checksum+=(biggest-smallest);			// adding the difference to checksum
	container = [];
}

console.log(checksum);
