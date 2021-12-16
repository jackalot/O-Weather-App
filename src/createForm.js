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
  function createNewField(fieldName, fieldType) {
    const split = fieldName.split(' ');
    const joined = split.join('-');
    const field = document.createElement('input');
    field.type = fieldType;
    field.classList.add(joined, 'Field-Entry');
    field.setAttribute('name', fieldName);
    body.appendChild(field);
  }
  function removeFields(exception1, exception2) {
    const allFields = document.querySelectorAll('.Field-Entry');
    allFields.forEach((element) => {
      if (element.textContent !== exception1 || element.textContent !== exception2) {
        const label = document.querySelector(element.name);
        element.parentNode.removeChild(element);
      }
    });
  }
  const dropdownOptions = document.querySelectorAll('.dropDown-Options');
  dropdownOptions.forEach((element) => {
    element.addEventListener('click', () => {
      console.log('click');
      if (element.textContent === 'zip code and country') {
        removeFields('zip code', 'country').then(() => {
          createNewLabel('zip code');
          createNewField('zip code', 'Number');
          createNewLabel('country');
          createNewField('country', 'Text');
        });
      } else if (element.textContent === 'longitude and latitude') {
        createNewLabel('longitude');
        createNewField('longitude', 'Number');
        createNewLabel('latitude');
        createNewField('latitude', 'Number');
      } else {
        createNewLabel(element.textContent);
        createNewField(element.textContent);
      }
    });
  });
}
export default createForm;
