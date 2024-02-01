document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector(".search-bar button");
  const cityInput = document.querySelector(".search-bar input");
  const weatherImage = document.querySelector(".weather-container img");
  const temperature = document.querySelector(".weather-container .cloud");
  const weatherDescription = document.querySelector(".weather-container .cloudysky");

  searchButton.addEventListener("click", () => {
    const APIKey = "45e30bc2976522f6cb5aec68bbcd1601";
    const city = cityInput.value.trim();

    if (city === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0].main;
        const temperatureCelsius = Math.round(data.main.temp - 273.15);

        switch (weather) {
          case "Clear":
            weatherImage.src = "images/clear.png";
            break;
          case "Rain":
            weatherImage.src = "images/rain.png";
            break;
          case "Clouds":
            weatherImage.src = "images/clouds.png";
            break;
          case "Mist":
            weatherImage.src = "images/mist.png";
            break;
          case "Snow":
            weatherImage.src = "images/snow.png";
            break;
          default:
            weatherImage.src = "images/clouds.png";
            break;
        }

        temperature.textContent = `${temperatureCelsius}°C`;
        weatherDescription.textContent = data.weather[0].description;
      })
      .catch(error => console.error("Error fetching weather data:", error));
  });
});
