const container = document.querySelector(".container");
const btn = document.querySelector("#select-grid");
const resetBtn = document.querySelector("#reset-grid");

// let mouseDown = false;

// container.addEventListener('mousedown',() => {
//   mouseDown = true;
// });

// container.addEventListener('mouseup',() => {
//   mouseDown = false;
// });

let changeColor = false;

container.addEventListener("click", () => {
  changeColor = !changeColor;
});

const createGrid = (width = 16, height = 16) => {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const cols = Math.floor(containerWidth / parseInt(width));
  const rows = Math.floor(containerHeight / parseInt(height));

  for (let i = 0; i < rows * cols; i++) {
    const divs = document.createElement("div");
    divs.classList.add("grid-box");
    divs.style.width = `${width}px`;
    divs.style.height = `${height}px`;

    container.appendChild(divs);

    divs.addEventListener("mouseover", () => {
      if (changeColor) {
        divs.style.backgroundColor = "red";
      }
    });

    divs.addEventListener("dblclick", () => {
      divs.style.backgroundColor = "lightblue";
    });

    // divs.addEventListener('mouseover', () => {
    //   if(mouseDown){
    //     divs.style.backgroundColor = "red";
    //   }
    // })
  }
};

createGrid();

let width = 16;

function userInput() {
  width = parseInt(prompt("Enter grid box size (less than 100): "), 10);
  while (width > 100) {
    width = parseInt(prompt("Enter grid box size (less than 100): "), 10);
  }
  return width;
}

btn.addEventListener("click", () => {

  boxWidth = userInput();
  boxHeight = boxWidth;

  container.textContent = "";

  if (boxWidth === null || boxWidth === "" || isNaN(boxWidth)) {
    boxWidth = 16;
  }
  if (boxHeight === null || boxHeight === "" || isNaN(boxHeight)) {
    boxHeight = 16;
  }
  createGrid(boxWidth, boxHeight);
  
});

resetBtn.addEventListener("click", () => {
  const height = width;
  container.textContent = "";
  createGrid(width, height);
 
});



