async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '5dbbc95c236aa8b207fbcf4bb1139b85'; // Replace with your OpenWeatherMap API key

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const result = document.getElementById('weatherResult');

    if (data.cod === 200) {
      result.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } else {
      result.innerHTML = `<p>City not found. Please try again.</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching data. Please check your connection.</p>`;
  }
}
