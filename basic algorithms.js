/* eslint-disable no-alert, no-console, no-undef */

//These are my solutions to the basic algorithm challenges
//in freecodecamp.com

//Reverses a string
function reverseString(str) {
	let reversed = "";
	for (let i = 0; i < str.length; i++){
		reversed = str[i] + reversed;
	}
	return reversed;
}

//Returns the factorial of a provided number
function factorialize(num) {
	let fac = 1;
	for(let i = num; i > 0; i--){
		fac *= i;
	}
	return fac;
}

//Returns true or false depending if
//a given string is a palindrome
//note: ignores case, punctuation
//and spacing.
function palindrome(str) {
	let noWhite = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
	let pali = "";
	for(let i = noWhite.length; i > 0; i--){
		pali += noWhite[i-1];
	}
	return pali === noWhite ? true : false;
}

//Returns the length of the longest
//word in a provided sentence
function findLongestWord(str) {
	let wordList = str.split(" ");
	let longestWord = 0;

	for(let i = 0; i < wordList.length; i++){
		if(longestWord < wordList[i].length){
			longestWord = wordList[i].length;
		}
	}
	return longestWord;
}

//Capitalizes the first letter of each
//word in a string
function titleCase(str) {
	const wordList = str.toLowerCase().split(" ");
	let properCaps = "";
	for (let i = 0; i < wordList.length; i++){
		let capitalWord = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
		properCaps += capitalWord + " ";
	}
	properCaps = properCaps.substring(0, str.length);
	return properCaps;
}

//Takes an array with nested arrays
//that contains numbers and
//returns the largest number in
//each nested array in a single array
function largestOfFour(arr) {
	let largestNumbers = [];
	for(let i = 0; i < arr.length; i++){
		let largeNumber = 0;
		let subArray = arr[i];
		for(let j = 0; j< subArray.length; j++){
			if(largeNumber < subArray[j]){
				largeNumber = subArray[j];
			}
		}
		largestNumbers.push(largeNumber);
	}
	return largestNumbers;
}

//Checks if the last char in a string
//matches the target
function confirmEnding(str, target) {
	const strEnd = str.substring(str.length-target.length);
	return strEnd === target ? true : false;
}

//Repeats a string based on
//a given number. If the
//number is negative return
//an empty string
function repeatStringNumTimes(str, num) {
	let numLoop = num;
	let finalString = "";
	while(numLoop > 0){
		finalString += str;
		numLoop--;
	}
	return finalString;
}

//Truncate a string and add
//an elipsis
function truncateString(str, num) {
	if (str.length > num && num <= 3){
		return str.substr(0, num) + "...";
	}else if(str.length > num){
		return str.substr(0, num -3) + "...";
	}else{
		return str;
	}
}

//breaks up an array into arrays
//based on the given size and
//returns a 2D array of the new
//arrays
function chunkArrayInGroups(arr, size) {
	let finalArray = [];
	var i = 0;
	while (i < arr.length){
		finalArray.push(arr.slice(i, i+size));
		i += size;
	}
	return finalArray;
}

//removes a certain number
//of elements from the start
//of an array
function slasher(arr, howMany) {
	return arr.splice(howMany);
}

//checks if the second element
//in the array use the same
//letters in the first element
function mutation(arr) {
	let isMutation = true;
	let original = arr[0].toLowerCase();
	let mutation = arr[1].toLowerCase();
	for (let i = 0; i < mutation.length; i ++){
		if (original.indexOf(mutation[i]) < 0){
			isMutation = false;
		}
	}
	return isMutation;
}


console.log("reverseString: " + reverseString("hello"));
console.log("factorialize: " + factorialize(5));
console.log("palindrome: " + palindrome("eye"));
console.log("findLongestWord: " + findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log("titleCase: " + titleCase("I'm a little tea pot"));
console.log("largestOfFour: " + largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("confirmEnding: " + confirmEnding("Bastian", "n"));
console.log("repeatStringNumTimes: " + repeatStringNumTimes("abc", 3));
console.log("truncateString: " + truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log("chunckArrayInGroups: " + chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log("slasher: " + slasher([1, 2, 3], 2));
console.log("mutation: " + mutation(["hello", "hey"]));
