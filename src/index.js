/* eslint-disable no-case-declarations */
import createForm from './createForm';

async function fetchGiffy(searchTerm) {
  const image = document.querySelector('.giffy');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1wCBlxlhZg8hx21BVDkIfPtthGp61X1f&s=${searchTerm}`, { mode: 'cors' });
  const queryData = await response.json();
  image.src = queryData.data.images.original.url;
}

async function fetchWeather(fetchRequest) {
  const weatherParagraph = document.querySelector('.weather');
  const response = await fetch(`${fetchRequest}`, { mode: 'cors' });
  weatherParagraph.textContent = 'loading';
  const weatherData = await response.json();
  console.log(weatherData);
  weatherParagraph.textContent = `In ${weatherData.name}, there are currently ${weatherData.weather[0].description} out right now and
  the wind speed is ${weatherData.wind.speed} with a degrees of ${weatherData.wind.deg}. It feels like its
  ${weatherData.main.feels_like} outside but it really is ${weatherData.main.temp}, expect a minimum of
  ${weatherData.main.temp_min} and a maximum of ${weatherData.main.temp_max}`;
  fetchGiffy(weatherData.weather[0].description);
}
const fetchWeatherBtn = document.querySelector('.fetch-weather');
fetchWeatherBtn.addEventListener('click', () => {
  const dropdownBtn = document.querySelector('#How-would-you-like-to-find-the-weather-dropDownButton');
  switch (dropdownBtn.textContent) {
    case 'city name':
      const cityName = document.querySelector('.city-name');
      if (cityName.value !== '') {
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=ea13d76af44f95e6e901a4a69585bb22`);
      } else {
        const weatherParagraph = document.querySelector('.weather');
        weatherParagraph.textContent = 'Theres no city name to search from!';
      }
      break;
    case 'zip code and country':
      const zipCode = document.querySelector('.zip-code');
      const country = document.querySelector('.country');
      if (zipCode.value !== '' || country !== '') {
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},${country.value}&appid=ea13d76af44f95e6e901a4a69585bb22`);
      } else {
        const weatherParagraph = document.querySelector('.weather');
        weatherParagraph.textContent = 'Theres no zipcode or country to search from!';
      }
      break;
    case 'longitude and latitude':
      const longitude = document.querySelector('.longitude');
      const latitude = document.querySelector('.latitude');
      if (latitude.value !== '' || longitude !== '') {
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=ea13d76af44f95e6e901a4a69585bb22`);
      } else {
        const weatherParagraph = document.querySelector('.weather');
        weatherParagraph.textContent = 'Theres no latitude or longitude to search from!';
      }
      break;
    default:
      fetchWeather('https://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=ea13d76af44f95e6e901a4a69585bb22');
      break;
  }
});
createForm();
