
// $(document).ready(function(){
//     $('#btn1').click(function(){
//      console.log("clicked");
//         $(".mode-h1").append("Some appended text.");
//         $('h2').slideUp();
//         $('h2').slideDown();
// });
// });



// Function that performs an asynchronous operation
setTimeout(()=>{
  
console.log("first")
},3000)

function fetchData(url, callback) {
    // Simulating an asynchronous request
    setTimeout(() => {
      console.log("second");
      const data = { message: 'Data fetched successfully' };
      callback(data);
       // Invoke the callback function with the fetched data
       console.log("after")
    }, 2000);
  }
  
  // Callback function to handle the fetched data

  console.log("third")
  
  function handleData(data) {
    console.log(data.message);
    console.log("fourth")
  }
  
  // Call the fetchData function with the URL and callback function
  fetchData('<https://api.example.com/data>', handleData);