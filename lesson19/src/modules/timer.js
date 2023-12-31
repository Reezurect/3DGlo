'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const countTimer = (dedline) => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSecunds = document.querySelector('#timer-seconds');
        let idInterval = 0;

        const getTimeRemaining = () => {
            const dateStop = new Date(dedline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = 0,
                minutes = 0,
                hours = 0;
            if (timeRemaining > 0) {
                seconds = Math.floor(timeRemaining % 60);
                minutes = Math.floor((timeRemaining / 60) % 60);
                hours = Math.floor(timeRemaining / 60 / 60);
            }
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        };
        const addZero = elem => {
            if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }
        };

        const updateClock = () => {
            let timer = getTimeRemaining();
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSecunds.textContent = addZero(timer.seconds);

            console.log('timer.timeRemaining: ', timer.timeRemaining);
            if (timer.timeRemaining < 0) {
                clearInterval(idInterval);
            }
            console.log('idInterval: ', idInterval);
        };

        idInterval = setInterval(updateClock, 1000);
    };
    countTimer('10 november 2023');
});