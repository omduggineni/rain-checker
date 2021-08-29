let raindrops = [];
let song;
function preload(){
  song = loadSound('noise.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 500; i++){
    raindrops.push([random()*windowWidth, random()*windowHeight, random()*15+15])
  }
}
function draw() {
  if(!song.isPlaying()){
    song.play()
  }

  resizeCanvas(windowWidth, windowHeight);
  background(50);
  fill("#FFFFFF")
  stroke("#FFFFFF")
  text("it is raining", 20, windowHeight-20)
  for(var i = 0; i < raindrops.length; i++){
    line(raindrops[i][0], raindrops[i][1], raindrops[i][0], raindrops[i][1]+10)
    raindrops[i][1] += raindrops[i][2];
  }
  for(var i = 0; i < 10; i++){
    raindrops.push([random()*windowWidth, 0, random()*random()*30+15])
  }
  raindrops.filter(x => x[1] < windowHeight)
}
function mousePressed() {
  console.log("mouse pressed")
  song.play()
}
