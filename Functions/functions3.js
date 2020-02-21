//1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
//"My random string", "JS " -> "JS My random string"
//"My random string", "JS ", 10 -> "My random JS string"

function insertString(string1, string2, position) {
    if (position === undefined) {
        position = 0;
    }
    var result = '';
    for (var i = 0; i < string1.length; i++) {
        if (i === position) {
            result += string2;
        }
        result += string1[i];
    }
    return result;
}

var a = "My random string";
var b = "JS ";
var position = 10;

console.log(insertString(a, b, position));

//2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//[NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinAll(array) {
    var result = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] === undefined || array[i] === null || isNaN(array[i]) || array[i] === Infinity) {
            continue;
        }
        result += array[i];
    }
    return result;
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(joinAll(a));

//3.Write a program to filter out falsy values from the array.
//[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterFalsy(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!array[i]) {
            continue;
        }
        result[result.length] = array[i];
    }
    return result;
}

function filterFalsy2(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!array[i]) {
            result[result.length] = array[i]; //an array of falsy values
        }
    }
    return result;
}

function filterFalsy3(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    }
    return result;
}

function filterFalsy4(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (!!array[i]) {
            result[result.length] = array[i];
        }
    }
    return result;
}
var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterFalsy4(a));

//4.Write a function that reverses a number. The result must be a number.
//12345 -> 54321 // Output must be a number

// function reverseNumber(number) {
//     var result = 0;
//     while (number > 0) {
//         result += (number % 10);
//         console.log(result);

//         result *= 10;
//         number /= 10;
//     }
//     return result;
// }

function reverseNumber(number) {
    var result = '';
    number += '';
    for (var i = number.length - 1; i >= 0; i--) {
        result += number[i];
    }

    return parseInt(result);
}
var number = 123456789;

console.log(reverseNumber(number));

//5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function lastElementOfAnArray(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    var result = [];

    for (var i = array.length - n; i < array.length; i++) {
        result[result.length] = array[i];
    }

    return result;
}

var a = [7, 9, 0, -2];

console.log(lastElementOfAnArray(a));

//6.Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function preFilledArray(elements, value) {
    if (value === undefined) {
        value = null;
    }
    var array = []
    for (var i = 0; i < elements; i++) {
        array[array.length] = value;
    }
    return array;
}
var e = 2;
var v = 'none';

console.log(preFilledArray(e));

//7. Write a function that says whether a number is perfect.
//28 -> 28 is a perfect number.

function isPerfect() {

}

var number = 28;
console.log();
