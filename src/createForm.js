import createDropdown from '@jackalot/createdropdown.js';

function createForm() {
  const body = document.querySelector('body');
  createDropdown(body, 'How would you like to find the weather', ['city name', 'zip code and country', 'longitude and latitude']);
}
export default createForm;
