const paused = 0;
const running = 1;
export class Timer{
    time = 0;
    tickStart;
    state = paused;
    constructor()
    {
        this.run();
    }
    async run()
    {
        // console.log("run1");
        this.tick();
        // console.log("run2");

        window.requestAnimationFrame(() => this.run());
    }  
    start()
    {
        this.state = running;
        this.tickStart = Date.now();
    }
    pause()
    {
        this.state = paused;
    }
    getTime()
    {
        return this.time;
    }
    async tick()
    {
        // console.log("tick1");
        if(this.state == running)
        {
            console.log("tick counts");
            var current = Date.now();
            this.time += current - this.tickStart;
            this.tickStart = current;
        }
        // console.log("tick2");
    }
}
