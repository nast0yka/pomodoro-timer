let btnStart = document.querySelector("#start");
let timer = document.querySelector("#pomodoro-time");

let timerId;

btnStart.addEventListener("click", () => {
    if (btnStart.textContent === "start") {
        btnStart.textContent = "stop";
        timerId = setInterval(() => {

            let seconds = parseInt(timer.textContent.split(":")[1]);
            seconds--;
            let minutes = parseInt(timer.textContent.split(":")[0]);
            minutes--;

            timer.textContent = `${minutes}:${seconds}`;

            if (seconds <= 9) {
                timer.textContent = `${minutes}:0${seconds}`;
            }
            if (seconds <= 0) {
                return seconds = 60;
            }
            if (minutes < 0) {
                clearInterval(timerID);
                return minutes;
            }
            return minutes;
            if (minutes === 0 || seconds === 0) {
                timer.textContent = `25:00`;
                btnStart.textContent = "start"
            }

        }, 1000);
    }
    if (btnStart.textContent === "stop") {
        clearInterval(timerId);
        btnStart.textContent = "start";
        return timer;
    };

});