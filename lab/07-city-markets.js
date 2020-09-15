function cityMarkets(arrOfStr) {
	for (cityStr of arrOfStr) {
		let tempArr = cityStr.split(" -> ");
		let prodPriceArr = tempArr.pop("");
	}
}

cityMarkets([
	"Sydney -> Laptops HP -> 200 : 2000",
	"Sydney -> Raspberry -> 200000 : 1500",
	"Sydney -> Audi Q7 -> 200 : 100000",
	"Montana -> Portokals -> 200000 : 1",
	"Montana -> Qgodas -> 20000 : 0.2",
	"Montana -> Chereshas -> 1000 : 0.3",
]);
