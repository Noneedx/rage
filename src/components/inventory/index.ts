import './inv.css'
import weightIcon from '../../assets/img/inv-weightIcon.svg'
import invDelIcon from '../../assets/img/inv-thrashIcon.svg'
import redWeightIcon from '../../assets/img/inv-redTrashIcon.svg'
import invElImg from '../../assets/img/inv-BoxImg.svg'


let dataArr = [
    {
        name: 'el',
        img: invElImg,
        type: 1,
        rarity: 'rare',
        amount: 2,
        weight: 20,
        interaction: true,
        price: '200'
    },
    {
        name: 'el',
        img: invElImg,
        type: 1,
        rarity: 'rare',
        amount: 2,
        weight: 20,
        interaction: true,
        price: '200'
    },
    {
        name: 'el',
        img: invElImg,
        type: 1,
        rarity: 'rare',
        amount: 2,
        weight: 20,
        interaction: true,
        price: '200'
    },
    {
        name: 'el',
        img: invElImg,
        type: 1,
        rarity: 'rare',
        amount: 2,
        weight: 20,
        interaction: true,
        price: '200'
    }
]

let invEl = {
    name: 'el',
    img: invElImg,
    type: 1,
    rarity: 'rare',
    amount: 2,
    weight: 20,
    interaction: true,
    price: '200'
}

let typeSLOT:boolean = true


function createInv() {
    let invWeightIcon: HTMLImageElement = document.getElementById('inv-weightIcon') as HTMLImageElement
    invWeightIcon.src = weightIcon
    let invDeleteIcon: HTMLImageElement = document.getElementById('inv-deleteIcon') as HTMLImageElement
    invDeleteIcon.src = invDelIcon
    let invItems = document.getElementById('inv-body') as HTMLDivElement | null // поле перетаскивания
    let invDeleteArea = document.getElementById('inv-deleteArea') as HTMLElement

    let invDeleteAreaText = document.getElementById('inv-deleteText') as HTMLElement

    let invItemImg:HTMLImageElement

    let activeElement: HTMLElement = null
    let copyInvItem: HTMLElement = null
    let currentElement: HTMLElement = null

    invDeleteArea.addEventListener('dragenter', (evt) => {
        console.log('dragenter')

        invDeleteArea.style.borderColor = '#C22D2D'
        invDeleteIcon.src = redWeightIcon
        invDeleteAreaText.style.color = '#C22D2D'
        invDeleteAreaText.style.opacity = '1'
    })

    invDeleteArea.addEventListener('dragover', (e) => {
        e.preventDefault()
        currentElement = e.target as HTMLElement
    })

    invDeleteArea.addEventListener('dragleave', () => {
        console.log('dragleave')
        invDeleteArea.style.borderColor = 'rgba(255, 255, 255, 0.10)'
        invDeleteIcon.src = invDelIcon
        invDeleteAreaText.style.color = '#FFF'
        invDeleteAreaText.style.opacity = '0.3'
    })

    document.addEventListener("drop", function (event) {
        event.preventDefault()

        // Если мы перемещаем элемент назад по очереди (налево)
        // Драг мы перемещаем перед дропом
        // А дроп мы должны поставить на место драга
        // Мы находим элемент после драга и вставляем перед ним
        const drag = activeElement
        const drop = currentElement
        const elementAfterDrag = drag.nextElementSibling

        if (drop.id == 'inv-deleteArea') {
            drag.textContent = ''
            drag.draggable = false
        }

        if(drop == drag.nextElementSibling) {
            invItems.insertBefore(drop, drag)
            return;
        }

        const isMoveable = drag !== currentElement &&
            currentElement.classList.contains(`inv-item`);

        if (!isMoveable) {
            console.log('123')
            return;
        }



        if(elementAfterDrag == undefined) {
            invItems.insertBefore(drag, drop)
            invItems.append(drop)
            return
        }

        invItems.insertBefore(drag, drop)
        invItems.insertBefore(drop, elementAfterDrag)

        invDeleteArea.style.borderColor = 'rgba(255, 255, 255, 0.10)'
        invDeleteIcon.src = invDelIcon
        invDeleteAreaText.style.color = '#FFF'
        invDeleteAreaText.style.opacity = '0.3'
    });

    if (invItems) {
        for (let i:number = 0; i < 24; i++) {
            let invItem = document.createElement('div') as HTMLElement | null
            invItem.classList.add('inv-item')
            invItem.draggable = true;
            invItemImg = document.createElement('img') as HTMLImageElement | null
            let invItemAmount = document.createElement('div') as HTMLElement | null
            invItemAmount.classList.add('inv-item--amount')
            invItemImg.classList.add('inv-item--img')
            invItemImg.src = invEl.img
            invItemAmount.textContent = `X${i}`
            invItem.append(invItemImg, invItemAmount)
            invItems.append(invItem)
        }
    }

    let myElems = document.querySelectorAll('.inv-item') // перетаскиваемые элементы

    myElems.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('selected')
            activeElement = invItems.querySelector('.selected') as HTMLElement // перемещаемый элемент
            activeElement.style.zIndex = String(1000);
        })
        draggable.addEventListener('dragend', () => {

            draggable.classList.remove('selected')
        })
    })

    invItems.addEventListener('dragover', (evt) => {
        evt.preventDefault()
        console.log('dragover')


        currentElement = evt.target as HTMLElement // элемент, над которым находится курсор

    })

}

createInv()

