const form = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

form.addEventListener('input', getText);

function getText(event) {
  const element = event.target.value.trim();
  span.textContent = element === '' ? 'Anonymous' : element;
}
