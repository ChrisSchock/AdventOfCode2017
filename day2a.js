let input = "83 434 32 54 223\n932 343 494 99";
let numbers = input.split('\n');				// split input into an array of strings containing rows
var checksum = 0;
var digits = []


for (var i=0; i<=(numbers.length-1);i++) {
	digits = numbers[i].split('\t');		// split rows into numbers
	digits = digits.map(Number);			// turn the strings into numbers
	let biggest = Math.max.apply(null, digits);		// looking for the highest integer
	let smallest = Math.min.apply(null, digits);		// looking for the smalest integer
	checksum+=(biggest-smallest);			// adding the difference to checksum
}

console.log(checksum);
