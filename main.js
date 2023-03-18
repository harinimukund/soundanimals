function start_classification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    sound_model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7MclJ6p50/model.json", model_ready);
}

function model_ready() {
    sound_model.classify(get_results)
}

function get_results(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        sound_name = r[0].label;
        sound_accuracy = (r[0].confidence * 100).toFixed(2);

        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        document.getElementById("sound_name").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("sound_accuracy").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("sound_name").innerHTML = "I can hear " + sound_name;
        document.getElementById("sound_accuracy").innerHTML = "Accuracy:" + sound_accuracy + "%";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (sound_name == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (sound_name == "Rattle") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (sound_name == "Bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        } else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }

    }
}