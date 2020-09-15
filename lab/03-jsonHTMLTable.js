function fromJSONToHTMLTable(input) {
	let theArr = JSON.parse(input);
	let finalTable = "<table>";
	let tblHeader = "<tr>";
	let keyHeaders = Object.keys(theArr[0]);
	let countObj = {};
	//	console.log("key headers", keyHeaders);
	for (tblKey of keyHeaders) {
		tblHeader += `<th>${tblKey}</th>`;
	}
	tblHeader += `</tr>`;
	finalTable += tblHeader;

	for (anObj of theArr) {
		for (let key of Object.keys(anObj)) {
			if (!countObj[key]) {
				countObj[key] = [anObj[key]];
			} else {
				let tempArr = countObj[key];
				tempArr.push(anObj[key]);
				countObj[key] = tempArr;
			}
		}
	}
	for (let anObj of Object.keys(countObj)) {
		//console.log(anObj);
		// let htmlVals = anObj[key].map((x) => {
		// 	return `<`;
		// });
	}
	//
	let tableRow = `<tr>`;
	let arrOfEntries = Object.values(countObj);

	//console.log("arr of entries ", arrOfEntries[0][0]);

	for (let i = 0; i < arrOfEntries.length; i++) {
		//	let tempEntry = arrOfEntries[i];
		console.log("entry", arrOfEntries[i][i], arrOfEntries[i + 1][i + 1]);

		// let tempRow = `<td>${arrOfEntries[i]}</td><td>${arrOfEntries[i + (1)[i]]}`;
		// tableRow += tempRow;
	}
	tableRow += `</tr>`;
	//	console.log(arrOfEntries);
	// for (let key of Object.keys(countObj)) {
	// 	console.log(countObj[key]);
	// 	for (let i = 0; i < countObj[key].length; i++) {
	// 		console.log(i);
	// 	}
	// 	// for (let i = 0; i > 2; i++) {
	// 	// 	console.log("hello");
	// 	// 	tableRow += `<td>${countObj[key][i]}<td>`;
	// 	// }
	// }
	tableRow += `</tr>`;
	finalTable += tableRow;

	//	console.log(finalTable, "the obj count is ", countObj);
	return finalTable;
}

fromJSONToHTMLTable([
	'[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]',
]);
