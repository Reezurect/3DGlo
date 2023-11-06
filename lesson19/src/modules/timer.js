'use strict'

const timer = (deadLine) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = setInterval(function () {
        let getTime = getTimeRemaining();

        if (getTime.hours < 10) getTime.hours = '0' + getTime.hours
        if (getTime.minutes < 10) getTime.minutes = '0' + getTime.minutes
        if (getTime.seconds < 10) getTime.seconds = '0' + getTime.seconds

        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining <= 0) {
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
            clearInterval(updateClock);
        }
    }, 1000);

};

export default timer;