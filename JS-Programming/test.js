// What will be the output of the following code snippet?
// console.log([ [0, 1],
// [2, 3]
// ].reduce((acc, cur) => {
// return acc.concat(cur);
// }, [1, 2], ));


// const {
//     name: myName
//     } = {
//     name: 'Lydia'
//     };
// //     console.log(name);



// const button = document.querySelector('button');
// button.addEventListener(click', () => {
//  alert(“CLICKED”')
//  let paragraph = document.createElement(“p”)
//  paragraph.textContent = “New paragraph added.”
//  document.body.append(paragraph);
// });


// const person = {
//     name: 'Lydia'
//   };
  
//   function sayHi(age) {
//     return `${this.name} is ${age}`;
//   }
//   console.log(sayHi.call(person, 21));
//   console.log(sayHi.bind(person, 21));


// function dog(string) {
//     console.log(string);
//   }
//   dog("Bark");
//   var animal = dog;
//   animal("meow");
//   animal.myProperty = "black";
//   console.log(animal.myProperty);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);