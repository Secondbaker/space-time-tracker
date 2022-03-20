console.log("Test");
var startTime = 0;
var elapsedTime = 0;



var setup = function ()
{
    const timer = document.getElementById("timer");
    console.log(timer);
    const startButton = document.querySelector("#start");
    
    console.log(startButton);
    startButton.addEventListener("click", start);


}

window.onload = setup;

var start = function ()
{
    //console.log("start");
    startTime = Date.now();
    elapsedTime = 0;
    //console.log(startTime);
    //console.log(elapsedTime);

    main();
}

var distortionForming = function ()
{
    startTime = Date.now();
}

window.main = function (mode)
{
    window.requestAnimationFrame(main);

    //time difference is in milliseconds, so /1000 and floor removes everything ast whole seconds
    if mode=
    timeDiff = Math.floor((Date.now() - startTime) / 1000);
    minutes = Math.floor(timeDiff / 60);
    seconds = timeDiff % 60;

    timer.innerHTML = (minutes.toString().padStart(2, 0) + ":" + seconds.toString().padStart(2, 0));


    
}



