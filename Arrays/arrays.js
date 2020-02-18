//1.
var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(a[5]);
console.log(a[9]);
console.log(a[0]);
//2.
var a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(a[6]);
//3.
var a = [2, -4, 5, -2, -11];
console.log(a[1], a[3], a[4]);
//4.
var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(a[3], a[6]);
//4.2
var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var result = "";
if (a[0] % 3 === 0) {
    result += a[0] + " ";
}
if (a[1] % 3 === 0) {
    result += a[1] + " ";
}
if (a[2] % 3 === 0) {
    result += a[2] + " ";
}
if (a[3] % 3 === 0) {
    result += a[3] + " ";
}
if (a[4] % 3 === 0) {
    result += a[4] + " ";
}
if (a[5] % 3 === 0) {
    result += a[5] + " ";
}
if (a[6] % 3 === 0) {
    result += a[6] + " ";
}
if (a[7] % 3 === 0) {
    result += a[7] + " ";
}
if (a[8] % 3 === 0) {
    result += a[8] + " ";
}
console.log(result);
//4.3
var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var result = "";
if (1 % 3 === 0) {
    result += a[1] + " ";
}
if (2 % 3 === 0) {
    result += a[2] + " ";
}
if (3 % 3 === 0) {
    result += a[3] + " ";
}
if (4 % 3 === 0) {
    result += a[4] + " ";
}
if (5 % 3 === 0) {
    result += a[5] + " ";
}
if (6 % 3 === 0) {
    result += a[6] + " ";
}
if (7 % 3 === 0) {
    result += a[7] + " ";
}
if (8 % 3 === 0) {
    result += a[8] + " ";
}
console.log(result);
//4.4
var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var result = "";
var indexValueOfArrayA = 3

switch (indexValueOfArrayA) {
    case 3:
        result = a[3] + " ";
        break;
    case 6:
        result = a[6] + " ";
        break;
    default:
        result = "Please select an index divisible by 3"
        break;
}
console.log(result);

//5.
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(a[0][3]);
console.log(a[2]);
console.log(a[2][1]);







