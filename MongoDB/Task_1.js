// Task 1: Looking to showcase your MongoDB expertise? Solve these CRUD operation problems seamlessly in MongoDB Shell and level up your database skills.
// Problem
// Create a new student document with the following details:
// Name: John Doe
// Age: 22
// Course: Computer Science
// Create two more student document of your choice.
// Retrieve and display all student documents from the database.
// Update the age of the student with the name "John Doe" to 23.
// Delete one of the student document.
// Retrieve and display all student documents from the database after performing the delete operation.4



// -- Task 1: Create a new student document
db.students.insertOne({
  Name: "John Doe",
  Age: 22,
  Course: "Computer Science"
});

// -- Task 2: Create two more student documents
db.students.insertMany([
  {
    Name: "Jane Smith",
    Age: 20,
    Course: "Biology"
  },
  {
    Name: "Mike Johnson",
    Age: 24,
    Course: "Mathematics"
  }
]);

// -- Task 3: Retrieve and display all student documents
db.students.find();

// -- Task 4: Update the age of the student with the name "John Doe" to 23
db.students.updateOne(
  { Name: "John Doe" },
  { $set: { Age: 23 } }
);

// -- Task 5: Delete one of the student document
db.students.deleteOne({ Name: "Jane Smith" });

// -- Task 6: Retrieve and display all student documents after performing the delete operation
db.students.find();