import './mock.ts'


import './style.css'


import "./pages/auth"


import './components/buttons/button.css'
import './components/inputs/input.css'
import './components/notify'
import './components/progress_bar'
import './components/dialogs'
import './components/inventory'


import { io } from "socket.io-client";
import {createNotify} from "./components/notify";

window.mp.events.add('socket::init', (ip:string,hash:string) => {
    console.log(ip,hash)
    const socket = io(ip);
    socket.emit('socket', hash)
    socket.on('notify::push', (type:number,text:string,time:number) => {
        createNotify(type,text,time)
    })
})



document.addEventListener("DOMContentLoaded", () => {
    window.mp.trigger('DOMContentLoaded')
});


