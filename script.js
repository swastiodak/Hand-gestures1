prediction1 = ""
prediction2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (dataUri) {
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='" + dataUri + "'>";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xgBIV36Pl/model.json", modelLoaded);

function modelLoaded() {
    console.log("model has loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "the first prediction is " + prediction1;
    speakData2 = "and the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}

//speak();

function predict() {
    img=document.getElementById("capturedImage");
    classifier.classify(img.gotResult);
}

function gotResult(error,result){
    console.log(result);
}