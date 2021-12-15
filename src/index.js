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
  //    clear weather, for now it will display something related to sample
});
