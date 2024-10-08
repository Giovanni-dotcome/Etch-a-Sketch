const container = document.querySelector('.container');
const newGrid = document.querySelector('.newGrid');
const cancel = document.querySelector('.cancel');
const colors = document.querySelectorAll('.color');

let n = 100;
let color = 'blue';
const size = 800;

colors.forEach(el => {
  el.addEventListener('click', () => {
    color = el.classList[1];
  })
})

const getNewGrid = () => {
  remGrid();
  genGrid();
};

newGrid.addEventListener('click', getNewGrid);

const genGrid = () => {
  for (let index = 0; index < n * n; index++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add(`cell-${index}`);
    cell.style.width = `${size / n}px`;
    cell.style.height = `${size / n}px`;

     cell.addEventListener('mousedown', (e) => {
      // Prevent text selection
      e.preventDefault();
    });

    cell.addEventListener('contextmenu', (e) => {
      // Prevent text selection
      e.preventDefault();
    });

    cell.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.backgroundColor = color;
      }
    });

    container.appendChild(cell);
  }
};

const remGrid = () => {
  while (container.firstChild)
    container.removeChild(container.firstChild);
};

genGrid();
