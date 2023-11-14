import './main.css'
import dialogCloser from '../../assets/img/dialog-closer.svg'
import dialogBtnEnterIcon from '../../assets/img/dialog-enter-icon.svg'
import dialogBtnEscIcon from '../../assets/img/dialog-esc-icon.svg'

interface IDialogIndex {
    [key: string]: string;
}

const dialogTypes:IDialogIndex = {
    "0": 'info-dialog',
    "1": 'input-dialog',
    "2": 'defaultTable-dialog',
    "3": 'tableWithoutLabel-dialog',
}

interface IDialogData {
    type: number;
    title: string;
    text: string;
    columns: string[]
    rows: (string | number)[][]
    buttons: string[]
}

const dataTest1:IDialogData = {
    type: 1,
    title: 'ИНФОРМАЦИОННОЕ ДИАЛОГОВОЕ ОКНО',
    text: 'Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.',
    columns: ['Название машины', 'Максимальная Скорость', 'Цена'],
    rows: [
        ['bullet', 300, '250$'],
        ['bullet', 300, '250$'],
        ['bullet', 300, '250$'],
    ],
    buttons: ['КНОПКА 1', 'КНОПКА 2']
}

let dialogCloserIcon:HTMLImageElement = document.getElementById('dialogCloserIcon') as HTMLImageElement
dialogCloserIcon.src = dialogCloser

function createDialog (data:IDialogData) {
    let dialogTitle = document.getElementsByClassName('dialog-header--title')
    dialogTitle[0].textContent = data.title

    let dialogText = document.getElementsByClassName('dialog-text')
    dialogText[0].textContent = data.text

    let dialogTable = document.getElementsByClassName('dialog-table')

    let dialogInput = document.getElementsByClassName('dialog-input')

    let dialogButtonEnterText = document.getElementsByClassName('dialog-button--active-text')
    dialogButtonEnterText[0].textContent = data.buttons[0]

    let dialogButtonEscText = document.getElementsByClassName('dialog-button--closer-text')
    dialogButtonEscText[0].textContent = data.buttons[1]

    let dialogButtonEnterIcons = document.getElementsByClassName('dialog-button-enter--icon')
    let dialogButtonEnterIcon:HTMLImageElement = dialogButtonEnterIcons[0] as HTMLImageElement
    dialogButtonEnterIcon.src = dialogBtnEnterIcon

    let dialogButtonEscIcons = document.getElementsByClassName('dialog-button-esc--icon')
    let dialogButtonEscIcon:HTMLImageElement = dialogButtonEscIcons[0] as HTMLImageElement
    dialogButtonEscIcon.src = dialogBtnEscIcon

    if (data.type === 0) {
        dialogTable[0].classList.add('hidden')
        dialogInput[0].classList.add('hidden')
    }

    if (data.type === 1) {
        dialogTable[0].classList.add('hidden')
        dialogInput[0].classList.remove('hidden')
    }

    if (data.type === 2) {

    }

}


window.createDialog = window.createDialog || {};
createDialog(dataTest1)
// const data = [{
//     'Имя': 'Геннадий',
// },{},{}]


