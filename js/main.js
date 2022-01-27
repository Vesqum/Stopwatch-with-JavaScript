const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const restBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const modalCloseBtn = document.querySelector('.close')

const changeColor = document.querySelector('.change-color')
const colors = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
const colorFour = document.querySelector('.four')

let countTime;
let minutes = 0;
let secounds = 0;
let timeArr = [];

let root = document.documentElement;


const handleStart = () => {

    clearInterval(countTime);

    countTime = setInterval(() => {

        if(secounds < 9) {
            secounds++
            stopwatch.textContent = `${minutes}:0${secounds}`
        } else if(secounds >= 9 && secounds < 59) {
            secounds++;
            stopwatch.textContent = `${minutes}:${secounds}`
        } else {
            minutes++;
            secounds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
        
    }, 100)
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
    
    if(stopwatch.textContent !== '0:00') {
        time.getElementsByClassName.visiblility = 'visible';
        timeArr.push(stopwatch.textContent)
        console.log(timeArr);
    }
    clearStuff();
    


}

const handleReset = () => {
    time.getElementsByClassName.visiblility = 'hidden';
    timeArr = [];
    clearStuff();
}

const clearStuff = () => {

    clearInterval(countTime);
    stopwatch.textContent = '0:00'
    timeList.textContent = '';
    secounds = 0;
    minutes = 0;
}


const showHistory = () => {
    
    timeList.textContent = ''
    let num = 0;

    timeArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
        
        timeList.appendChild(newTime)
        num++;
    })
}

const showModal = () => {
    
    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    };

    modalShadow.classList.toggle('modal-animation')
}


const showColors = () => {
    colors.classList.toggle('show-colors')
}


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
restBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);
changeColor.addEventListener('click', showColors)

colorOne.addEventListener('click',() => {
    root.style.setProperty('--first-color', '#FA1406')
})

colorTwo.addEventListener('click',() => {
    root.style.setProperty('--first-color', '#9edb2c')
})

colorThree.addEventListener('click',() => {
    root.style.setProperty('--first-color', '#1b96dd')
})

colorFour.addEventListener('click',() => {
    root.style.setProperty('--first-color', '#ebd831')
})