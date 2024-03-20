function main() {
	var paragraph = readLine();
    var banned = readLine().split(" ").map(x => (x));
    console.log(mostCommonWord(paragraph, banned));
}
var mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.toLowerCase().split(/\W+/g)
    let map = {}

    for(let word of arr) {
        if(!map[word]) {
            map[word] = 1        
        } else {
            map[word]++
        }
    }

   return Object.keys(map).sort((a,b) => {
        return map[b] - map[a]
    }).filter(word => !banned.includes(word))[0]
};