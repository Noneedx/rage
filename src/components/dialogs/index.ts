import './main.css'
import dialogCloser from '../../assets/img/dialog-closer.svg'


let dialogCloserIcon:HTMLImageElement = document.getElementById('dialogCloserIcon') as HTMLImageElement
dialogCloserIcon.src = dialogCloser

function createDialog (type = '', title = 'ИНФОРМАЦИОННОЕ ДИАЛОГОВОЕ ОКНО', text:string, tableValues:object) {
    let dialogTitle = document.getElementsByClassName('dialog-header--title')
    dialogTitle[0].textContent = title

    let dialogText = document.getElementsByClassName('dialog-text')
    dialogText[0].textContent = text

}

let dialogTitle = document.getElementsByClassName('dialog-header--title')
console.log(dialogTitle)

window.createDialog = window.createDialog || {};
// const data = [{
//     'Имя': 'Геннадий',
// },{},{}]

const data = {
    columns: ['Название машины', 'Максимальная Скорость', 'Цена'],
    rows: [
        ['bullet', 300, '250$'],
        ['bullet', 300, '250$'],
        ['bullet', 300, '250$'],
    ]
}
