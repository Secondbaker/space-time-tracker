import { Timer } from "./timer.js";
// console.log("Test");

// var elapsedTime = 0;

//modes
const Normal = 0;
const DistortionForming = 1;
const DistortionFormed = 2;

//toggle
var isBattling = false;

var mode = Normal;
// var startDiv;
// var distortionFormingDiv;
// var distortionFormedDiv;
// var battleDiv;
// var battleEndDiv;

var app;
var timer = new Timer();
var timerDiv;
var controls;

var setup = function () {
    timerDiv = document.getElementById("timer");
    console.log(timer);
    setTimeout(() => {  console.log(timer); }, 2000);


    controls = document.getElementById("controls");
    console.log(controls);

    app = document.getElementById("app");
    app.addEventListener("click", tapped);

    // startDiv = document.querySelector("#start");
    // const startButton = document.createElement('button');
    // startButton.innerHTML = "Start";
    // console.log(startButton);
    // startButton.addEventListener("click", start);
    // startDiv.appendChild(startButton);

    // distortionFormingDiv = document.querySelector("#distortion-forming");
    // const distortionFormingButton = document.createElement('button');
    // distortionFormingButton.innerHTML = "Distortion Forming";
    // console.log(distortionFormingButton);
    // distortionFormingButton.addEventListener("click", distortionForming);
    // distortionFormingDiv.appendChild(distortionFormingButton);
    // distortionFormingDiv.style.display = 'none';

    // distortionFormedDiv = document.querySelector("#distortion-formed");
    // const distortionFormedButton = document.createElement('button');
    // distortionFormedButton.innerHTML = "Distortion Formed";
    // console.log(distortionFormedButton);
    // distortionFormedButton.addEventListener("click", distortionFormed);
    // distortionFormedDiv.appendChild(distortionFormedButton);
    // distortionFormedDiv.style.display = 'none';

    // battleDiv = document.querySelector("#battle");
    // const battleButton = document.createElement('button');
    // battleButton.innerHTML = "Battle";
    // console.log(battleButton);
    // battleButton.addEventListener("click", battle);
    // battleDiv.appendChild(battleButton);
    // battleDiv.style.display = 'none';

    // battleEndDiv = document.querySelector("#battle-end");
    // const battleEndButton = document.createElement('button');
    // battleEndButton.innerHTML = "Battle End";
    // console.log(battleEndButton);
    // battleEndButton.addEventListener("click", battleEnd);
    // battleEndDiv.appendChild(battleEndButton);
    // battleEndDiv.style.display = 'none';

    // main();

}

window.onload = setup;

var start = function () {
    mode = Normal;
    // elapsedTime = 0;
    //console.log(startTime);
    //console.log(elapsedTime);

    // startDiv.style.display = 'none';
    // distortionFormingDiv.style.display = 'block';

    app.classList.add("zero");
    console.log(app.classList);
    controls.classList.add("zero");

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
}

// var lastFrameTime;
window.main = function () {
    window.requestAnimationFrame(main);

    //time difference is in milliseconds, so /1000 and floor removes everything ast whole seconds
    // currentFrameTime = Date.now();

    // if (lastFrameTime != null) {
    //     deltaTime = currentFrameTime - lastFrameTime;
    // }
    // else {
    //     deltaTime = 0;
    // }


    // if (!isBattling)
    //     elapsedTime += deltaTime;

    // timeDiff = Math.floor(elapsedTime / 1000);

    // if (mode == DistortionForming) {
    //     timeDiff = 60 - timeDiff;
    //     if (timeDiff <= 0) {
    //         distortionFormed();
    //     }
    // }
    // else if (mode == DistortionFormed) {
    //     timeDiff = 240 - timeDiff;
    // }

    var minutes = Math.floor(timer.getTime() / 60);
    var seconds = timer.getTime() % 60;
    console.log(timer.getTime());

    timerDiv.innerHTML = (minutes.toString().padStart(2, 0) + ":" + seconds.toString().padStart(2, 0));
    // lastFrameTime = currentFrameTime;
}