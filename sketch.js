let cols, rows;
let w = 10;
let grid = [];
let current;
let stack = [];

function setup() {
  createCanvas(900, 900);
  cols = floor(width/w);
  rows = floor(height/w);
  // frameRate(30);

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      var cell = new Cell(x, y);
      grid.push(cell);
    }
  }

  current = grid[0];
}
  
function draw() {
  background(51);
  for (let i=0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0){
    current = stack.pop();
  }
}

function index(x, y) {
  if (x < 0 || y < 0 || x > cols-1 || y > rows-1) {
    return -1;
  }
  return x + y * cols;
}

function removeWalls(a, b) {
  let x = a.x - b.x;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.y - b.y;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}