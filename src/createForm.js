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
  function createNewField(fieldType) {
    const split = fieldType.split(' ');
    const joined = split.join('-');
    const field = document.createElement('input');
    field.type = 'text';
    field.classList.add(joined);
    field.setAttribute('name', joined);
    body.appendChild(field);
  }
  createNewLabel('this is a test');
  createNewField('this is a test');
  const dropdownOptions = document.querySelector('.dropDown-Options');
  dropdownOptions.addEventListener('click', () => {

  });
}
export default createForm;
