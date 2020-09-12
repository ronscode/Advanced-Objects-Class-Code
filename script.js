// // Advanced Objects Class Code

// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	fullName: function () {
// 		//console.log("this is " + this);
// 		return this.firstName + " " + this.lastName;
// 	},
// 	returnThis: function () {
// 		return this;
// 	},
// };
// console.log(person.fullName()); // John Doe
// console.log(person.returnThis());
// console.log(this);

// // let person = {
// // 	firstNames: ["John", "Adam", "Peter"],
// // 	lastName: "Doe",
// // 	age: 50,
// // };

// // person.age = 42;
// // console.log(person["age"]);

// // console.log(
// // 	person.firstNames.map(function (aName2) {
// // 		console.log(aName2);
// // 		return aName2;
// // 	})
// // );
// // let someGuy = person.firstNames.map((aName) => {
// // 	//console.log(aName);
// // 	return aName;
// // });
// // console.log(someGuy);

// // let x = { name: "John" };
// // console.log("1st x name is " + x.name);
// // let y = x; //  its a reference

// // y.name = "Adam";
// // console.log("2nd x name is " + x.name);
// // console.log("2nd y name is " + y.name);

// // x.name = "Dave";

// // console.log("3rd x name is " + x.name);
// // console.log("3rd y name is " + y.name);

// // console.log(5 + 6 + "0" * 8);
// let cityArr = [];

// let someCities = [
// 	["Melbourne", -37.840935, 144.946457], // city[0], city[1]...
// 	["Beijing", 39.913818, 116.363625],
// ];

// for (city of someCities) {
// 	let tempCityObj = {
// 		Town: city[0],
// 		Lat: city[1],
// 		Long: city[2],
// 	};
// 	cityArr.push(tempCityObj);
// }
// console.log(cityArr);

// cat = { name: "Tom", age: 5 };
// Object.seal(cat);
// cat.age = 10;
// delete cat.age;
// cat["breed"] = "Fluffy";
// cat.name = "Kitty";
// console.log(cat);

// let course = { name: "JS Advanced", hall: "Open Source" };

// let keys = Object.keys(course);

// console.log(keys); // [ 'name', 'hall' ]
// if (course.hasOwnProperty("name")) {
// 	console.log(course.name); // JS Advanced
// }
let obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
	console.log(`obj.${key} = ${obj[key]}`);
}

for (const key of Object.keys(obj)) {
	console.log(`obj.${key} =-= ${obj[key]}`);
}
