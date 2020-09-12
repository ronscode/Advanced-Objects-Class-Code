function townToJson(anArray) {
	let newArr = [];
	anArray.map((item) => {
		//newArr.push(item.split("|").trim());
		console.log(item.split("|"));
	});
	console.log(newArr);

	class ATown {
		constructor(town, lat, long) {
			this.town = town;
			this.lat = lat;
			this.long = long;
		}
	}
}

townToJson([
	"| Town | Latitude | Longitude |",
	"| Melbourne |-37.840935 | 144.946457|",
	"| Beijing | 39.913818 | 116.363625 |",
]);
