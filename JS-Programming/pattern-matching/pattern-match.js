function main() {
    var pattern = readLine();
    var input = readLine();
    console.log(matchPattern(pattern, input));
}

function matchPattern(pattern, input) {
  if (pattern.length !== input.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern.charAt(i);
    const c = input.charAt(i);

    if (!map.has(p)) {
      if (map.has(c)) {
        return false;
      }
      map.set(p, c);
    } else {
      if (map.get(p) !== c) {
        return false;
      }
    }
  }

  return true;
}