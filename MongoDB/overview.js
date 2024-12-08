// # In the MongoDB Shell:

// # 1. Create a new database
// use mynewdb

// # 2. Switch to the new database
// use mynewdb

// # 3. Create a new collection in "mydb"
// use mydb
db.createCollection("mynewcollection")

// # 4. Insert a document into the new collection
db.mynewcollection.insert({"example": "data"})

// # 5. List all collections in "mydb"
// show collections

// # 6. Drop the collection
db.mynewcollection.drop()

// // # 7. List all databases
// show dbs

// # 8. Drop the database
db.dropDatabase()