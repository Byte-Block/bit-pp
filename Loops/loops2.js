//1.
var e = 3;
var a = [5, -4.2, 3, 7];
res = "";

for (var i = 0; i < a.length; i++) {
    res = "no";
    if (a[i] === e) {
        res = "yes";
        break;
    }
}
console.log(res);

var e = 3;
var a = [5, -4.2, 18, 7]
res = "";

for (var i = 0; i < a.length; i++) {
    res = "no";
    if (a[i] === e) {
        res = "yes";
        break;
    }
}
console.log(res);
//2.
var a = [-3, 11, 5, 3.4, -8]
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }

}
console.log(a);
//3.
var a = [4, 2, 2, -1, 6];
var min = a[0];

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }
}
console.log(min, a.indexOf(min));
//4.
var a = [4, 2, 2, -1, 6];
var min = a[0];
var prevMin = a[0];

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        prevMin = min;
        min = a[i];
    } else if (a[i] < prevMin) {
        prevMin = a[i];
    }
}
console.log(prevMin);

var b = [8, 5, 4, 6, 1, 2];
min = b[0];
prevMin = b[0];

for (var i = 0; i < b.length; i++) {
    if (b[i] < min) {
        prevMin = min;
        min = b[i];
    } else if (b[i] < prevMin) {
        prevMin = b[i];
    }
}
console.log(prevMin);
//5.
var a = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i];
    }
}

console.log(sum);
//6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var a = [2, 4, -2, 7, -2, 4, 2];
var res = '';

for (var i = 0, j = a.length - 1; i < a.length; i++ , j--) {
    if (a[i] !== a[j]) {
        res = 'The array is isn\'t symmetric.'
        break;
    } else {
        res = 'The array is symmetric.'
    }
}
console.log(res);

a = [3, 4, 12, 8];
for (var i = 0, j = a.length - 1; i < a.length; i++ , j--) {
    if (a[i] !== a[j]) {
        res = 'The array is isn\'t symmetric.'
        break;
    } else {
        res = 'The array is symmetric.'
    }
}
console.log(res);
//7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
}
console.log(c);
//8.Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c[i] = a[i];
    c[a.length + i] = b[i];
}
console.log(c);
//9.Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
for (var i = 0; i < a.length; i++) { //splice modifies the existing array
    if (a[i] === e) {
        a.splice(i, 1);
        i--;
    }
}
console.log(a);

var a = [4, 6, 2, 8, 2, 2];
var output = [];
var e = 2;
for (var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        output[output.length] = a[i];
    }
}
console.log(output);

//10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var output = [];
if (p > a.length) {
    console.log('Error!');
} else {
    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            output[output.length] = e;
        }
        output[output.length] = a[i];
    }
}
console.log(output);





