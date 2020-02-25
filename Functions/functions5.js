//1.Find the min and max element in the following array and switch their places.
//Print out the modified array in the console.
//Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

var minMaxSwitch = function (array) {
    var min = array[0];
    var mindex;
    var max = array[0];
    var maxdex;
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxdex = i;
        }
        if (array[i] < min) {
            min = array[i];
            mindex = i;
        }
        res[res.length] = array[i];
    }
    res[mindex] = max;
    res[maxdex] = min;
    return res;
}

var a = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(minMaxSwitch(a));

//2.Use the following array to make a new one by dividing its values by two and adding 5.
//If a given element's value is 0, change it to 20.
//Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
//Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

var divideByTwoAndAddFive = function (array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            res[res.length] = 20;
            continue;
        }
        res[res.length] = array[i] / 2 + 5;
    }
    return res;
}

var a = [3, 500, -10, 149, 53, 414, 1, 19];
console.log(divideByTwoAndAddFive(a))

//3.Initialize two arrays. 
//The first one should contain student names, the second one the number of points for each student.
//Display students' names with their corresponding grade.
//Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

var displayGrades = function (students, grades) {
    var res = '';
    for (var i = 0; i < grades.length; i++) {
        res += students[i] + " acquired " + grades[i] + " points and ";
        if (grades[i] < 50) {
            res += "failed to complete the exam.\n"
        } else if (grades[i] > 50 && grades[i] < 61) {
            res += "earned 6.\n";
        } else if (grades[i] > 60 && grades[i] < 71) {
            res += "earned 7.\n";
        } else if (grades[i] > 70 && grades[i] < 81) {
            res += "earned 8.\n";
        } else if (grades[i] > 80 && grades[i] < 91) {
            res += "earned 9.\n";
        } else if (grades[i] > 90 && grades[i] <= 100) {
            res += "earned 10.\n";
        }
    }
    return res;
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(displayGrades(students, grades));

//4.Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

var f = function (array) {
    var res = [];
    var tmp;
    for (var i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    for (var i = 0; i < array.length; i++) {
        res[res.length] = array[i] * 2;
    }
    return res;
}

var a = [13, 11, 15, 5, 6, 1, 8, 12];
console.log(f(a));

//5.Sort a previously defined array in a descending order and display it in the console.
//Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

var f = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

var input = [13, 11, 15, 5, 6, 1, 8, 12];
console.log(f(input));

//6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

var f = function () {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 !== 0 && i <= 500) {
            sum -= i;
        }
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum * 12.5;
}

console.log(f());

//7. Define a 10 element array.
//Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them.
//Print it out in the console.
//Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
//Output: AnStJoJoDaMa

var f = function (array) {
    var output = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= 2) {
            output += array[i][0];
            output += array[i][1];
        }
    }
    return output;
}

var input = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
console.log(f(input));

//8. Write a program that takes a string and prints its characters out in reversed order in the console.
//Input:  Belgrade Institute of Technology
//Output: ygolonhceT fo etutitsnI edargleB

var f = function (string) {
    var output = '';
    for (var i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }
    return output;
}

var input = "Belgrade Institute of Technology";
console.log(f(input));

//9.Write a program that displays all the combinations of two numbers between 1 and 7.
//Don't display two of the same numbers at the same time. Display the number of possible combinations, as well.
//(E.g. (1,2),(2,1) is allowed, but not (1,1), (2,2)...).

var f = function () {
    var output = '';
    var count = 0;
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i !== j) {
                output += '(' + i + ',' + j + ')';
                count++;
            }
        }
    }
    output += "\n" + count + " possible combinations";
    return output;
}

console.log(f());

//10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
//Input:  17    | 15
//Output: true  | false

var f = function (number) {
    if (number === 0) {
        return false;
    }
    if (number === 1 || number === 2) {
        return true;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

var input = 15;
console.log(f(input));

//11.Check if a given string is a palindrome (spaces are ignored).
//Input:  eye  | Geek  | a nut for a jar of tuna
//Output: true | false | true

var f = function (string) {
    for (var i = 0, j = string.length - 1; i < string.length; i++ , j--) {
        if (string[i] === " ") {
            j++;
            continue;
        }
        if (string[j] === " ") {
            i--;
            continue;
        }
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}

var input = "a nut for a jar of tuna";
console.log(f(input));

//12.Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
//Input:  192 42 | 81 9
//Output: 6      | 9

var f = function (number1, number2) {
    var res;
    for (var i = 1; i <= number2; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            res = i;
        }
    }
    return res;
}

var input1 = 192;
var input2 = 42;
console.log(f(input1, input2));

