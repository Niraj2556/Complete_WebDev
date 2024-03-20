function main() {
    var str = readLine();
    var pattern = readLine();
    console.log(findPatternOccurrences(str, pattern));
}
function findPatternOccurrences(str, pattern) {
  const occurrences = [];
  let i = str.indexOf(pattern);

  while (i !== -1) {
    occurrences.push(i);
    i = str.indexOf(pattern, i + 1);
  }

  return occurrences;
}