import createDropdown from '@jackalot/createdropdown.js';

function createForm() {
  const body = document.querySelector('body');
  createDropdown(body, 'How would you like to find the weather', ['city name', 'zip code and country', 'longitude and latitude']);
  function createNewLabel(labelText) {
    const x = document.createElement('LABEL');
    const y = document.createTextNode(labelText);
    x.setAttribute('for', labelText);
    x.append(y);
    body.appendChild(x);
  }
  function createNewField() {

  }
  createNewLabel('this is a test');
  const dropdownOptions = document.querySelector('.dropDown-Options');
  dropdownOptions.addEventListener('click', () => {

  });
}
export default createForm;
