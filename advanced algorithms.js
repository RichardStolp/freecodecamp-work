/* eslint-disable no-alert, no-console, no-undef */

//These are my solutions to the advanced algorithm challenges
//in freecodecamp.com

//checks if a telephone number
//in a valid format
function telephoneCheck(str) {
	const numberForms = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
	return Boolean(str.match(numberForms));
}


//This problem involves modifying a JSON
//Object that represents an album collection
//This is the set code for the problem from
//freecodecamp. See next comment for my
//code.
const collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold"
	}
};


//this is the code I wrote for this challenge
function updateRecords(id, prop, value) {
	if (prop !== "tracks" && value !== ""){
		collection[id][prop] = value;
	} else if (value === ""){
		delete collection[id][prop];
	} else if (prop === "tracks" && !(collection[id].hasOwnProperty(prop))){
		collection[id][prop] = [];
		collection[id][prop].push(value);
	} else if (prop === "tracks" && value !== ""){
		collection[id][prop].push(value);
	}
	return collection;
}

//takes two or more arrays and returns
//the symmetric difference of the arrays
function sym(args) {
	const sets = [].slice.call(arguments);

	const symDif = sets.reduce(function(a,b){
    //remove duplicate numbers of a and b
    //and then combine them
		const setA = a.filter(function(value, pos){
			return a.indexOf(value) === pos;
		});

		const setB = b.filter(function(value, pos){
			return b.indexOf(value) === pos;
		});

		const set = setA.concat(setB);

    //find the create an array of duplicate values from set
    //remove the items that have duplicates
		const union = set.filter(function(value, pos){
			return set.indexOf(value) !== pos;
		});

		const comp = set.filter(function(value){
			return !union.includes(value);
		});

		return comp;
	});

	return symDif;
}

//This takes the price of a product
//the cash given and the cash in the drawer (cid)
//and returns the change as a 2D array [bill, amount]
//Note: the amount is the total values of the bills
//not the number of bills. i.e. [TWENTY, 60] not
//[TWENTY, 3]
//If there is not enough cid then it returns
//"Closed". If there is not enough
//cash given then it returns "Insufficient Funds".
function checkCashRegister(price, cash, cid) {

	//used to prevent rounding errors
	function roundToTwo(a){
		return parseFloat(a.toFixed(2));
	}

	//calculates the cash in the drawer
	function sumOfBills(billsArr){
		let sum = 0.0;
		for (let i = 0; i < billsArr.length; i++){
			sum += billsArr[i][1];
		}
		return roundToTwo(sum);
	}

	const moneyVal = [["PENNY", 0.01],
                  ["NICKEL", 0.05],
                  ["DIME", 0.10],
                  ["QUARTER", 0.25],
                  ["ONE", 1.00],
                  ["FIVE", 5.00],
                  ["TEN", 10.00],
                  ["TWENTY", 20.00],
                  ["ONE HUNDRED", 100.00]];


	let changeTotal = cash - price;
	let cashInReg = sumOfBills(cid);
	let change = [];

	//cycles through the 2D array, moneyVal's
	//nested array's integers largest to smallest
	//and fills in the change array with the
	//appropriate values
	for(let j = cid.length-1; j >= 0; j--){
		if(moneyVal[j][1]<= changeTotal){
			const neededBills = Math.floor(changeTotal / moneyVal[j][1]);
			const billsOnHand = roundToTwo(cid[j][1] / moneyVal[j][1]);
			if (neededBills >= billsOnHand){
				changeTotal -= cid[j][1];
				cashInReg -= cid[j][1];
				change.push(cid[j]);
			} else {
				changeTotal -= moneyVal[j][1] * neededBills;
				cashInReg -= moneyVal[j][1] * neededBills;
				change.push([moneyVal[j][0], (moneyVal[j][1] * neededBills)]);
			}
			changeTotal = roundToTwo(changeTotal);
			cashInReg = roundToTwo(cashInReg);
		}
	}

	if(sumOfBills(change) < cash-price){
		return "Insufficient Funds";
	} else if (cashInReg === 0){
		return "Closed";
	}
	return change;
}


//This is set up code from freecodecamp
//for the next problem. See next comment
//for my code.
// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//Takes 2 2D arrays and adds the items
//in the second array to the first array.
//If the first array already has the item,
//then the totals for the first and second
//array items are added.
function updateInventory(arr1, arr2) {
	for(let i = 0; i < arr2.length; i++){
		let isNotIn = true;
		for(let j = 0; j< arr1.length; j++){
			if(arr1[j][1] === arr2[i][1]){
				arr1[j][0] += arr2[i][0];
				isNotIn = false;
			}
		}
		if(isNotIn){
			arr1.push(arr2[i]);
		}
	}
	return arr1.sort((a, b) => a[1] > b[1]);
}

//This returns the total number of
//permutations for a given string
//that don't have consecutive repeating
//characters
function permAlone(str) {
	const eachLetter = str.split("");
	let permutations = [];
	const length = eachLetter.length;

	function hasRepeats(finalArray){
		let repeats = false;
		for(let j = 0; j < finalArray.length - 1; j++){
			if(finalArray[j] === finalArray[j+1]){
				repeats = true;
			}
		}
		return repeats;
	}

  //generates every possible permutation
	//and pushes them to the variable
	//"permutations" after checking
	//if it has a repeate with the
	//hasRepeats function
	function generate(n, arr){
		if(n === 1){
			if(!hasRepeats(arr)){
				permutations.push(arr.toString());
			}
			return;
		}
		for (let i = 0; i < n; i++){
			generate(n-1, arr);
			const swap = (n%2 ? i: 0);
			const temp = arr[swap];

			arr[swap] = arr[n-1];
			arr[n-1] = temp;
		}
	}

	generate(length, eachLetter);

	return permutations.length;
}


//simple object constructor that makes
//a person
function Person(firstAndLast) {
	let fullName = firstAndLast;
	let firstName = firstAndLast.split(" ")[0];
	let lastName = firstAndLast.split(" ")[1];

	this.getFirstName = function(){
		return firstName;
	};

	this.getLastName = function (){
		return lastName;
	};

	this.getFullName = function (){
		return fullName;
	};

	this.setFirstName = function(newFirst){
		firstName = newFirst;
		fullName = newFirst + " " + lastName;
	};

	this.setLastName = function(newLast){
		lastName = newLast;
		fullName = firstName + " " + newLast;
	};

	this.setFullName = function(newFull){
		fullName = newFull;
		firstName = newFull.split(" ")[0];
		lastName = newFull.split(" ")[1];
	};
}

const mark = new Person("Mark Hamill");

//Takes an array that has an
//average altitude and returns
//it's orbital Period
function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;

	function findTime(alt){
		const smAxis = earthRadius + alt;
		const toRoot = Math.pow(smAxis, 3)/GM;
		const time = 2*Math.PI*Math.pow(toRoot, 0.5);
		return Math.round(time);
	}

	arr.forEach(function(satellite){
		satellite.orbitalPeriod = findTime(satellite.avgAlt);
		delete satellite.avgAlt;
	});

	return arr;
}

const sputnik = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//This function takes an array of integers
//and finds the first pair whose sum
//would equal the arg and returns the
//sum of their indices.
function pairwise(arr, arg) {
	let indexesSum = [];
	let hTable = {};

	arr.forEach((element, index) => hTable[index] = element);

	//Goes through the hTable and deletes
	//the entries one at a time. Everytime
	//an entry is deleted the difference
	//between it and the arg variable is found
	//and compares that complement to the rest
	//of the entries.
	for (let firstIndex in hTable){
		const complement = arg - hTable[firstIndex];
		delete hTable[firstIndex];

		for(let secondIndex in hTable){
			if(hTable[secondIndex] === complement){
				indexesSum.push(parseInt(firstIndex) + parseInt(secondIndex));
				delete hTable[secondIndex];
				break;
			}
		}
	}

	if (indexesSum.length > 1){
		return indexesSum.reduce((a,b) => a+b);
	} else if (indexesSum.length === 1){
		return indexesSum[0];
	} else{
		return 0;
	}
}

console.log("telephoneCheck: " + telephoneCheck("555-555-5555"));
console.log("updateRecords: " + updateRecords(5439, "artist", "ABBA"));
console.log("sym: " + sym([1, 2, 3], [5, 2, 1, 4]));
console.log("checkCashRegister: " + checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log("updateInventory: " + updateInventory(curInv, newInv));
console.log("permAlone: " + permAlone("aab"));
console.log("Person: " + mark.getFullName());
console.log("orbitalPeriod: " + sputnik[0].orbitalPeriod);
console.log("pairewise: " + pairwise([1, 1, 1], 2));
