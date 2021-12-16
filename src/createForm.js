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
  function createNewField(fieldName) {
    const split = fieldName.split(' ');
    const joined = split.join('-');
    const field = document.createElement('input');
    field.type = 'text';
    field.classList.add(joined);
    field.setAttribute('name', fieldName);
    body.appendChild(field);
  }
  const dropdownOptions = document.querySelectorAll('.dropDown-Options');
  dropdownOptions.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('click');
      if (element.textContent === 'zip code and country') {
        createNewLabel('zip code');
        createNewField('zip code');
        createNewLabel('country');
        createNewField('country');
      } else {
        createNewLabel(element.textContent);
        createNewField(element.textContent);
      }
    });
  });
}
export default createForm;
