function displayUserInfo({ name, age, country }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
  }
  
  const user = {
    name: 'John Doe',
    age: 30,
    country: 'USA',
  };
  
  displayUserInfo(user);