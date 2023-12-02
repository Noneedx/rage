import './inv.css'
import weightIcon from '../../assets/img/inv-weightIcon.svg'
import invDelIcon from '../../assets/img/inv-thrashIcon.svg'
import redWeightIcon from '../../assets/img/inv-redTrashIcon.svg'

function createInv() {
    let invWeightIcon: HTMLImageElement = document.getElementById('inv-weightIcon') as HTMLImageElement
    invWeightIcon.src = weightIcon
    let invDeleteIcon: HTMLImageElement = document.getElementById('inv-deleteIcon') as HTMLImageElement
    invDeleteIcon.src = invDelIcon
    let invItems = document.getElementById('inv-body') as HTMLDivElement | null // поле перетаскивания
    let invDeleteArea = document.getElementById('inv-deleteArea') as HTMLElement

    let invDeleteAreaText = document.getElementById('inv-deleteText') as HTMLElement


    let dragged:HTMLElement = null


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

    invDeleteArea.addEventListener('dragleave',()=>{
        console.log('dragleave')
        invDeleteArea.style.borderColor = 'rgba(255, 255, 255, 0.10)'
        invDeleteIcon.src = invDelIcon
        invDeleteAreaText.style.color = '#FFF'
        invDeleteAreaText.style.opacity = '0.3'
    })

    document.addEventListener("drop", function(event) {
        if (dragged){
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
            if (invItem) {
                invItem.classList.add('inv-item')
                invItem.textContent = String(i);
                invItem.draggable = true;
                invItem.style.zIndex = String(1000);
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

    }

    invItems.addEventListener('dragover', (evt) => {

        const activeElement = invItems.querySelector('.selected')

        const currentElement = evt.target as HTMLElement

        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`inv-item`);

        if (!isMoveable) {
            return;
        }

        const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;

        invItems.insertBefore(activeElement,nextElement)
    })

}

createInv()

