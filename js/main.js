const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const restBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const changeColor = document.querySelector('.change-color')
const modal = document.querySelector('.modal-shadow')
const modalCloseBtn = document.querySelector('.close')

let countTime;
let minutes = 0;
let secounds = 0;

const handleStart = () => {

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



startBtn.addEventListener('click', handleStart)
