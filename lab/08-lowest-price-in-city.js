function lowestPriceInCity(arrOfStr) {
	let cityPrices = {};
	for (place of arrOfStr) {
		let tempArr = place.split(" | ");
		if (!cityPrices[tempArr[0]]) {
			cityPrices[tempArr[0]] = { [tempArr[1]]: Number(tempArr[2]) };
		} else
	}
	console.log(cityPrices);
}

lowestPriceInCity([
	"Sample Town | Sample Product | 1000",
	"Sample Town | Orange | 2",
	"Sample Town | Peach | 1",
	"Sydney | Orange | 3",
	"Sydney | Peach | 2",
	"New York | Sample Product | 1000.1",
	"New York | Burger | 10",
]);
