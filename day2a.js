let input = "538 74 948";
let numbers = input.split(' ');				// split input into an array of strings containing sequences
var checksum = 0;
var digits = []


for (var i=0; i<=(numbers.length-1);i++) {
	digits = numbers[i].split('');		// split sequences into digits
	digits = digits.map(Number);
	let biggest = Math.max.apply(null, digits);		// looking for the highest integer
	let smallest = Math.min.apply(null, digits);		// looking for the smalest integer
	checksum+=(biggest-smallest);			// adding the difference to checksum
}

console.log(checksum);
