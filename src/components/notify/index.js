// зеленое - успешное выполнение
// желтое - предупреждение
// красное - ошибка
// синее - подсказка
import {circleProgressBar} from '/src/components/progress_bar'

let mainNotify = document.querySelector('.notify-el')
mainNotify.append(circleProgressBar)

function createNotify(type,text,time = '5s') {
    let trueNotify = document.createElement('div')
    trueNotify.classList.add('main-notify', 'true-notify')
    trueNotify.textContent = text
    // trueNotify.style.transitionDuration = time
    let warningNotify = document.createElement('div')
    warningNotify.classList.add('main-notify', 'warning-notify')
    let errorNotify = document.createElement('div')
    errorNotify.classList.add('main-notify', 'error-notify')
    let helpNotify = document.createElement('div')
    helpNotify.classList.add('main-notify', 'help-notify')
}
