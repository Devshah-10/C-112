Webcam.set ({

width: 350,
height: 300,
iamge_format: 'jpeg',
jpeg_quality: 90

})

Camera = document.getElementById("camera");
Webcam.attach(Camera);

function TakeSnapshot() {

Webcam.snap(function (data_uri) {

document.getElementById("result").innerHTML = '<img id = "captured_image" src= "' + data_uri + '">';

});

}

console.log("mlf version", ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rFuMSzXuY/model.json",modelLoaded);

function modelLoaded() {

console.log("Model Loaded");

}

var Prediction_1 = "";
var Prediction_2 = "";

function Speak() {

var synth = window.speechSynthesis;
speak_data_1 = "The first Prediction is " + Prediction_1;
speak_data_2 = " and the second Prediction is  " + Preduction_2;

var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterthis);

}

function Check() {

img = document.getElementById("captured_image");
Classifier.classify(img,gotResult);

}

function gotResult(error,results) {

if(error) {

console.log(error);

}

else {

console.log(results);

document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;

Prediction_1 = results[0].label;
Prediction_2 = results[1].label;

Speak();

if(results[0].label == "Happy") {

document.getElementById("update_emoji").innerHTML = "&#128522;";

}

else if (results[0].label == "Sad") {

document.getElementById("update_emoji").innerHTML = "&#128532;";

}

else if(results[0].label == "Angry") {

document.getElementById("update_emoji").innerHTML = "&#128548;";

}

if(results[1].label == "Happy") {

    document.getElementById("update_emoji2").innerHTML = "&#128522;";

}

else if (results[1].label == "Sad") {

    document.getElementById("update_emoji2").innerHTML = "&#128532;";
    
    }
    
    else if(results[1].label == "Angry") {
    
    document.getElementById("update_emoji2").innerHTML = "&#128548;";
    
    }

}

}