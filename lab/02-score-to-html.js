function main(input) {
	let parsedInput = JSON.parse(input);
	let finalTable = [`<table>`];
	finalTable.push(makeTableHeader(parsedInput));
	for (item of parsedInput) {
		finalTable.push(makeTableRow(item));
	}

	function makeTableHeader(someArr) {
		let tempHeader = `<tr>`;
		let headerKeys = Object.keys(someArr[0]);
		for (colName of headerKeys) {
			tempHeader += `<th>${colName}</th>`;
		}
		tempHeader += `</tr>`;
		return tempHeader;
	}

	function makeTableRow(anObj) {
		let tempTableRow = `<tr>`;
		for (let tmpKey of Object.keys(anObj)) {
			tempTableRow += `<td>${anObj[tmpKey]}</td>`;
		}
		tempTableRow += `</tr>`;
		//console.log(tempTableRow);
		return tempTableRow;
	}
	finalTable.push(`</table>`);
	//finalTable += finalTable.replace(`&`, "&amp");
	//	console.log(finalTable);
	for (tbl of finalTable) {
		console.log(tbl);
	}
}
main(['[{"name":"Peter","score":479},   {"name":"George","score":205}]']);
main([
	'[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki","score":205}]',
]);
main([
	'[{"name":"Ragnar & Lagertha","score":808},{"name":"Jon and Ygritte","score":999}]',
]);
