// function getName() {
//     var name = "Jon";
//     function printName() {
//     console.log(name);
//     }
//     printName();
//     }
//     getName();

// var myFunc = (...args) => {
//     console.log(args.length);
//     }
//     myFunc(1, 2, 3);




// What will the code below output to the console?
// let x = 10;
// const byValue = (y) => {
//  y = 20;
//  return y;
// }
// x = byValue(x);
// console.log(x);


// for (var i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue;
//     }
//     console.log(i);
//   }


// class Person {
//     name: string;
//     DOB: string;
//     }
//     console.log(typeof Person);

// let str = "JavaScript";
// let res = str.slice(0, 4) + str.slice(4).toUpperCase();
// console.log(res);


// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//     console.log(i, j);
//     }
//     }



// const arr = [1, 2, 3];
// arr.forEach((elem) => {
// arr.push(elem * 2);
// });
// console.log(arr);



// var x = 5;
// if (x === "5") {
//   console.log("Hello");
// } else {
//   console.log("World");
// }



// What will the code below output to the console?
// const a = {x: 1};
// const b = {...a};
// const c = {};
// Object.assign(c, a);
// a.x = 2;
// console.log(a.x);
// console.log(b.x);
// console.log(c.x);


// var x = 0;
// function foo() {
// x++;
// console.log(x);
// }
// setInterval(foo, 1000);




// let x = "Hello";
// if (typeof x === "string") {
//   console.log("x is a string");
// } else if (typeof x === "number") {
//   console.log("x is a number");
// } else {
//   console.log("x is not a string or a number");
// }


// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i += 2;
// }


// function myFunc(a, b) {
//     console.log(this, a, b);
//     }
//     var myObject = {
//     myMethod: myFunc
//     };
//     myObject.myMethod.call({x: 1}, 1, 2);



// function sumOfNaturals(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//     sum += i;
//     }
//     return sum;
//     }
//     console.log(sumOfNaturals(10);




// What is the output of the following code?
// var x = 0;
// setTimeout(function() {
//  console.log(x);
// }, 0);
// x++;
// setTimeout(function() {
//  console.log(x);
// }, 0);


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
    continue;
    }
    console.log(i);
    }