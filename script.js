let btnStart = document.querySelector("#start");
let timer = document.querySelector("#pomodoro-time");


function funStart() {

    btnStart.textContent = "stop";

    setInterval(() => {
        setInterval(() => {
            let minutes = parseInt(timer.textContent.split(":")[0]);
            minutes--;

            if (minutes < 0) {
                clearInterval(timerId);
                return minutes;
            }
            return minutes;
        }, 60000);


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

btnStart.addEventListener('click', funStart());

//при клике на **stop** таймер останавливается, но **не сбрасывается**, текст на кнопке снова меняется на **start**