let input = "234 74 100 100\n734 200 942 384 50";
let rows = input.split('\n');
var checksum = 0;
var numbers = []

for (var i=0; i<=(rows.length-1);i++) {
	numbers = rows[i].split('\t');
	numbers = numbers.map(Number);
	for (var n=0; n<=(numbers.length-1);n++) {
		for (var x=0; x<=(numbers.length-1);x++) {
			if (numbers[n] % numbers[n+x] === 0) {
				checksum+=(numbers[n]/numbers[n+x])
			}
		}
	}

}

console.log(checksum);
