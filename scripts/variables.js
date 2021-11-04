// variables are named containers for stuff

// let is a keyword to declare variables
// age is the name of the variable
// 10000 is the value assigned to the variable age
let age = 10000; // the data type of age is a number
let fullName = `Epic person`; // the data type of fullName is string

let camelCasingNameFormat = `hi`;
let SNAKE_CASING_FORMAT = `hi`;

let isActive = true; //boolean values are true or false

age = "16"; // age is now a string
age = false; // age is now a boolean

const MAX_AGE = 200;

var visibleEverywhere = true;

var foo = 16;
let bar = 10;

console.log(foo, bar);

{
	let bar = 60;
	var foo = 61;
	console.log(foo, bar);
}

console.log(foo, bar);

let names = ["Austin", "Andrew", "Priya"];

console.log(names[1]);
// Andrew will output to the console

let ages = [16, 15, 15];
console.log("%s is %d years old", names[1], ages[1]);

let game = {
	score: 0,
	isOver: false,
	displayScore: function () {
		return "Current Score is " + this.score;
	},
};

console.log(game);
console.log(game.displayScore());

let add = function (num1, num2) {
	return num1 + num2;
};

let sum = add(3, 10);
console.log(sum);
