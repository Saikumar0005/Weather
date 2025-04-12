function getWeather() {
    const cityname = document.getElementById('city-name').value;
    const apiKey = '7040ea904442a45d6950ba584410ce59';
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const completeURL = `${baseURL}${cityname}&appid=${apiKey}&units=metric`; // Using 'metric' to get temperature in Celsius
  
    fetch(completeURL)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== '404') {
          const main = data.main;
          const wind = data.wind;
          const temperature = main.temp;
          const humidity = main.humidity;
          const wind_speed = wind.speed;
          const weather_desc = data.weather[0].description;
  
          const weatherReport = `
            <strong>Current Temperature:</strong> ${temperature}°C<br>
            <strong>Humidity:</strong> ${humidity}%<br>
            <strong>Wind Speed:</strong> ${wind_speed} m/s<br>
            <strong>Weather Description:</strong> ${weather_desc}
          `;
          document.getElementById('weather-report').innerHTML = weatherReport;
        } else {
          document.getElementById('weather-report').innerHTML = 'City not found. Please try again.';
        }
      })
      .catch(error => {
        document.getElementById('weather-report').innerHTML = 'Error fetching weather data.';
      });
  }
  