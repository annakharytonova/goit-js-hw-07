const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let sizes = 30;

btnCreate.addEventListener('click', createMarkUp);
btnDestroy.addEventListener('click', destroyBoxes);

function createMarkUp() {
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    console.log('error');
    return;
  }

  createBoxes(+input.value);
}

function destroyBoxes() {
  box.innerHTML = '';
  input.value = '';
  sizes = 30;
}

function createBoxes(amount) {
  box.innerHTML = '';
  sizes = 30;

  const arr = [];

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);

    sizes += 10;
  }

  box.append(...arr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
