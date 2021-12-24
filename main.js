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
        R = Math.floor(Math.random() * 255) + 1;
        G = Math.floor(Math.random() * 255) + 1;
        B = Math.floor(Math.random() * 255) + 1;
        RGB = "rgb(" + R + ", " + G + ", " + B + ")";
        Accuracy = (results[0].confidence * 100).toFixed(2) + "%";
        topResult = results[0].label;

        document.getElementById("resultLabel").innerHTML = "I can hear - " + topResult;
        document.getElementById("accuracyLabel").innerHTML = Accuracy;
        document.getElementById("resultLabel").style.color = RGB;
        document.getElementById("accuracyLabel").style.color = RGB;

        resultImage = document.getElementById("resultImage");
        if (topResult == "Barking") {
            resultImage.src = "barking.gif";
        } else if (topResult == "Meowing") {
            resultImage.src == "meowing.gif";
        }
    }
}