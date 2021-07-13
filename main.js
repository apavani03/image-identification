Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  function take_snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("Snapshot").innerHTML = '<img id = "captured_image" src = "' + data_uri +'"></img>';
    });
  }

  classifier = ml5.imageClassifier('MobileNet',modelLoaded);

  function modelLoaded(){
    console.log('Model Loaded!');
  }

  function identifyImage(){
img = document.getElementById("captured_image");
classifier.classify(img, gotResult);
classifier_2.classify(img, gotResult2);
     
  }

  function gotResult(error, results){
    if (error){
      console.error(error);
    } else {
      console.log("Got Results");
      console.log(results);
        document.getElementById("output_1").innerHTML=results[0].label;
    }
 
  }

  
  classifier_2 = ml5.imageClassifier('Wolfram Project',modelLoaded2);

  function modelLoaded2(){
    console.log('Model2 Loaded!');
  }


  function gotResult2(error, results){
    if (error){
      console.error(error);
    } else {
      console.log("Got Results");
      console.log(results);
        document.getElementById("output_2").innerHTML=results[0].label;
    }
 
  }

  