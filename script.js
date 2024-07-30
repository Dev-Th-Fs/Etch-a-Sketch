const container = document.querySelector(".container");
const btn = document.querySelector("#select-grid");

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
  }
};

createGrid();

btn.addEventListener("click", () => {
  let width = parseInt(prompt("Enter width of the box: "), 10);
  let height = parseInt(prompt("Enter height of the box: "), 10);

  container.textContent = "";

  if (width === null || width === "" || isNaN(width)) {
    width = 16;
  }
  if (height === null || height === "" || isNaN(height)) {
    height = 16;
  }
 createGrid(width, height)


});


