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
let notifyQueue:Array<notifyEl> = [];

interface INotifyIndex {
    [key: string]: string;
}



const notifyTypes:INotifyIndex = {
    "0": 'true-notify',
    "1": 'warning-notify',
    "2": 'error-notify',
    "3": 'help-notify',
}


interface notifyEl extends HTMLDivElement{
    deleteTimeout:number,
    activateTimeout:number,
}

function createNotify(type:number,text = 'Уведомление',time = 5) {

    if (notifyCounter === 4) {
        let deletedNotify:notifyEl = notifyQueue.shift()
       clearTimeout(deletedNotify.deleteTimeout)
       clearTimeout(deletedNotify.activateTimeout)
        deletedNotify.remove()
    } else notifyCounter+=1

    let notifyClass:string = notifyTypes[type]

    let notify:notifyEl = document.createElement('div') as notifyEl
    notify.classList.add('notify-el')

    let notifyBackground = document.createElement("div")
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
        notifyQueue.pop()
        notifyCounter-=1
    }
    notify.deleteTimeout = setTimeout(deleteNotify, 1000 * time)
    notify.activateTimeout = setTimeout(() => {
        activateProgressBar(activatedProgressBar, time)
    }, 50)



    notifyQueue.push(notify)
}

window.createNotify = createNotify
window.activateProgressBar = activateProgressBar

// mp.events.add('notify:show', (type:number,text:string,time:number) => {
//     createNotify(type,text,time)
// })
