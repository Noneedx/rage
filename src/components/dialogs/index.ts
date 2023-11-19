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
    type: 2,
    title: 'ИНФОРМАЦИОННОЕ ДИАЛОГОВОЕ ОКНО',
    text: 'Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.',
    columns: ['Название машины', 'Максимальная Скорость', 'Цена'],
    rows: [
        ['bullet', 300, '250$'],
        ['mark', 350, '300$'],
        ['bmw', 250, '400$'],
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

    let dialogThead:HTMLElement = document.getElementById('dialog-table-thead') as HTMLElement

    let dialogTableRows = dialogTable[0].querySelectorAll('tr')

    let firstTableRow = dialogTableRows[1].querySelectorAll('td')

    let firstTableTd = firstTableRow[0]
    let secondTableTd = firstTableRow[firstTableRow.length-1]
    console.log(secondTableTd)

    if (data.type === 0) {
        dialogTable[0].classList.add('hidden')
        dialogInput[0].classList.add('hidden')
    }

    if (data.type === 1) {
        dialogTable[0].classList.add('hidden')
        dialogInput[0].classList.remove('hidden')
    }

    if (data.type === 2) {
        dialogInput[0].classList.add('hidden')
        dialogTable[0].classList.remove('hidden', 'dialog-table--withoutThead')
        firstTableTd.classList.remove('dialog-first-tableTd')
        secondTableTd.classList.remove('dialog-second-tableTd')
        for (let row of data.rows) {
            console.log(row)
            let tableTr = document.createElement('tr')

            for (let i = 0; typeof row !== "number" && i < row?.length; i++){
                let tableTd = document.createElement('td')
                tableTd.classList.add('dialog-table--text')
                tableTd.textContent = <string>row[i];

                tableTr.append(tableTd)
            }
            console.log(tableTr)
        }
    }

    if (data.type === 3) {
        const el = dialogTable[0]
        dialogInput[0].classList.add('hidden')
        el.classList.remove('hidden', 'dialog-table')
        el.classList.add('dialog-table--withoutThead')

        dialogThead.classList.add('hidden')

        firstTableTd.classList.add('dialog-first-tableTd')
        secondTableTd.classList.add('dialog-second-tableTd')
    }

}


window.createDialog = window.createDialog || {};
createDialog(dataTest1)
// const data = [{
//     'Имя': 'Геннадий',
// },{},{}]


