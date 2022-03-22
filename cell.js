function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.walls = [true, true, true, true];
    this.visited = false;
  
    this.checkNeighbors = function() {
      let neighbors = [];
  
      let top     = grid[index(x, y -1)];
      let right   = grid[index(x+1, y)];
      let botton  = grid[index(x, y +1)];
      let left    = grid[index(x-1, y)];
  
      if (top && !top.visited) {
        neighbors.push(top);
      }
      if (right && !right.visited) {
        neighbors.push(right);
      }
      if (botton && !botton.visited) {
        neighbors.push(botton);
      }
      if (left && !left.visited) {
        neighbors.push(left);
      }
      
      if (neighbors.length > 0) {
        let r = floor(random(0, neighbors.length));
        return neighbors[r];
      } else {
        return undefined;
      }
    }
  
    this.highlight = function() {
      let x = this.x*w;
      let y = this.y*w;
      noStroke();
      fill(0, 0, 255, 100);
      rect(x, y, w, w);
    }
  
    this.show = function() {
      let x = this.x*w;
      let y = this.y*w;
      stroke(255);      
  
      if (this.walls[0]) {
        line(x,y,x+w,y);
      }
      if (this.walls[1]) {
        line(x+w,y,x+w,y+w);
      }
      if (this.walls[2]) {
        line(x+w,y+w,x,y+w);
      }
      if (this.walls[3]) {
        line(x,y+w,x,y);
      }
  
      if (this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(x,y,w,w);
      }
    }
  }