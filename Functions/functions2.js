//1.Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function isString(string) {
    if (typeof string === 'string') {
        return true;
    } else {
        return false;
    }
}
var a = 'string';
var b = '';
var c = "";
var d = " ";
var e = ' ';
var f = '123';
var g = 123;
console.log(isString(a));
console.log(isString(b));
console.log(isString(c));
console.log(isString(d));
console.log(isString(e));
console.log(isString(f));
console.log(isString(g));

//2.Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isStringBlank(string) {
    if (typeof string !== 'string') {
        return false;
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            return false;
        }
    }
    return true;
}

var a = '';
var b = " "
var c = "  ";
var d = " 1 ";
var e = 123;

console.log(isStringBlank(a));
console.log(isStringBlank(b));
console.log(isStringBlank(c));
console.log(isStringBlank(d));
console.log(isStringBlank(e));


//3.Write a function that concatenates a given string n times (default is 1).
//	"Ha" -> "Ha"
//  "Ha", 3 -> "HaHaHa"
function concatenateNTimes(string, number) {
    var res = '';
    for (var i = 0; i < number; i++) {
        res += string
    }
    return res;
}
var a = 'Ha';
var n = 3;

console.log(concatenateNTimes(a, n));

//4.Write a function to count the number of letter occurrences in a string.
//"My random string", "n" -> 2
function countLetterOccurrences(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
var a = "My random string"
var letter = "n"

console.log(countLetterOccurrences(a, letter));

//5.Write a function to find the position of the first occurrence of a character in a string.
// The result should be the position of the character. 
//If there are no occurrences of the character, the function should return -1.

function positionOfFirstOccurrence(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i + 1;
        }
    }
    return -1;
}
var a = "My random string";
var char = 'g';
console.log(positionOfFirstOccurrence(a, char));

//6.Write a function to find the position of the last occurrence of a character in a string. 
//The result should be in human numeration form. 
//If there are no occurrences of the character, function should return -1.

function positionOfLastOccurrence(string, character) {
    for (var i = string.length - 1; i < string.length; i--) {
        if (string[i] === character) {
            return i + 1;
        }
    }
    return -1;
}
var a = "My random string";
var char = 'n';
console.log(positionOfLastOccurrence(a, char));

//7.Write a function to convert string into an array.
// Space in a string should be represented as “null” in new array.
//"My random string" -> ["M", "y", null, "r", "a"]
//"Random" -> ["R", "a", "n", "d", "o", "m"]


function stringToArray(string) {
    var res = []
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            res[i] = null;
        } else {
            res[i] = string[i];
        }
    }
    return res;
}
var a = "My random string";
console.log(stringToArray(a));

//8.Write a function that accepts a number as a parameter and checks if the number is prime or not. 
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(number) {
    if (number === 0) {
        return false;
    } else if (number === 1 || number === 2) {
        return true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

var a = 3;

console.log(isPrime(a));

//9.Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function insertSeparator(string, separator) {
    var res = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            res += separator;
        } else {
            res += string[i];
        }
    }
    return res;
}

var a = 'My random string';
var dash = '-';
var underscore = '_';
var plus = '+';
console.log(insertSeparator(a, underscore));

//10.Write a function to get the first n characters and add “...” at the end of newly created string.

function getFirstNAdd(string, number) {
    var res = '';
    for (var i = 0; i < number; i++) {
        res += string[i];
    }
    res += "...";
    return res;
}

var a = 'My random string';
var n = 5;

console.log(getFirstNAdd(a, n));

//11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function arrayStringToNumbers(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined && array[i] !== NaN && array[i] !== Infinity && !isNaN(parseFloat(a[i]))) {
            res[res.length] = parseFloat(array[i]);
        }
    }
    return res;
}

var a = ["1", "21", undefined, "42", "1e+3", Infinity, 'string'];

console.log(arrayStringToNumbers(a));

//12.  Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60.
// If someone is already retired, a proper message should be displayed.

function untilRetirement(number, gender) {
    if (gender === 'm') {
        if (number + 65 > 2020) {
            return (number + 65) - 2020;
        } else {
            return 'Already retired'
        }
    } else if (gender === 'f') {
        if (number + 60 > 2020) {
            return (number + 60) - 2020;
        } else {
            return 'Already retired'
        }
    }
    else {
        return 'Please select m or f for gender';
    }
}
var yearOfBirth = 1999;
var gender = 'f';
console.log(untilRetirement(yearOfBirth, gender));

//13.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
//1 -> 1st
//11 -> 11th

function formatNumber(number) {
    if (number === 1) {
        return '1st';
    } else if (number === 2) {
        return '2nd';
    } else if (number === 3) {
        return '3rd';
    } else if (number >= 4 && number < 21) {
        return number + 'th';
    } else if (number > 20) {
        var string = number + '';
        if (string[string.length - 1] === '0') {
            return number + 'th';
        } else if (string[string.length - 1] === '1') {
            return number + 'st';
        } else if (string[string.length - 1] === '2') {
            return number + 'nd';
        } else if (string[string.length - 1] === '3') {
            return number + 'rd';
        } else if (string[string.length - 1] >= '4') {
            return number + 'th';
        }
    }
}

var number = 101;
console.log(formatNumber(number));