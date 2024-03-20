// const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
// const city = "Mumbai";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     const temperature = data.main.temp - 273.15; // Convert Kelvin to Celsius
//     const humidity = data.main.humidity;
//     // ... Extract other relevant data
    
//     // Display the weather information
//     document.getElementById("weather").innerHTML = `
//       <h2>Current Weather in ${city}</h2>
//       <p>Temperature: ${temperature.toFixed(2)} °C</p>
//       <p>Humidity: ${humidity}%</p>
//       `;
//   })
//   .catch(error => {
//     console.error("Error fetching weather data:", error);
//   });




// -------------------------OR--------------------------




// Replace 'YOUR_API_KEY' with your actual API key from OpenWeather
const apiKey = 'YOUR_API_KEY';
const city = 'New York';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Weather data:', data);
    // Process the weather data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


