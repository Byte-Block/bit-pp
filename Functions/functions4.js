//1.Write a program that checks if a given element e is in the array a. 
//Input:  e = 3, a = [5, -4.2, 3, 7]
//Output: yes

function isPresent(element, a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === element) {
            return "yes";
        }
    }
    return "no";
}

var e = 3;
var a = [5, -4.2, 3, 7];
console.log(isPresent(e, a));



//2.Write a program that multiplies every positive element of a given array by 2.
//Input array: [-3, 11, 5, 3.4, -8]
//Output array: [-3, 22, 10, 6.8, -8]

function multiplies(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] * 2
        }
    } return array
}

var array = [-3, 11, 5, 3.4, -8];

console.log(multiplies(array));


//3. Write a program that finds the minimum of a given array and prints out its value and index. 
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3

function minimumOfArray(array) {
    var min = array[0];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return [min, index];
}

var array = [4, 2, 2, -1, 6];
console.log(minimumOfArray(array));

//4.Write a program that finds the second smallest number and prints out its value. 
//Input array: [4, 2, 2, -1, 6]
//Output: 2

function secondSmallest(array) {
    var min = array[0];
    var min2;
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min2 = min;
            min = array[i];
        } else if (array[i] < min2) {
            min2 = array[i];
        }
    }
    return min2;
}

var array = [4, 2, 2, -1, 6, 1, 0];
console.log(secondSmallest(array));

//5.Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }

    }
    return sum;
}

var array = [3, 11, -5, -3, 2]
console.log(sum(array));

//6.Write a program that checks if a given array is symmetric. 
//An array is symmetric if it can be read the same way both from the left and the right hand side.   
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.

function isSymmetric() {
    for (var i = 0, j = array.length - 1; i < array.length; i++ , j--) {
        if (array[i] !== array[j]) {
            return "The array isn\'t symmetric";
        }
    }
    return "The array is symmetric";
}

var array = [2, 4, -2, 7, -2, 4, 2];
console.log(isSymmetric(array));

//7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwineArrays(array1, array2) {
    var res = [];
    for (var i = 0; i < array1.length; i++) {
        res[res.length] = array1[i];
        res[res.length] = array2[i];
    }
    return res;
}

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
console.log(intertwineArrays(a, b));

//8.Write a program that concatenates two arrays. 
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenateArrays(array1, array2) {
    var res = [];
    for (var i = 0; i < array1.length; i++) {
        res[i] = array1[i];
        res[array1.length + i] = array2[i];
    }
    return res;
}

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
console.log(concatenateArrays(a, b));

//9.Write a program that deletes a given element e from the array a. 
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

function deleteAnElement(element, array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            continue;
        } else {
            res[res.length] = array[i];
        }
    }
    return res;
}

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
console.log(deleteAnElement(e, a));

//10.Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message. 
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(element, position, array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (i === position) {
            res[res.length] = element;
        }
        res[res.length] = array[i];
    }
    return res;
}

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
console.log(insertElement(e, p, a));

