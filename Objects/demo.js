// function doSomething(b) {
//     b++;
//     return b;
// }

// var a = 10;
// var x = a;
// doSomething(a);
// console.log(doSomething(a));

// console.log(a);    //for simple data types the value is passed.
// console.log(x);    //if the value is passed to another variable, they can operate independently.     

// function doSomethingElse(c) {
//     c.value++;
// }

// var b = { value: 10 };
// doSomethingElse(b);
// console.log(b);    //for objects and arrays the reference is passed.

// var c = [1, 2, 3];
// delete c[0];       //deletes an element value
// console.log(c[0]); // and undefined is left in its place.

// var d = "Sleep is good but books are better."
// delete d[0];
// console.log(d);    //still immutable.

// console.log("Bit".length);

// var b = new String("Bit");
// console.log(b);

// b.toUpperCase();
// console.log(b);

// var s = "bit";
// var s = s.toUpperCase();
// console.log(s);

// var a = [4, 5, 7];

// var res = a.join(" => ");
// console.log(res);

// var a = "Bit";
// a = a.split("");
// var res = a.join(" => ");
// console.log(res);

// var a = "Bit";
// a = a.split("");
// console.log(a);
// var res = a.join("");
// console.log(res);

// var a = [12, 6, 4, 5, 7];
// var res = a.sort(function (a, b) { return a - b }); // ascending sort
// console.log(res);
// var res = res.sort(function (a, b) { return b - a }); // descending order
// console.log(res);
