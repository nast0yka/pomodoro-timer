let btnStart = document.querySelector("#start");
let timer = document.querySelector("#pomodoro-time");


function funStart() {

    if (btnStart === "start") {
        btnStart.textContent = "stop";

        let timerID = setInterval(() => {
            let timerID2 = setInterval(() => {
                let minutes = parseInt(timer.textContent.split(":")[0]);
                minutes--;

                if (minutes < 0) {
                    clearInterval(timerID2);
                    return minutes;
                }
                return minutes;
            }, 5000);

            let seconds = parseInt(timer.textContent.split(":")[1]);
            seconds--;

            timer.textContent = `${minutes}:${seconds}`;

            if (seconds <= 9) {
                timer.textContent = `${minutes}:0${seconds}`;
            }

            if (seconds <= 0) {
                return seconds = 60;
            }

        }, 1000);
    }

    if (btnStart === "stop") {
        clearInterval(timerID);
        return timer;
    }
    if (minutes === 0 || seconds === 0) {
        timer.textContent = `25:00`;
        btnStart.textContent = "start"
    }


}

btnStart.addEventListener('click', funStart(timer));