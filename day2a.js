let input = "538 74 948";
let numbers = input.split(' ');
var checksum = 0;
var digits = []
var container = []

for (var i=0; i<=(input.length-1);i++) {
	var digits = numbers[i].split('');
	var pos = 0;
	while (pos<digits.length){
		container.push(Number(digits[pos]));
		pos++;
	}

	let biggest = Math.max(container);
	let smallest = Math.min(container);
	checksum+=Number(biggest-smallest);
}

console.log(checksum);
