// What will be the output of the code?
// var arr = [1, 2, 3, 4, 5];
// var result = arr.reduce(function(acc, curr) {
//   return acc + curr;
// }, 0);
// console.log(result);

// What will be the output of the following JavaScript code?
// var values = ["one", "two", "three"];
// var ans = values.shift();
// console.log(ans);

// What will be the output of the following JavaScript code?
// var myArray 


// var materials = ['Table', 'Chair', 'Boxes', 'Press'];
// console.log(materials.map(material => material.length));

// function add(a, b) {
//     console.log(a + b);
//   }
//   let result = add(2, 3);
//   console.log(result);

// function getPerson(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }
// let person = getPerson('Bob', 30);
// console.log(person.name);


async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
  result = await promise;
  console.log(result);
}
f();