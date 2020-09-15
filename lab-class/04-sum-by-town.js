function main(input) {
	let townTotal = {};
	for (i = 0; i < input.length; i += 2) {
		if (!townTotal[input[i]]) {
			//console.log("if loop line 5", input[i], input[i + 1]);
			townTotal[input[i]] = Number(input[i + 1]);
		} else {
			townTotal[input[i]] += Number(input[i + 1]);
		}
	}
	console.log(JSON.stringify(townTotal));
}

main(["Sydney", "20", "Melbourne", "3", "Sydney", "5", "Melbourne", "4"]);
main(["Sydney", "20", "Melbourne", "3", "sydney", "5", "melbourne", "4"]);
