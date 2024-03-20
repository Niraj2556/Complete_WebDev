// Hashmaps can be used in JavaScript to store and retrieve key-value pairs efficiently. While JavaScript does not have a built-in Hashmap data structure, you can create a Hashmap by using an object as a key-value store and generating unique keys for each value using a hash function.// Hashmap implementation using objects

// Working of Hashmap
// Initialize an Empty Hashmap: To create a hashmap in JavaScript, you can use the Map object or utilize objects as key-value pairs.
// Hashing the Key: When inserting a key-value pair into the hashmap, the key is hashed using a hashing function. The hashing function converts the key into a unique numeric value, known as the hash code. The hash code determines the index or bucket where the key-value pair will be stored.
// Store the Key-Value Pair: Using the hash code, the key-value pair is stored in the corresponding bucket or location in the hashmap. JavaScript's Map object automatically handles this process, while with objects, the hash code is typically used as a property name to store the value.
// Retrieve a Value: To retrieve a value from the hashmap, the key is hashed again to obtain the hash code. Using the hash code, the hashmap locates the bucket or property associated with the key and returns the corresponding value.
// Update or Remove a Value: To update or remove a value, the process is similar to retrieval. The key is hashed to find the corresponding bucket or property, and the value is updated or removed accordingly.
// Handling Collisions: Collisions occur when different keys produce the same hash code. To handle collisions, the hashmap employs various techniques such as chaining (using linked lists or arrays within the buckets to store multiple key-value pairs with the same hash code) or open addressing (finding an alternative empty location within the hashmap to store the colliding key-value pair).
// Resize and Rehash: As the number of key-value pairs in the hashmap grows, the hashmap may need to be resized to maintain efficient performance. Resizing involves creating a larger array or allocating additional memory space and rehashing all the key-value pairs to distribute them across the new buckets.

class HashMap {
    constructor() {
      this.map = {}; // Object to store key-value pairs
    }
  
    // Insert a key-value pair into the hashmap
    insert(key, value) {
      this.map[key] = value;
    }
  
    // Retrieve the value associated with a given key
    get(key) {
      return this.map[key];
    }
  
    // Remove a key-value pair from the hashmap
    remove(key) {
      delete this.map[key];
    }
  
    // Check if a key exists in the hashmap
    contains(key) {
      return key in this.map;
    }
  
    // Get the number of key-value pairs in the hashmap
    size() {
      return Object.keys(this.map).length;
    }
  
    // Get all keys in the hashmap
    keys() {
      return Object.keys(this.map);
    }
  
    // Get all values in the hashmap
    values() {
      return Object.values(this.map);
    }
  }
  
  // Usage example
  const myHashMap = new HashMap();
  
  myHashMap.insert("name", "John");
  myHashMap.insert("age", 30);
  
  console.log(myHashMap.get("name")); // Output: John
  console.log(myHashMap.contains("age")); // Output: true
  
  myHashMap.remove("age");
  console.log(myHashMap.size()); // Output: 1
  console.log(myHashMap.keys()); // Output: [ 'name' ]
  console.log(myHashMap.values()); // Output: [ 'John' ]