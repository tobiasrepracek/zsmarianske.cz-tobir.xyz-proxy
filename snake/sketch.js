const screen_width = 575;
const screen_height = 575;
const unit_size = 25;
var x = [0];
var y = [0];
var body_parts = 1;
var apple_x;
var apple_y;
var direction = 'R';
var delay = 75;

function setup() {
  createCanvas(screen_width, screen_width);
  newApple();
  setInterval(move, delay)
}

function draw() {
  check_collision();
  background(41, 43, 51);
  for(var i = body_parts; i>0; i--){
    fill(color(16, 161, 38));
    rect(x[i], y[i], unit_size, unit_size);
  }
  fill(color(200, 0, 0));
  rect(apple_x, apple_y, unit_size, unit_size);
}

function move(){
  for (var i = body_parts; i > 0; i--) {
      x[i] = x[i - 1];
      y[i] = y[i - 1];
  }

  if(direction == "U") {
      y[0] = y[0] - unit_size;
  }
  if(direction == "D") {
      y[0] = y[0] + unit_size;
  }

  if(direction == "L") {
      x[0] = x[0] - unit_size;
  }

  if(direction == "R") {
      x[0] = x[0] + unit_size;
  }

} // DONE

function newApple(add_body){
  if (add_body) body_parts+=1;
  
  
  rand = int(random(0, (screen_width+unit_size)/unit_size));
  apple_x = int(random(0, screen_width/unit_size))*unit_size
  apple_y = int(random(0, screen_height/unit_size))*unit_size
  
  
  
} // DONE

function keyPressed(){
  if ((keyCode == LEFT_ARROW) || key == 'a') 
  {
    if(direction != "R"){
          direction = "L"
    }
  }
  
  if ((keyCode == RIGHT_ARROW) || key == 'd') 
  {
    if(direction != "L"){
          direction = "R"
    }
  }
  
  
    if ((keyCode == UP_ARROW) || key == 'w') 
  {
    if(direction != "D"){
          direction = "U"
    }
  }
  
  if ((keyCode == DOWN_ARROW) || key == 's') 
  {
    if(direction != "U"){
          direction = "D"
    }
  }
} // DONE

function reset(){
  if (body_parts > 3) {
      console.log("Died");
      body_parts = 3;
      direction = 'R';
      newApple();
      x[0] = 0;
      y[0] = 0;
      score = 0;
    }
} // DONE

function check_collision(){
  for (var i = body_parts; i > 0; i--) {
    if ((x[0] == x[i]) && (y[0] == y[i])) {
        reset();
    }
  }
  for (var i = body_parts; i != 0; i--) {
    if (x[i] == apple_x) {
        if (y[i] == apple_y) {
            console.log("Apple Eaten");
            newApple(true);
        }
    }
  }
    if (x[0] < 0) {
        x[0] = screen_height - unit_size;
    }
    if (x[0] >= screen_height) {
        x[0] = 0;
    }

    if (y[0] < 0) {
        y[0] = screen_width - unit_size;
    }
    if (y[0] >= screen_width) {
       y[0] = 0;
    }
} // DONE
