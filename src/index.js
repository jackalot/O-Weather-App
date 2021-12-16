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
async function fetchWeather() {
  const weatherParagraph = document.querySelector('.weather');
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=ea13d76af44f95e6e901a4a69585bb22', { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
}
const fetchWeatherBtn = document.querySelector('.fetch-weather');
fetchWeatherBtn.addEventListener('click', () => {
  fetchWeather();
});
createForm();
