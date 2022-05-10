export class Timer{
    static paused = 0;
    static running = 1;
    static normal = 'normal';
    static legendsActive = 'legendsActive';
    static spawnChance = {
        normal: [10, 20, 20, 25, 25],
        legendsActive: [20, 10, 20, 25, 25]
    }
    eventActive;
    time = 0;
    tickStart;
    state = Timer.paused;
    constructor(eventActive = Timer.normal)
    {
        this.eventActive = eventActive;
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
        this.state = Timer.running;
        this.tickStart = Date.now();
    }
    pause()
    {
        this.state = Timer.paused;
    }
    getState()
    {
        return this.state;
    }
    getTime()
    {
        return Math.floor(this.time / 1000);
    }
    getSpawnChance()
    {
        console.log((this.getTime() / 60) / 5);
        console.log(Timer.spawnChance);
        console.log(this.eventActive);
        return Timer.spawnChance[this.eventActive][Math.floor((this.getTime() / 60) / 5)];
    }
    async tick()
    {
        // console.log("tick1");
        if(this.state == Timer.running)
        {
            // console.log("tick counts");
            var current = Date.now();
            this.time += current - this.tickStart;
            this.tickStart = current;
        }
        // console.log("tick2");
    }
}
