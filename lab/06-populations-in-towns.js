function populationsInTown(arrOfStrings) {
	let popCount = {};
	const toRemove = /\<-> | \<-> /gm;

	for (place of arrOfStrings) {
		let tempPlaceArr = place.replace(toRemove, "  ").split("  ");
		if (!popCount[tempPlaceArr[0]]) {
			popCount[tempPlaceArr[0]] = Number(tempPlaceArr[1]);
		} else {
			popCount[tempPlaceArr[0]] += Number(tempPlaceArr[1]);
		}
	}
	for (let key of Object.keys(popCount)) {
		console.log(`${key}: ${popCount[key]}`);
	}
}

populationsInTown([
	"Sydney<-> 1200000",
	"Montana <-> 20000",
	"New York <-> 10000000",
	"Washington <-> 2345000",
	"Las Vegas <-> 1000000",
]);

populationsInTown([
	"Istanbul <-> 100000",
	"Honk Kong <-> 2100004",
	"Jerusalem <-> 2352344",
	"Mexico City <-> 23401925",
	"Istanbul <-> 1000",
]);
