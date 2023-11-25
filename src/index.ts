import './mock.ts'


import './style.css'


import "./pages/auth"


import './components/buttons/button.css'
import './components/inputs/input.css'
import './components/notify'
import './components/progress_bar'
import './components/dialogs'

document.addEventListener("DOMContentLoaded", () => {
    window.mp.trigger('DOMContentLoaded')
});