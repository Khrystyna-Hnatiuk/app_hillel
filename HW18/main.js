
let minutesTimer = document.querySelector('.minutes')
let secondsTimer = document.querySelector('.seconds');

let totalTime = 85;
function updateTimer(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutesTimer.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsTimer.textContent = seconds < 10 ? '0' + seconds : seconds;

}


const countDown = setInterval(() => {

    if (totalTime<=0) {
        clearInterval(countDown)
        let stoppedInterval = document.createElement('h5');
        stoppedInterval.textContent = 'Таймер завершено';
        stoppedInterval.classList.add('stop--interval')
        document.body.appendChild(stoppedInterval);
        return;

    }
   totalTime--;
   updateTimer(totalTime)

}, 1000);

updateTimer(totalTime)