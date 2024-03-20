function main() {
    var a = parseInt(readLine());
	var b = parseInt(readLine());
	boundAdd(a,b);
	console.log(calculator.result);
}
const calculator = {
  result: 0,
  add: function (a, b) {
    this.result = a + b;
  },
};

const boundAdd = calculator.add.bind(calculator);