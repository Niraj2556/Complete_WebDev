// function processData(data) {
//     let myMap = new Map();
//     let i = 0;
//     do {
//       if (data[i].name === "John") {
//         myMap.set(data[i].id, data[i].age);
//       } else if (data[i].name === "Jane") {
//         myMap.set(data[i].id, data[i].age + 1);
//       } else {
//         myMap.set(data[i].id, "Unknown");
//       }
//       i++;
//     } while (i < data.length);
  
    // for (let [id, age] of myMap.entries()) {
    //   console.log(`ID: ${id}, Age: ${age}`);
    // }
//   }
  
//   const jsonData = {
//     "people": [{
//       "name": "John",
//       "id": 1,
//       "age": 25
//     }, {
//       "name": "Jane",
//       "id": 2,
//       "age": 30
//     }, {
//       "name": "Alice",
//       "id": 3,
//       "age": 35
//     }]
//   };
//   const parsedData = JSON.parse(jsonData);
//   processData(parsedData.people);









//CHATGPT
// There are a couple of issues in your code. Let me point them out and provide corrections:

// The JSON.parse() function is used to parse a JSON string, not a JavaScript object. In your case, jsonData is already an object, so there's no need to parse it. You should pass the jsonData.people directly to the processData function.

// In the for loop where you are iterating over the entries of the map, you should check if the age is "Unknown" before logging it. This is because in your code, the age is set to "Unknown" when the person's name is neither "John" nor "Jane".

// Here's the corrected code:




function processData(data) {
  let myMap = new Map();
  let i = 0;
  console.log("size = " , data.length)

  
  do {
    if (data[i].name === "John") {
      myMap.set(data[i].id, data[i].age);
    } else if (data[i].name === "Jane") {
      myMap.set(data[i].id, data[i].age + 1);
    } else {
      myMap.set(data[i].id, "Unknown");
    }
    i++;
  } while (i < data.length);

  for (let [id, age] of myMap.entries()) {
    if (age !== "Unknown") {
      console.log(`ID: ${id}, Age: ${age}`);
    } else {
      console.log(`ID: ${id}, Age: ${age}`);
    }
  }
}

const jsonData = {
  "people": [
    { "name": "John", "id": 1, "age": 25 },
    { "name": "Jane", "id": 2, "age": 30 },
    { "name": "Alice", "id": 3, "age": 35 }
  ]
};

processData(jsonData.people);









// There is an error in the given code:
// The parsedData variable is assigned the result of JSON.parse(jsonData), but the jsonData variable is already an object. The JSON.parse() function is used to parse JSON strings, not objects. Therefore, there is no need to parse the jsonData object.
// Here's the rectified code:
// In the rectified code, the unnecessary JSON.parse() call is removed, and the jsonData object is directly assigned to the parsedData variable. The rest of the code remains the same.


// function processData(data) {
//   let myMap = new Map();
//   let i = 0;
//   do {
//     if (data[i].name === "John") {
//       myMap.set(data[i].id, data[i].age);
//     } else if (data[i].name === "Jane") {
//       myMap.set(data[i].id, data[i].age + 1);
//     } else {
//       myMap.set(data[i].id, "Unknown");
//     }
//     i++;
//   } while (i < data.length);

//   for (let [id, age] of myMap.entries()) {
//     console.log(`ID: ${id}, Age: ${age}`);
//   }
// }

// const jsonData = {
//   "people": [{
//     "name": "John",
//     "id": 1,
//     "age": 25
//   }, {
//     "name": "Jane",
//     "id": 2,
//     "age": 30
//   }, {
//     "name": "Alice",
//     "id": 3,
//     "age": 35
//   }]
// };
// const parsedData = jsonData;
// processData(parsedData.people);
