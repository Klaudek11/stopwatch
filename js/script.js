let time = document.querySelector('.time');

let stopwatch = document.querySelector('.stopwatch');

const resetLap = document.querySelector('.reset-lap');
const startStop = document.querySelector('.start-stop');

const laps = document.querySelector('.laps');

// actual time
const actualTime = () => {
    let date = new Date();
    time.textContent = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${(
        '0' + date.getSeconds()
    ).slice(-2)}`;
};

setInterval(actualTime, 1000);

// stopwatch

let handleStart;

let hours = 0;
let minutes = 0;
let seconds = 0;

let lapCount = 1;

const startAndStop = () => {
    if (startStop.textContent === 'start') {
        // stopwatch function
        handleStart = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                minutes++;
                seconds = 0;
                if (minutes === 60) {
                    hours++;
                    minutes = 0;
                }
            }

            stopwatch.textContent = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(
                -2
            )}`;
        }, 1000);

        // btns change
        startStop.textContent = 'stop';
        startStop.style.backgroundColor = '#fe3a30';

        resetLap.textContent = 'lap';
        resetLap.style.backgroundColor = '#ea8a00';

        //
    } else if (startStop.textContent === 'stop') {
        //stop stopwatch
        clearInterval(handleStart);

        //btns change to primar version
        startStop.textContent = 'start';
        startStop.style.backgroundColor = '';

        resetLap.textContent = 'reset';
        resetLap.style.backgroundColor = '';
    }
};

const resetAndLap = () => {
    if (startStop.textContent === 'start') {
        //reset
        hours = 0;
        minutes = 0;
        seconds = 0;

        stopwatch.textContent = '00:00:00';

        lapCount = 1;

        laps.innerHTML = '';
    } else if (startStop.textContent === 'stop') {
        // laps
        let lap = document.createElement('li');
        lap.textContent = `Lap${lapCount} ${stopwatch.textContent}`;
        laps.appendChild(lap);

        lapCount++;
    }
};

startStop.addEventListener('click', startAndStop);
resetLap.addEventListener('click', resetAndLap);
