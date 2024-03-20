// Once upon a time, there was a young boy named Ethan who loved to play treasure hunt. He would spend hours creating maps and clues for his friends to follow. One day, he decided to create a treasure hunt where the clues were hidden in an object. Each key in the object represented a clue, and the value was the location of the next clue. He wanted to make sure he had included all the necessary clues, but he didn’t know how to check all the keys in the object.
// Can you help Ethan by writing a function in ES5 syntax that takes an object as input and returns an array of all the keys in the object, representing all the clues in his treasure hunt?
// Example 1:
// Input: {"name": "John", "age": 25, "city": "New York"}
// Output: ['name', 'age', 'city']


function main() {
    var obj = JSON.parse(readLine());
    console.log(getObjectKeysES5(obj));
}
function getObjectKeysES5(obj) {
    var keys = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
