function findAllCombinations(set, index, current) {
    if (index === set.length) {
      console.log(current);
      return;
    }
    findAllCombinations(set, index + 1, current);
    findAllCombinations(set, index + 1, current.concat(set[index]));
  }
  
  const set = ['a', 'b', 'c'];
  findAllCombinations(set, 0, []);
  
  // Output
//   []
//   ["c"]
//   ["b"]
//   ["b", "c"]
//   ["a"]
//   ["a", "c"]
//   ["a", "b"]
//   ["a", "b", "c"]




// Explanation
// The function starts by checking if the index parameter is equal to the length of the set array. If they are equal, it means we have reached the end of the set, and we have a complete combination stored in the current array. In this case, the current array is printed using console.log, and the function returns.
// If the index is not equal to the length of the set array, we have two recursive calls to findAllCombinations.
// The first recursive call (findAllCombinations(set, index + 1, current)) represents the scenario where the current element is not included in the combination. It moves to the next index (index + 1) and keeps the current array unchanged.
// The second recursive call (findAllCombinations(set, index + 1, current.concat(set[index]))) represents the scenario where the current element is included in the combination. It moves to the next index (index + 1) and creates a new current array by concatenating the existing current array with the element at the current index (set[index]).
// By recursively calling the function with different combinations of elements, it explores all possible combinations and eventually prints them out.