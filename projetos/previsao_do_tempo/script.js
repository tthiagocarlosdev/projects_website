const API_KEY = 'putBRCvw0NgkPwkQnQyC2Bkb10JATZ1G';  // Insira sua chave de API do AccuWeather
const cityNames = ['Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Recife', 'Caruaru'];

async function fetchLocationKey(city) {
  try {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar LocationKey para ${city}`);
    }
    const data = await response.json();
    return data[0].Key; // Retorna a LocationKey do primeiro resultado
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAllLocationKeys() {
  const locationKeys = {};
  for (const city of cityNames) {
    const locationKey = await fetchLocationKey(city);
    if (locationKey) {
      locationKeys[city] = locationKey;
    }
  }
  return locationKeys;
}

async function fetchWeatherData(locationKey) {
  try {
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados meteorológicos para a cidade com LocationKey: ${locationKey}`);
    }
    const data = await response.json();
    return data[0]; // Retorna o primeiro elemento do array
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateCityData(locationKeys) {
  const cities = [
    { name: 'Dublin', locationKey: locationKeys['Dublin'] },
    { name: 'Cork', locationKey: locationKeys['Cork'] },
    { name: 'Limerick', locationKey: locationKeys['Limerick'] },
    { name: 'Galway', locationKey: locationKeys['Galway'] },
    { name: 'Waterford', locationKey: locationKeys['Waterford'] },
    { name: 'Recife', locationKey: locationKeys['Recife'] },
    { name: 'Caruaru', locationKey: locationKeys['Caruaru'] }
  ];
  console.log(cities);

  for (const city of cities) {
    const weather = await fetchWeatherData(city.locationKey);
    console.log(weather)

    if (weather) {
      const cityElements = document.querySelectorAll('.city');
      cityElements.forEach((cityElement) => {
        if (cityElement.querySelector('h2').textContent.trim() === city.name) {
          const tempElement = cityElement.querySelector('.temp');
          const feelsLikeElement = cityElement.querySelector('.feels_like');
          const timeElement = cityElement.querySelector('.time');

          if (weather.Temperature && weather.Temperature.Metric) {
            tempElement.textContent = weather.Temperature.Metric.Value;
          } else {
            tempElement.textContent = 'N/A';
          }

          if (weather.RealFeelTemperature && weather.RealFeelTemperature.Metric) {
            feelsLikeElement.textContent = weather.RealFeelTemperature.Metric.Value;
          } else {
            feelsLikeElement.textContent = 'N/A';
          }

          if (weather.LocalObservationDateTime) {

            const localTime = new Date(weather.LocalObservationDateTime).toLocaleTimeString();
            console.log(localTime)
            timeElement.textContent = horaAtual(weather.LocalObservationDateTime);
          } else {
            timeElement.textContent = 'N/A';
          }
        }
      });
    }
  }
}

function horaAtual(dateTimeString){

  // Regex para extrair a hora no formato HH:MM:SS AM/PM
  const regex = /T(\d{2}:\d{2}:\d{2})/;
  const match = dateTimeString.match(regex);

  if (match && match[1]) {
    const time = match[1]; // Extrai o grupo de captura com a hora

    // Extrair horas, minutos e segundos
    const [hours, minutes, seconds] = time.split(':');

    // Converter para formato de 12 horas com AM/PM
    let formattedHours = parseInt(hours, 10);
    const amPm = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12 || 12; // Converte 0 para 12 horas
    const formattedTime = `${formattedHours}:${minutes}:${seconds} ${amPm}`;

    console.log(`Hora Atual: ${formattedTime}`); // Saída: 06:55:00 AM

    return formattedTime;

  } else {
    console.error('Hora não encontrada na string fornecida');
  }

}


document.addEventListener('DOMContentLoaded', async () => {
  const locationKeys = await getAllLocationKeys();
  updateCityData(locationKeys);
});
