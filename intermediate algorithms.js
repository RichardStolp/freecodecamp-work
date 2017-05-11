/* eslint-disable no-alert, no-console, no-undef */

//These are my solutions to the intermediate algorithm challenges
//in freecodecamp.com

//Return the sum of all
//numbers of a given range
function sumAll(arr) {
	const big = Math.max(arr[0],arr[1]);
	let small = Math.min(arr[0],arr[1]);
	let total = 0;
	while(small < big + 1){
		total += small;
		small ++;
	}
	return total;
}

//Returns an array that contains
//the elements that don't appear
//in both arrays
function diffArray(arr1, arr2) {

	let arrFilter = arr2;
	const modArr1 = arr1.filter(filtering);
	arrFilter = arr1;
	const modArr2 = arr2.filter(filtering);

	function filtering(value){
		return arrFilter.indexOf(value) === -1 ? true : false;
	}
	return modArr1.concat(modArr2);
}

//Converts a number to
//a Roman Numeral String
//limited to 1-3999
function convertToRoman(num) {
	const ronums = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	let converted = "";

	for(let key in ronums){
		while (num - ronums[key] >= 0){
			converted += key;
			num -= ronums[key];
		}
	}
	return converted;
}


//Looks through an array of objects and
//returns all objects that contains
//a given value pair
function whatIsInAName(collection, source) {
	let arr = [];
	for (let i = 0; i < collection.length; i++){
		let containsAll = true;
		for(let key in source){
			if (collection[i][key] !== source[key]){
				containsAll = false;
			}
		}
		if(containsAll){
			arr.push(collection[i]);
		}
	}
	return arr;
}

//Searches and replaces a substring
//in a given string with another string
function myReplace(str, before, after) {
	let correctCase = "";
	if (before[0] === before[0].toUpperCase()){
		correctCase = after[0].toUpperCase() + after.slice(1);
	} else{
		correctCase = after[0].toLowerCase() + after.slice(1);
	}
	return str.replace(before, correctCase);
}

//Translates a string to Pig Latin
function translatePigLatin(str) {
	const vowels = "aeiou";
	const doubleCluster = "bl br ch cl cr dr fl fr gl gr pl pr sc sh sk sl sm sn sp st sw th tr	tw wh wr";
	const tripleCluster = "sch scr shr sph spl spr squ str thr";

	let pigLatined = "";
	if (vowels.includes(str[0])){
		pigLatined = str + "way";
	}else if (doubleCluster.includes(str.substring(0,2))){
		pigLatined = str.slice(2) + str.substring(0, 2) + "ay";
	}else if (tripleCluster.includes(str.substring(0,3))){
		pigLatined = str.slice(3) + str.substring(0,3) + "ay";
	}else {
		pigLatined = str.slice(1) + str[0] + "ay";
	}
	return pigLatined;
}

//Takes a DNA sequence and
//returns a 2D array with
//the base pairs
function pairElement(str) {
	let DNA = [];
	for(var i = 0; i < str.length; i++){
		switch (str[i]){
		case "A":
			DNA.push(["A", "T"]);
			break;
		case "T":
			DNA.push(["T", "A"]);
			break;
		case "C":
			DNA.push(["C", "G"]);
			break;
		case "G":
			DNA.push(["G", "C"]);
			break;
		}
	}
	return DNA;
}

//Find the missing letter in the
//alphabet and return the letter
function fearNotLetter(str) {
	const start = str.charCodeAt(0);
	const end = str.charCodeAt(str.length-1);
	if (end-start+1 === str.length){
		return undefined;
	}else{
		for (let i = start; i <= end; i++){
			if(!str.includes(String.fromCharCode(i))){
				return String.fromCharCode(i);
			}
		}
	}
}

//Checks if the value is a boolean
function booWho(bool) {
	return typeof bool === "boolean";
}

//Takes two or more arrays and
//returns an array with only
//unique elements
function uniteUnique(arr) {
	const argsToArr = [].slice.call(arguments);
	const flattened = argsToArr.reduce(function(a, b) {
		return a.concat(b);
	});
	let unique = [];
	for (var i = 0; i < flattened.length; i++){
		if (!unique.includes(flattened[i])){
			unique.push(flattened[i]);
		}
	}
	return unique;
}

//replaces &, <, >, ", and '
//and converts them to HTML entities
function convertHTML(str) {
	return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

//Converts a string to spinal case
function spinalCase(str) {
	function upperToHyphenLower(match) {
		return "-" + match.toLowerCase();
	}

	let almostFinished = str
    .replace(/[A-Z]/g, upperToHyphenLower)
    .replace(/ -|_-| |_/g, "-");

	if (almostFinished[0] === "-"){
		almostFinished = almostFinished.slice(1);
	}

	return almostFinished;
}

//

//returns the sum of all odd fibonacci
function sumFibs(num) {
	let fibFirst = 0;
	let fibSecond =1;
	let fibNext= 1;
	let oddFib = 0;
	while(fibNext <= num){
		if (fibNext % 2 === 1){
			oddFib += fibNext;
		}
		fibNext = fibFirst + fibSecond;
		fibFirst = fibSecond;
		fibSecond = fibNext;
	}
	return oddFib;
}

//returns the sum of prime numbers
//up to and including the given number
function sumPrimes(num) {
	let total =5;
	if (num < 2 ){
		return 0;
	} else if (num === 2){
		return 2;
	}
	for(let i = 5; i <= num; i += 2){
		let isPrime = true;
		for(let j = 3; j < i/2; j += 2){
			if (i % j === 0){
				isPrime = false;
			}
		}
		if(isPrime){
			total += i;
		}
	}
	return total;
}

//finds the smallest common multiple
//for a given range
function smallestCommons(arr) {
	const big = Math.max(arr[0], arr[1]);
	const small = Math.min(arr[0], arr[1]);
	let numbers = [];

	for (let i = big; i >= small; i--){
		numbers.push(i);
	}

	let gcd = function(a,b) { return (!b) ? a : gcd(b , a%b); };
	let lcm = function(a,b) { return (a*b) / gcd(a,b);};

	return numbers.reduce(lcm);
}

//returns the first element in the
//array that passes the truth test
function findElement(arr, func) {
	for(let i = 0; i < arr.length; i++){
		if(func(arr[i])){
			return arr[i];
		}
	}
	return undefined;
}

//drops elements from the front of the array
//until it matches the given function
function dropElements(arr, func) {
	const firstElement = arr.findIndex(func);
	return firstElement > -1 ? arr.slice(firstElement) : [];
}

//flattens a nested array
function steamrollArray(arr) {
	let tempArr = arr;
	let notArrayFree = true;
	while(notArrayFree){
		notArrayFree = false;
		tempArr = tempArr.reduce((a, b) => a.concat(b), []);
		for(var i = 0; i < tempArr.length; i++){
			if(Array.isArray(tempArr[i])){
				notArrayFree = true;
			}
		}
	}
	return tempArr;
}

//translates a binary string to an
//english string
function binaryAgent(str) {
	const binaryToChar = function (item){
		const binaryToInt = parseInt(item, 2);
		return String.fromCharCode(binaryToInt);
	};

	return str.split(" ").map(binaryToChar).join("");
}

//Checks the truthiness of all elements based
//based on the second argument
function truthCheck(collection, pre) {
	return collection.every((element) => Boolean(element[pre]));
}

//Adds together two numbers or
//if only one number is given
//then it returns a function
//that will add a second number
function addTogether() {
	const args = [].slice.call(arguments);
	if (!args.every(Number.isInteger)){
		return undefined;
	}

	if (args.length>1){
		return args[0] + args[1];
	} else {
		return (i) => addTogether(i, args[0]);
	}
}

console.log("sumAll: " + sumAll([1, 4]));
console.log("diffArray: " + diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("convertToRoman: " + convertToRoman(36));
console.log("whatIsInAName: " + whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log("myReplace: " + myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log("translatePigLatin: " + translatePigLatin("consonant"));
console.log("pairElement " + pairElement("GCG"));
console.log("fearNotLetter: " + fearNotLetter("abce"));
console.log("booWho: " + booWho(null));
console.log("uniteUnique: " + uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log("convertHTML: " + convertHTML("Dolce & Gabbana"));
console.log("spinalCase: " + spinalCase("The_Andy_Griffith_Show"));
console.log("sumFibs: " + sumFibs(4));
console.log("sumPrimes: " + sumPrimes(977));
console.log("smallestCommons: " + smallestCommons([1,5]));
console.log("findElement: " + findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log("dropElements: " + dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log("steamrollArray: " + steamrollArray([[0, 1], [2, 3], [4, 5]]));
console.log("binaryAgent: " + binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log("truthCheck: " + truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log("addTogether: " + addTogether(2)(3));
