function Stopwatch() {
    //Private variables
    let duration = 0;
    let running = false;
    let startTime, endTime = null;

    //Public methods
    this.start = function() {
        if (running) {
            throw new Error('Stopwatch has already started');
        }

        running = true;

        startTime = new Date();
    };
    this.stop = function() {
        if(!running) {
            throw new Error('Stopwatch has already stopped');
        }

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
            duration = 0;
            running = false;
            startTime = null;
            endTime = null;
    };

    //Getter for giving the object a duration property which is read-only and shows the value of the private duration variable.
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const sw = new Stopwatch();