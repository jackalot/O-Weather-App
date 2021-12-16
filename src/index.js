import createForm from './createForm';

async function fetchGiffy() {
  const image = document.querySelector('.giffy');
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=1wCBlxlhZg8hx21BVDkIfPtthGp61X1f&s=sample', { mode: 'cors' });
  const queryData = await response.json();
  image.src = queryData.data.images.original.url;
}

const fetchGiffyBtn = document.querySelector('.fetch-giffy');
fetchGiffyBtn.addEventListener('click', () => {
  fetchGiffy();
  //    later we can add a parameter to fetchGiffy() to display for example,
  //    a clear weather giff, for now it will display something related to sample
});
async function fetchWeather(fetchRequest) {
  const weatherParagraph = document.querySelector('.weather');
  const response = await fetch(fetchRequest, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
}
const fetchWeatherBtn = document.querySelector('.fetch-weather');
fetchWeatherBtn.addEventListener('click', () => {
  const dropdownBtn = document.querySelector('#How-would-you-like-to-find-the-weather-dropDownButton');
  switch (dropdownBtn.textContent) {
    case 'city name':
      // eslint-disable-next-line no-case-declarations
      const cityName = document.querySelector('.city-name');
      fetchWeather(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=ea13d76af44f95e6e901a4a69585bb22`);
      break;
    case 'zip code and country':
      break;
    case 'longitude and latitude':
      fetchWeather('');
      break;
    default:
      fetchWeather('http://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=ea13d76af44f95e6e901a4a69585bb22');
      break;
  }
});
createForm();
