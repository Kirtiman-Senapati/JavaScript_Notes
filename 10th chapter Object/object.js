// A simple JavaScript object
const student = {
	name: "Alex",
	age: 20,
	course: "JavaScript",
	introduce() {
		console.log(`My name is ${this.name}. I am learning ${this.course}.`);
	}
};

// Accessing object properties
console.log(student.name);//dot notation 
console.log(student["age"]);// bracket notation 

// Dot notation: use object.property when the property name is fixed and is a
// valid identifier, such as student.name.
// Bracket notation: use object["property"] when the key contains spaces or
// special characters, or when the key is stored in a variable.
// Bracket notation is important for dynamic property access:
// Remember:
// Dot notation    -> object.property       (fixed, simple key)
// Bracket notation -> object[property]     (variable or special key)
const propertyName = "course";
console.log(student[propertyName]); // dynamic key: same as student.course here property name not meintioned in object student so if i write student.propertyName not accessible but student[propertyName]accessible it indirect goes to propertyName value course then studentprint the value student.course means javascript 

const user = {
	name: "Alex",
    blue:"good colour",
    "favorite-color": "red"
};



console.log(user.name); // simple key: dot notation
//console.log(user[blue]) //Uncaught ReferenceError: blue is not defined because blue is stays inside object as a key name so not  write blue  instead of "blue" so console.log(user["blue"]) is right only keyname ya this example 

console.log(user["blue"])// output good colour

let color = "favorite-color";

console.log(user[color]); // special character: bracket notation indirectly call ya access favorite-color means user.favorite-color so output Red here color work as variable not stay inside object so write console.log(user[color]);

/* function in object call nethod  */
// Calling an object method
student.introduce();// here introduce is a function use inside object 


// Another way to write a function in an object:
const teacher = {
	name: "Sam",
	teach: function () {
		console.log(`${this.name} is teaching JavaScript.`);
	}
};

teacher.teach();

// Notes:
// Shorthand: introduce() { ... }
// Traditional: introduce: function () { ... }



// Adding, updating, and deleting object properties
const car = {
	brand: "Toyota",
	model: "Corolla",
	year: 2020
};

// Add a new property
car.color = "blue";
console.log(car.color);

console.log(car)/* 	brand: 'Toyota',
    model: 'Corolla'
	year: 2022,
    color:'black'
}; */

// Update an existing property
car.year = 2024;
console.log(car.year);

// Delete a property
delete car.model;

console.log(car)/*{
	brand: 'Toyota',
	year: 2024,
    color:black
};
*/

console.log(car.model); // undefined

// Future notes:
// - Add or update a property with object.key = value or object[key] = value.
// - Delete a property with delete object.key or delete object[key].
// - Check whether a property exists with "key" in object.
// - Object.keys(object) returns an array of the object's property names.
