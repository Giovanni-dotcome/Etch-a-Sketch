const container = document.querySelector('.container');
const button = document.querySelector('button');
let n = 16;
const size = 800;

const changeColor = (e) => {
  e.target.style.backgroundColor = 'blue';
};

const newGrid = () => {
  input = prompt("enter the number of cells per side (max 100): ");
  n = Math.min(Math.max(input, 1), 100);
  remGrid();
  genGrid();
};

button.addEventListener('click', newGrid);

const genGrid = () => {
  for (let index = 0; index < n * n; index++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add(`cell-${index}`);
    cell.style.width = `${size / n}px`;
    cell.style.height = `${size / n}px`;
    cell.style.border = '1px solid grey';
    cell.addEventListener('mouseenter', changeColor);
    container.appendChild(cell);
  }
};

const remGrid = () => {
  while (container.firstChild)
    container.removeChild(container.firstChild);
};


genGrid();
