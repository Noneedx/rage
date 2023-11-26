import './main.css'
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
    type: 3,
    title: 'ИНФОРМАЦИОННОЕ ДИАЛОГОВОЕ ОКНО',
    text: 'Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.Игровой проект представляет собой увлекательный квест с элементами RPG, где игроки могут путешествовать по разнообразным мирам, выполнять задания, сражаться с монстрами и развивать своего персонажа. В игре реализована уникальная система прокачки умений и навыков, позволяющая каждому игроку создать своего уникального героя. Игровой проект - это захватывающий экшн с элементами РПГ и стратегии, где игроку предстоит строить свою базу, создавать армию, исследовать технологии и сражаться с другими игроками за ресурсы и власть. Уникальный геймплей, современная графика и захватывающий сюжет не дадут вам скучать, а возможность играть с друзьями и объединяться в кланы сделает ваше прохождение еще интереснее.',
    columns: ['Название машины', 'Максимальная Скорость', 'Цена', 'Цена', 'Максимальная Скорость'],
    rows: [
        ['bullet', 300, '250$', '250$', 300],
        ['mark', 350, '300$', '250$', 300],
        ['bmw', 250, '400$', '250$', 300],
    ],
    buttons: ['КНОПКА 1', 'КНОПКА 2']
}

let tableTrNumber:number
let activatedTableTr:HTMLElement | undefined

function createDialog (data:IDialogData) {
    let dialogPage = document.getElementById('dialog-page')
    dialogPage.classList.remove('hidden')
    let dialogTitle = document.getElementsByClassName('dialog-header--title')
    dialogTitle[0].textContent = data.title

    let dialogText = document.getElementsByClassName('dialog-text')
    dialogText[0].textContent = data.text

    let dialogTable = document.getElementById('dialog-table') as HTMLTableElement
    let dialogInput = document.getElementsByClassName('dialog-input')

    let dialogButtonEsc = document.getElementById('dialog-button--closer')
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape'){
            alert('ТЫ ПИДАРАС!!!')
        }
    })

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

    let dialogTbody:HTMLTableElement = document.getElementById('dialog-tbody') as HTMLTableElement

    function createTableRows(data:IDialogData, tbody:HTMLTableElement) {
        for (let i = 0; i < data.rows.length; i++) {
            let row = data.rows[i]
            let tableTr = document.createElement('tr')
            tableTr.setAttribute('number', i.toString())
            for (let i = 0; typeof row !== "number" && i < row?.length; i++){
                let tableTd = document.createElement('td')
                tableTd.classList.add('dialog-table--text')
                tableTd.textContent = <string>row[i];

                tableTr.append(tableTd)
            }
            tableTr.addEventListener('click', ()=>{
                if (activatedTableTr != undefined){
                    activatedTableTr.style.backgroundColor = 'transparent'
                    const tdList = activatedTableTr.children
                    for (let i = 0; i < tdList.length; i++) {
                        let tdListHtmlElement = tdList[i] as HTMLElement
                        tdListHtmlElement.style.color = 'white'
                    }
                }
                activatedTableTr = tableTr
                tableTrNumber = Number(tableTr.getAttribute('number'))

                tableTr.style.backgroundColor = 'white'
                const tdList = tableTr.children
                for (let i = 0; i < tdList.length; i++) {
                    let tdListHtmlElement = tdList[i] as HTMLElement
                    tdListHtmlElement.style.color = 'black'
                }
            })
            dialogTbody.append(tableTr)
        }
        return dialogTbody
    }

    if (data.type === 0) {
        dialogTable.classList.add('hidden')
        dialogInput[0].classList.add('hidden')
    }

    if (data.type === 1) {
        dialogTable.classList.add('hidden')
        dialogInput[0].classList.remove('hidden')
    }

    if (data.type === 2) {
        dialogInput[0].classList.add('hidden')
        dialogTable.classList.remove('hidden', 'dialog-table--withoutThead')
        dialogTable.classList.add('dialog-table')
        let dialogTheadColumns = document.createElement('tr')
        for (let column of data.columns) {
            let dialogTheadColumn = document.createElement('th')
            dialogTheadColumn.classList.add('dialog-table--title')
            dialogTheadColumn.textContent = column
            dialogTheadColumns.append(dialogTheadColumn)
        }
        dialogThead.append(dialogTheadColumns)

        createTableRows(dataTest1, dialogTbody)

        dialogText[0].setAttribute('style',`width:${dialogTable.getBoundingClientRect().width}px`)
    }

    if (data.type === 3) {
        dialogInput[0].classList.add('hidden')
        dialogTable.classList.add('dialog-table--withoutThead')
        dialogTable.classList.remove('hidden', 'dialog-table')
        dialogThead.classList.add('hidden')


        createTableRows(dataTest1, dialogTbody)

        let dialogTableWidth = dialogTable.getBoundingClientRect().width

        dialogText[0].setAttribute('style',`width:${dialogTableWidth}px`)

        let firstTableTd = document.querySelector("#dialog-tbody tr:first-child td:first-child")
        let lastTableTd = document.querySelector("#dialog-tbody tr:first-child td:last-child")

        firstTableTd.classList.add('dialog-first-tableTd')
        lastTableTd.classList.add('dialog-second-tableTd')
    }

}

window.createDialog = window.createDialog || {};
createDialog(dataTest1)
// const data = [{
//     'Имя': 'Геннадий',
// },{},{}]
