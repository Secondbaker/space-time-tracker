console.log("Test");
var elapsedTime = 0;
//modes
const Normal = 0;
const DistortionForming = 1;
const DistortionFormed = 2;
//toggle
var isBattling = false;

var mode = Normal;



var setup = function ()
{
    const timer = document.getElementById("timer");
    console.log(timer);

    const startDiv = document.querySelector("#start");
    const startButton = document.createElement('button');
    startButton.innerHTML = "Start";
    console.log(startButton);
    startButton.addEventListener("click", start);
    startDiv.appendChild(startButton);

    const distortionFormingDiv = document.querySelector("#distortion-forming");
    const distortionFormingButton = document.createElement('button');
    distortionFormingButton.innerHTML = "Distortion Forming";
    console.log(distortionFormingButton);
    distortionFormingButton.addEventListener("click", distortionForming);
    distortionFormingDiv.appendChild(distortionFormingButton);

    const distortionFormedDiv = document.querySelector("#distortion-formed");
    const distortionFormedButton = document.createElement('button');
    distortionFormedButton.innerHTML = "Distortion Formed";
    console.log(distortionFormedButton);
    distortionFormedButton.addEventListener("click", distortionFormed);
    distortionFormedDiv.appendChild(distortionFormedButton);

    const battleDiv = document.querySelector("#battle");
    const battleButton = document.createElement('button');
    battleButton.innerHTML = "Battle";
    console.log(battleButton);
    battleButton.addEventListener("click", battle);
    battleDiv.appendChild(battleButton);

    const battleEndDiv = document.querySelector("#battle-end");
    const battleEndButton = document.createElement('button');
    battleEndButton.innerHTML = "Battle End";
    console.log(battleEndButton);
    battleEndButton.addEventListener("click", battleEnd);
    battleEndDiv.appendChild(battleEndButton);

}

window.onload = setup;

var start = function ()
{
    mode = Normal;
    elapsedTime = 0;
    //console.log(startTime);
    //console.log(elapsedTime);

    main();
}

var distortionForming = function ()
{
    mode = DistortionForming;
    elapsedTime = 0;
}

var distortionFormed = function ()
{
    mode = DistortionFormed;
    elapsedTime = 0;
}

var battle = function ()
{
    isBattling = true;
}

var battleEnd = function ()
{
    isBattling = false;
}

var lastFrameTime;
window.main = function ()
{
    window.requestAnimationFrame(main);

    //time difference is in milliseconds, so /1000 and floor removes everything ast whole seconds
    currentFrameTime = Date.now();

    if(lastFrameTime != null)
    {
        deltaTime = currentFrameTime - lastFrameTime;
    }
    else
    {
        deltaTime = 0;
    }
    

    if(!isBattling)
    elapsedTime += deltaTime;

    timeDiff = Math.floor(elapsedTime/ 1000);

    if(mode == DistortionForming)
    {
        timeDiff = 60 - timeDiff;
    }
    else if(mode == DistortionFormed)
    {
        timeDiff = 240 - timeDiff;
    }

    minutes = Math.floor(timeDiff / 60);
    seconds = timeDiff % 60;
    
    timer.innerHTML = (minutes.toString().padStart(2, 0) + ":" + seconds.toString().padStart(2, 0));
    lastFrameTime = currentFrameTime;
}



