let [seconds, minutes, hours] = [0, 0, 0];
const displaytime = document.getElementById('displayTime');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

var interval = null;

Timer = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    };
    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;

    displaytime.innerText = h + " : " + m + " : " + s;
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
});

pause.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    displaytime.innerHTML = "00 : 00 : 00";
});