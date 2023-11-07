// зеленое - успешное выполнение
// желтое - предупреждение
// красное - ошибка
// синее - подсказка
import {createProgressBar,activateProgressBar} from '../progress_bar'
import './main.css'

let notifyPage = document.createElement('div')
notifyPage.classList.add('notify-page')
document.body.append(notifyPage)
let notifyCounter = 0;
let notifyQueue = [];
const notifyTypes = {
    0: 'true-notify',
    1: 'warning-notify',
    2: 'error-notify',
    3: 'help-notify',
}

function createNotify(type,text = 'Уведомление',time = 5) {

    if (notifyCounter === 4) {
        let deletedNotify = notifyQueue.shift()
       clearTimeout(deletedNotify.deleteTimeout)
       clearTimeout(deletedNotify.activateTimeout)
        deletedNotify.remove()
    } else notifyCounter+=1

    let notifyClass = notifyTypes[type]

    let notify = document.createElement('div')
    notify.classList.add('notify-el')

    let notifyBackground = document.createElement('div')
    notifyBackground.classList.add(notifyClass, 'notify-el--background')

    let notifyBar = document.createElement('div')
    notifyBar.classList.add(notifyClass, 'notify-el--bar')

    let notifyText = document.createElement('span')
    notifyText.classList.add('notify-el--text')
    notifyText.textContent = text

    let activatedProgressBar = createProgressBar()

    notify.append(notifyBackground,notifyBar,notifyText,activatedProgressBar)
    notifyPage.append(notify)

    function deleteNotify() {
        notify.remove()
        notifyCounter-=1
    }
    notify.deleteTimeout = setTimeout(deleteNotify, 1000 * time)
    notify.activateTimeout = setTimeout(() => {
        activateProgressBar(activatedProgressBar, time)
    }, 50)



    notifyQueue.push(notify)
    // let trueNotify = document.createElement('div')
    // trueNotify.classList.add('main-notify', 'true-notify')
    // trueNotify.textContent = text
    // trueNotify.style.transitionDuration = time
    // let warningNotify = document.createElement('div')
    // warningNotify.classList.add('main-notify', 'warning-notify')
    // let errorNotify = document.createElement('div')
    // errorNotify.classList.add('main-notify', 'error-notify')
    // let helpNotify = document.createElement('div')
    // helpNotify.classList.add('main-notify', 'help-notify')
}

window.createNotify = createNotify
window.activateProgressBar = activateProgressBar
