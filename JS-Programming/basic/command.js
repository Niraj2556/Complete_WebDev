// const ans = alert("Are you sure");
// const ans = alert("Are you sure");
// const ans = prompt("Are you sure");

// console.log(ans);


// let studentData = [['Jack', 25], ['Sarah', 23]];

// console.log(studentData); 

// studentData.pop();

// console.log(studentData); // [["Jack", 25], ["Sarah"]]




// removing 1 index array item
// studentsData.splice(1,1);
// console.log(studentsData); // [["Jack", 24]]



// Iterating over Multidimensional Array
// To iterate over a multidimensional array, you can use the forEach() method of the Array object.


let studentsData = [['Ryan', 24], ['Sara', 23],];
// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

// Output
// Ryan
// 24
// Sara
// 23

// Iterating over a multidimensional array can also be achieved using the for...of loop.
// For example:
let studentData = [['Ryan', 24], ['Sara', 23]];

for (let i of studentData) {
  for (let j of i) {
    console.log(j);
  }
}