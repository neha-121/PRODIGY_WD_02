let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimes = document.getElementById('lap-times');

function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(updateTime, 10);
}

function pauseStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapTimes.innerHTML = '';
}

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    document.getElementById('milliseconds').innerText = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds(time) {
    return time < 100 ? '0' + (time < 10 ? '0' + time : time) : time;
}

function addLap() {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    const li = document.createElement('li');
    li.innerText = `Lap ${lapTimes.childElementCount + 1}: ${lapTime}`;
    lapTimes.appendChild(li);
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', addLap);
