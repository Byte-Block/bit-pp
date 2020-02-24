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
        if (grades[i] <= 50) {

        }

    }
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(displayGrades(students, grades));
