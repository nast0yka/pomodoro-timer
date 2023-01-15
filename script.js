let btnStart = document.querySelector("#start");
let timer = document.querySelector("#pomodoro-time");

let timerId;

btnStart.addEventListener("click", () => {
    if (btnStart.textContent === "start") {
        btnStart.textContent = "stop";
        let seconds = parseInt(timer.textContent.split(":")[1]);
        let minutes = parseInt(timer.textContent.split(":")[0]);
        timerId = setInterval(() => {

            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0 && seconds === 0) {
                minutes--;
                seconds = 59;
            } else if (minutes === 0 || seconds === 0) {
                timer.textContent = `25:00`;
                btnStart.textContent = "start";
                clearInterval(timerId);
            }

            function format(val) {
                if (val < 10) {
                    return `0${val}`;
                }
                return val;
            }
            timer.textContent = `${format(minutes)}:${format(seconds)}`;

        }, 1000);
    } else {
        clearInterval(timerId);
        btnStart.textContent = "start";
    };

});