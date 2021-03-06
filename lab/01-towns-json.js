function main(input) {
	let newArr = [];
	let finalArr = [];
	input.map((item) => {
		let tempItem = item.split("|");
		tempItem.shift();
		tempItem.pop();
		let trimItem = tempItem.map((x) => {
			return x.trim();
		});
		let fixedItem = trimItem.map((y) => {
			if (typeof y === "number") {
				return y;
			} else {
				return y;
			}
		});
		newArr.push(fixedItem);
	});

	let townKeys = newArr.shift();

	class ATown {
		constructor(town, lat, long) {
			this.Town = town;
			this.Latitude = lat;
			this.Longitude = long;
		}
	}
	for (town of newArr) {
		finalArr.push(
			new ATown(
				town[0],
				Number(Number(town[1]).toFixed(2)),
				Number(Number(town[2]).toFixed(2))
			)
		);
	}
	console.log(JSON.stringify(finalArr));
}

main([
	"| Town | Latitude | Longitude |",
	"| Melbourne |-37.840935 | 144.946457|",
	"| Beijing | 39.913818 | 116.363625 |",
]);
