function setup() {
  canvas = createCanvas(350, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classify=ml5.imageClassifier("MobileNet",modelLoaded);
}

function modelLoaded(){
  console.log("Model Loaded!")
}

function draw(){
  image(video,0,0,350,350)
  classify.classify(video,gotResults)
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results)
    document.getElementById("span1").innerHTML=results[0].label;
    document.getElementById("span2").innerHTML=results[0].confidence.toFixed(3);
  }
}