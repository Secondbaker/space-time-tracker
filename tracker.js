import { Timer } from "./timer.js";

//modes
const Normal = 0;
const DistortionForming = 1;
const DistortionFormed = 2;

//toggle
var isBattling = false;

var mode = Normal;

var app;
var timer = new Timer();
var timerDiv;
var controls;

var setup = function () {
    timerDiv = document.getElementById("timer");
    console.log(timer);
    setTimeout(() => {  console.log(timer); }, 2000);


    controls = document.getElementById("controls");
    // console.log(controls);

    app = document.getElementById("app");
    app.addEventListener("click", tapped);
}

window.onload = setup;

var start = function () {
    mode = Normal;

    timer.start();

    main();
}

var pause = function () {
    timer.pause();
}

var distortionForming = function () {
    mode = DistortionForming;
    distortionFormingDiv.style.display = 'none';
    // elapsedTime = 0;
}

var distortionFormed = function () {
    mode = DistortionFormed;
    battleDiv.style.display = 'block';
    // elapsedTime = 0;
}

var battle = function () {
    battleDiv.style.display = 'none';
    battleEndDiv.style.display = 'block';
    isBattling = true;
}

var battleEnd = function () {
    battleDiv.style.display = 'block';
    battleEndDiv.style.display = 'none';
    isBattling = false;
}

var tapped = function () {
    console.log ("tapped");
    console.log(timer.getState());
    console.log(Timer.paused);
    if(timer.getState() == Timer.paused)
    {
        console.log("starting");
        start();
    }
    else
    {
        console.log("pausing");
        pause();
    }
    console.log(timer.getSpawnChance());
}

// var lastFrameTime;
window.main = function () {
    window.requestAnimationFrame(main);

    var minutes = Math.floor(timer.getTime() / 60);
    var seconds = timer.getTime() % 60;
    // console.log(timer.getTime());

    timerDiv.innerHTML = (minutes.toString().padStart(2, 0) + ":" + seconds.toString().padStart(2, 0));
}