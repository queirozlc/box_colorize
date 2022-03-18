// Declaring global variables

const square = document.querySelector('.square');
let button = document.querySelector('.change');
let colors;

function makeColor() {
  // Getting random rgb values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Save them on an array variable
  colors = [r, g, b];
}

function setupColor() {
  // Change background color of box
  square.style.backgroundColor = `rgb(${colors})`;
}

// Calling functions

button.addEventListener('click', () => {
  makeColor();
  setupColor();
});
