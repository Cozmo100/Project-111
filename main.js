
Webcam.set({
    width: 200, height: 150, image_format: "png", png_quality: 90
})

camera = document.getElementById('camera');

Webcam.attach("#camera");

function CaptImg(){
    Webcam.snap(function(data_uri){
        document.getElementById('sv').innerHTML = "<img id='fp' src="+data_uri+">";
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Kd2SMPz1r/model.json');

function modelLoaded() {
    console.log('Model has been loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}