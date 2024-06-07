const API_KEY = '78a2d59348289f90f36b2cbb5978efa0';  // Insira sua chave de API do OpenWeatherMap
const cities = [
  { name: 'Dublin', timezone: 'Europe/Dublin' },
  { name: 'Cork', timezone: 'Europe/Dublin' },
  { name: 'Limerick', timezone: 'Europe/Dublin' },
  { name: 'Galway', timezone: 'Europe/Dublin' },
  { name: 'Waterford', timezone: 'Europe/Dublin' },
  { name: 'Recife', timezone: 'America/Recife' },
  { name: 'Caruaru', timezone: 'America/Recife' }
];

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados meteorológicos para ${city.name}`);
    }
    const data = await response.json();
    return data.main;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchTimeData(timezone) {
  try {
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados de hora para ${timezone}`);
    }
    const data = await response.json();
    return new Date(data.datetime).toLocaleTimeString();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateCityData() {
  for (const city of cities) {
    const weather = await fetchWeatherData(city);
    const time = await fetchTimeData(city.timezone);

    if (weather && time) {
      const cityElements = document.querySelectorAll('.city');
      cityElements.forEach((cityElement) => {
        if (cityElement.querySelector('h2').textContent.trim() === city.name) {
          cityElement.querySelector('.temp').textContent = weather.temp;
          cityElement.querySelector('.feels_like').textContent = weather.feels_like;
          cityElement.querySelector('.time').textContent = time;
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', updateCityData);