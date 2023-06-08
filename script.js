// Get the container div, grid size input, and grid size value element
const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size");
const gridSizeValue = document.getElementById("grid-size-value");

// Create the initial grid with the default size of 16x16
createGrid();

function createGrid() {
  // Clear the existing grid squares
  container.innerHTML = "";

  // Get the grid size from the range input element
  const gridSize = parseInt(gridSizeInput.value);

  // Calculate the size of each square based on the number of squares in the container
  const squareSize = 400 / gridSize;

  // Set the --grid-size and --square-size CSS variables
  container.style.setProperty("--grid-size", gridSize);
  container.style.setProperty("--square-size", `${squareSize}px`);

  // Display the grid size value in real time
  gridSizeValue.textContent = `Grid size: ${gridSize}x${gridSize}`;

  // Create the grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.setProperty("--r", "255");
    square.style.setProperty("--g", "255");
    square.style.setProperty("--b", "255");
    container.appendChild(square);
  }
}

// Update the grid when the range input is changed
gridSizeInput.addEventListener("input", createGrid);

// Set a random RGB color to the grid square when the mouse passes over it
container.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("square")) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    event.target.style.setProperty("--r", r);
    event.target.style.setProperty("--g", g);
    event.target.style.setProperty("--b", b);
    event.target.classList.add("colored");
  }
});