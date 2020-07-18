let snowflake,
  snowflakeArr = [];

function setup() {
  createCanvas(min(600, windowWidth), min(600, windowWidth));
  snowflake = new Snowflake(width / 2, 0);
  let button = createButton("Reset");
  button.mousePressed(resetSketch);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(PI / 6);
  background(0);
  let count = 0;
  while (!snowflake.finished() && !snowflake.intersects(snowflakeArr)) {
    snowflake.update();
    count++;
  }
  if (count == 0) noLoop();

  snowflakeArr.push(snowflake);
  snowflake = new Snowflake(width / 2, 0);
  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    for (let s of snowflakeArr) {
      s.show();
    }
    push();
    scale(1, -1);
    for (let s of snowflakeArr) {
      s.show();
    }
    pop();
  }
}

function resetSketch() {
  snowflakeArr = [];
  snowflake = new Snowflake(width / 2, 0);
  loop();
}
