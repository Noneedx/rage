import './inv.css'
import weightIcon from '../../assets/img/inv-weightIcon.svg'
import invDelIcon from '../../assets/img/inv-thrashIcon.svg'
import redWeightIcon from '../../assets/img/inv-redTrashIcon.svg'
import invElImg from '../../assets/img/inv-BoxImg.svg'

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


function createInv() {
    let invArr = []
    let invWeightIcon: HTMLImageElement = document.getElementById('inv-weightIcon') as HTMLImageElement
    invWeightIcon.src = weightIcon
    let invDeleteIcon: HTMLImageElement = document.getElementById('inv-deleteIcon') as HTMLImageElement
    invDeleteIcon.src = invDelIcon
    let invItems = document.getElementById('inv-body') as HTMLDivElement | null // поле перетаскивания
    let invDeleteArea = document.getElementById('inv-deleteArea') as HTMLElement

    let invDeleteAreaText = document.getElementById('inv-deleteText') as HTMLElement


    let dragged: HTMLElement = null
    let copyInvItem = null

    invDeleteArea.addEventListener('dragenter', () => {
        console.log('dragenter')
        invDeleteArea.style.borderColor = '#C22D2D'
        invDeleteIcon.src = redWeightIcon
        invDeleteAreaText.style.color = '#C22D2D'
        invDeleteAreaText.style.opacity = '1'
    })

    invDeleteArea.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    invDeleteArea.addEventListener('dragleave', () => {
        console.log('dragleave')
        invDeleteArea.style.borderColor = 'rgba(255, 255, 255, 0.10)'
        invDeleteIcon.src = invDelIcon
        invDeleteAreaText.style.color = '#FFF'
        invDeleteAreaText.style.opacity = '0.3'
    })

    document.addEventListener("drop", function (event) {
        console.log('drop')
        if (dragged) {
            dragged.textContent = ''
        }
        event.preventDefault()
        invDeleteArea.style.borderColor = 'rgba(255, 255, 255, 0.10)'
        invDeleteIcon.src = invDelIcon
        invDeleteAreaText.style.color = '#FFF'
        invDeleteAreaText.style.opacity = '0.3'
        console.log(event.target)
    });

    if (invItems) {
        for (let i = 0; i < 24; i++) {
            let invItem = document.createElement('div') as HTMLElement | null
            invItem.classList.add('inv-item')
            invItem.draggable = true;
            let invItemImg = document.createElement('img') as HTMLImageElement | null
            let invItemAmount = document.createElement('div') as HTMLElement | null
            invItemAmount.classList.add('inv-item--amount')
            invItemImg.classList.add('inv-item--img')
            invItemImg.src = invEl.img
            if (invItem) {
                invItem.style.zIndex = String(1000);
                invItem.style.position
            }
            // invItemAmount.textContent = `X${invEl.amount}`
            invItemAmount.textContent = `X${i}`
            invItem.append(invItemImg, invItemAmount)
            invItems.append(invItem)
        }
    }

    let myElems = document.querySelectorAll('.inv-item') // перетаскиваемые элементы

    myElems.forEach(draggable => {
        draggable.addEventListener('dragstart', (event) => {
            dragged = event.target as HTMLElement
            draggable.classList.add('selected')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('selected')
        })
    })

    invItems.addEventListener('dragenter', (evt)=>{
        copyInvItem = evt.target as HTMLElement
        console.log(copyInvItem)
    })

    invItems.addEventListener('dragover', (evt) => {

        console.log('dragover')

        const activeElement = invItems.querySelector('.selected')

        const currentElement = evt.target as HTMLElement

        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`inv-item`);

        if (!isMoveable) {
            return;
        }

        const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;
        invItems.insertBefore(activeElement, nextElement)
    })

}

createInv()

// я беру элемент, в этот момент (dragstart) создаётся его копия, я перетаскиваю копию элемента со такими же данными, если навожусь на другой элемент,
// то идёт проверка, этот элемент чем-то занят или пустой слот,
// если элемент занят и я решил отпустить перемещаемую копию элемента, то мне нужно просто поменять их местами (в данном кейсе стакать элементы не рассматривается)))
// чтобы поменять их местами, я должен тот элемент, который находится под моим переместить на место того элемента, копию которого я взял, а копию поместить в ту ячейку,
// где находился элемент под копией
