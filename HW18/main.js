// Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

// let timerText = document.getElementsByTagName('h1');
let minutesTimer = document.querySelector('.minutes')
let secondsTimer = document.querySelector('.seconds');

    let minute = parseInt(minutesTimer.textContent);
    let seconds = parseInt(secondsTimer.textContent)

const countDown = setInterval(() => {



    if (minute === 0 && seconds === 0) {
        clearInterval(countDown)
        let stoppedInterval = document.createElement('h5');
        stoppedInterval.textContent = 'Таймер завершено';
        stoppedInterval.classList.add('stop--interval')
        document.body.appendChild(stoppedInterval)
        return;

    }
    if (seconds > 0) {
        seconds--;
    }
    else if (minute > 0) {
        minute--;
        seconds = 59
    }


    minutesTimer.textContent = minute < 10 ? "0" + minute : minute;
    secondsTimer.textContent = seconds < 10 ? "0" + seconds : seconds;
}, 1000);