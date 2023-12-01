import './inv.css'
import weightIcon from '../../assets/img/inv-weightIcon.svg'
import invDelIcon from '../../assets/img/inv-thrashIcon.svg'
import {makeLogger} from "ts-loader/dist/logger";

function createInv(){
    let invWeightIcon:HTMLImageElement = document.getElementById('inv-weightIcon') as HTMLImageElement
    invWeightIcon.src = weightIcon
    let invDeleteIcon:HTMLImageElement = document.getElementById('inv-deleteIcon') as HTMLImageElement
    invDeleteIcon.src = invDelIcon
    // let invItems:HTMLCollection = document.getElementById('inv-body') as HTMLCollection

    // for (const invItem of Array.from())

    for (let i = 0; i < 24; i++){
        let invItem:HTMLElement = document.createElement('div') as HTMLElement
        invItem.id = 'inv-item'
        invItem.draggable = true;
        // invItems.(invItem)

    }
    // console.log(invItems.length)
    // for(let i = 0; i < invItems.length; )

    // invItems.addEventListener('dragstart', (evt) => {
    //     console.log(111)
    // })
    //
    // invItems.addEventListener('dragstart', (evt) => {
    //
    // })

}

createInv()

