function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    audioClassifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dG3FzD1dE/model.json", modelLoaded);
}

function modelLoaded() {
    audioClassifier.classify(resultFunc);
}

function resultFunc(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}