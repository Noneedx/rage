// зеленое - успешное выполнение
// желтое - предупреждение
// красное - ошибка
// синее - подсказка
import circleProgressBar from ''


const template = `<svg>\t<circle cy=12 cx=12 r=10 fill=transparent stroke="white" stroke-opacity=".1" stroke-width="2"></circle>
\t<circle class="st0" cy=12 cx=-12 r=10 fill=transparent stroke="white" stroke-width="2" stroke-dasharray="100, 500" stroke-linecap="round" stroke-dashoffset=0></circle>
</svg>
`

// сделать notify-pages страницу поверх всего некликабельной размером с весь экран
// создать в ней элемент уведомления,
// внутри элемента уведомления создавать элемент свг через js

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
