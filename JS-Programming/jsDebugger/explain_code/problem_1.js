function outerFunction() {
    const outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample(); // Output: I am from the outer function