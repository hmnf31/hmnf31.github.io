document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '66edd0101afe8690c9ab6cb5857da1d1';
    const city = 'Bandung-Id';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const location = `${data.name}, ${data.sys.country}`;

            document.getElementById('weather-description').textContent = `Weather: ${weatherDescription}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('location').textContent = location;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
