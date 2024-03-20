function handleWeatherData(data) {
    const currentTemp = data.main.temp;
    console.log("Current temperature:", currentTemp + "°C");
    // Update your UI with the temperature data
  }
  
  const script = document.createElement('script');
  script.src = `https://weatherapi.com/api/current.json?q=London&callback=handleWeatherData`;
  document.head.appendChild(script);
  