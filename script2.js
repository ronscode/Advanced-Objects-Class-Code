let text =
	'{ "employees" : [{ "firstName":"John" , "lastName":"Doe" },{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text);
let someHTML = "";
for (person of obj.employees) {
	someHTML += `<li> ${person.firstName} ${person.lastName} </li>`;
}
console.log(someHTML);
document.getElementById("demo").innerHTML =
	obj.employees[1].firstName + " " + obj.employees[1].lastName;

let myTable = `<table>
   <tr><th>Name</th><th>Price</th></tr>
   <tr><td>${obj.key}</td><td>${obj.price}</td></tr>
   <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
</table>`;
