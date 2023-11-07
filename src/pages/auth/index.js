import passwordShow from './../../assets/img/password-show-icon.svg'
import './main.css'
let pageWrapper

let logo, logoText

let authTitle

let authLoginInput

let authPasswordInput

let authPasswordArea

let passwordCheckboxArea

let passwordCheckbox

let passwordCheckboxText

let authButton

let registrationButton

let registrationTitle

let registrationInputLogin

let registrationPasswordArea

let registrationPasswordInput

let regPassIcon

let confirmRegistrationPasswordArea

let confirmRegistrationPasswordInput

let regPassConfirmIcon

let regMailInput

let regGenderSwitcher

let maleGenderItem, maleGenderText, maleGenderIcon

let femaleGenderItem, femaleGenderText, femaleGenderIcon

let createAccButton

let userHaveAccBtn

function createPasswordShowIcon() {
    const passwordShowIcon = document.createElement('img')
    passwordShowIcon.src = passwordShow
    passwordShowIcon.alt = 'password-show-icon'
    passwordShowIcon.classList.add('password-control')
    return passwordShowIcon
}

function onClickPasswordShow(input) {
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
    return false;
}

function showLoginPage () {
    pageWrapper = document.createElement('div')
    pageWrapper.classList.add('page-wrapper')
    document.body.append(pageWrapper)

    logo = document.createElement('div')
    logoText = document.createElement('div')
    logoText.textContent = 'CATCH RPG'
    logoText.classList.add('logo-text')
    logo.classList.add('logo-auth')
    logo.append(logoText)

    authTitle = document.createElement('div')
    authTitle.classList.add('authorization-title')
    authTitle.textContent = 'Авторизация'

    authLoginInput = document.createElement('input');
    authLoginInput.classList.add('input-login', 'input')
    authLoginInput.type = 'text';
    authLoginInput.placeholder = 'Введите логин'

    authPasswordInput = document.createElement('input');
    authPasswordInput.classList.add('input-password', 'input')
    authPasswordInput.id = 'input-password'
    authPasswordInput.type = 'password'
    authPasswordInput.placeholder = 'Введите пароль'

    // иконка глазика



    let authPasswordShow = createPasswordShowIcon()

    authPasswordArea = document.createElement('div')
    authPasswordArea.classList.add('authorization-password-area')
    authPasswordArea.append(authPasswordInput, authPasswordShow)

    passwordCheckboxArea = document.createElement('div')
    passwordCheckboxArea.classList.add('auth-pass-checkbox')

    passwordCheckbox = document.createElement('input')
    passwordCheckbox.classList.add('my-checkbox')
    passwordCheckbox.type = 'checkbox'
    passwordCheckbox.id = 'checkbox'

    passwordCheckboxText = document.createElement('label')
    passwordCheckboxText.htmlFor = 'checkbox'
    passwordCheckboxText.textContent = 'Запомнить меня'

    passwordCheckboxArea.append(passwordCheckbox, passwordCheckboxText)

    authButton = document.createElement('button')
    authButton.textContent = 'Войти'
    authButton.classList.add('login-button', 'primary-button', 'btn')

    registrationButton = document.createElement('button')
    registrationButton.textContent = 'Регистрация'
    registrationButton.classList.add('registration-button', 'btn', 'secondary-button')

    // функция показать/скрыть пароль

    authPasswordShow.addEventListener('click', () => {
        onClickPasswordShow(authPasswordInput)
    })

    // ОКНО РЕГИСТРАЦИИ !!!!!!!!!!!!!!!!!!!!!!!!!

    registrationTitle = document.createElement('div')
    registrationTitle.classList.add('authorization-title')
    registrationTitle.textContent = 'РЕГИСТРАЦИЯ'

    registrationInputLogin = document.createElement('input')
    registrationInputLogin.placeholder = 'Введите логин'
    registrationInputLogin.classList.add('input', 'input-login')

    registrationPasswordArea = document.createElement('div')
    registrationPasswordArea.id = 'input-password'
    registrationPasswordArea.classList.add('registration-password-area')

    registrationPasswordInput = document.createElement('input');
    registrationPasswordInput.placeholder = 'Введите пароль'
    registrationPasswordInput.classList.add('input-password', 'input', 'reg-password')

    regPassIcon = createPasswordShowIcon()
    registrationPasswordArea.append(registrationPasswordInput, regPassIcon)

    confirmRegistrationPasswordArea = document.createElement('div')
    confirmRegistrationPasswordArea.id = 'input-password'
    confirmRegistrationPasswordArea.classList.add('registration-password-area')

    regPassIcon.addEventListener('click', () => {
        onClickPasswordShow(registrationPasswordInput)
    })

    confirmRegistrationPasswordInput = document.createElement('input');
    confirmRegistrationPasswordInput.placeholder = 'Повторите пароль'
    confirmRegistrationPasswordInput.classList.add('input-password', 'input')

    regPassConfirmIcon = createPasswordShowIcon()
    confirmRegistrationPasswordArea.append(confirmRegistrationPasswordInput,regPassConfirmIcon )

    regPassConfirmIcon.addEventListener('click', () => {
        onClickPasswordShow(confirmRegistrationPasswordInput)
    })

    regMailInput = document.createElement('input')
    regMailInput.classList.add('reg-mail-input')
    regMailInput.placeholder = 'Электронная почта'
    regMailInput.classList.add('input')

    regGenderSwitcher = document.createElement('div')
    regGenderSwitcher.classList.add('reg-gender-switcher')

    maleGenderItem = document.createElement('div')
    maleGenderItem.classList.add('gender-item')
    maleGenderText = document.createElement('div')
    maleGenderText.classList.add('gender-item-text')
    maleGenderText.textContent = 'МУЖЧИНА'
    maleGenderIcon = document.createElement('div')
    maleGenderIcon.classList.add('male-gender-item-icon', 'gender-item-icon' )

    maleGenderItem.append(maleGenderText, maleGenderIcon)

    femaleGenderItem = document.createElement('div')
    femaleGenderItem.classList.add('gender-item')
    femaleGenderText = document.createElement('div')
    femaleGenderText.classList.add('gender-item-text')
    femaleGenderText.textContent = 'ЖЕНЩИНА'
    femaleGenderIcon = document.createElement('div')
    femaleGenderIcon.classList.add('female-gender-item-icon', 'gender-item-icon' )

    regGenderSwitcher.append(maleGenderItem, femaleGenderItem)

    createAccButton = document.createElement('button')
    createAccButton.classList.add('primary-button', 'btn', 'create-acc-btn')
    createAccButton.textContent = 'СОЗДАТЬ АККАУНТ'
    femaleGenderItem.append(femaleGenderText, femaleGenderIcon)


    userHaveAccBtn = document.createElement('button')
    userHaveAccBtn.classList.add('user-haveacc-btn')
    userHaveAccBtn.textContent = 'У МЕНЯ ЕСТЬ АККАУНТ'

    pageWrapper.append(
        logo,
        authTitle,
        authLoginInput,
        authPasswordArea,
        passwordCheckboxArea,
        authButton,
        registrationButton)

    registrationButton.addEventListener('click', onClickRegistrationButton)
}

function onClickRegistrationButton () {
    authTitle.classList.add('hidden')
    authLoginInput.classList.add('hidden')
    authPasswordArea.classList.add('hidden')
    passwordCheckboxArea.classList.add('hidden')
    registrationButton.classList.add('hidden')
    authButton.classList.add('hidden')
    logo.classList.remove('logo-auth')
    logo.classList.add('logo-reg')

    pageWrapper.append(registrationTitle)
    pageWrapper.append(registrationInputLogin)
    pageWrapper.append(registrationPasswordArea)
    pageWrapper.append(confirmRegistrationPasswordArea)
    pageWrapper.append(regMailInput)
    pageWrapper.append(regGenderSwitcher)
    pageWrapper.append(createAccButton)
    pageWrapper.append(userHaveAccBtn)
}

window.showLoginPage = showLoginPage

// вынести авторизацию в отдельную страницу-блок,
// при вызове функции closeLoginPage удалять этот блок и все ивент-листенеры

function closeLoginPage () {
    pageWrapper.remove()
    registrationButton.removeEventListener('click', onClickRegistrationButton)

}

window.closeLoginPage = closeLoginPage

// регулярка для проверки логина
const loginRegex = /[0-9a-zA-Z$^\-_]{4,24}/
// регулярка для проверки пароля
const passwordRegex = /[0-9a-zA-Z!@#$%^&*\-_]{6,36}/

// доделать регулярку https://u-next.com/blogs/java/what-is-password-validation-in-javascript-beginners-guide/
// добавить регулярку чтобы работало и на авторизацию
// менять MainNotification в зависимости, что не так с логином или паролем

// registrationCheckButton.addEventListener('click', () => {
//   let UserLogin = registrationInput.value
//   let UserPassword = registrationPassword.value
//   console.log(loginRegex.test(UserLogin))
//   console.log(passwordRegex.test(UserPassword))
//   if (!UserLogin || loginRegex.test(UserLogin) === false) {
//     clearTimeout(timer)
//     timer = setTimeout(clearMainNotification, 3000)
//     MainNotification.classList.remove('hidden')
//     MainNotification.textContent = 'Введите логин'
//     registrationInput.value = ''
//     return
//   }
//   if (!UserPassword || passwordRegex.test(UserPassword) === false) {
//     clearTimeout(timer)
//     timer = setTimeout(clearMainNotification, 3000)
//     MainNotification.classList.remove('hidden')
//     MainNotification.textContent = 'Введите пароль'
//     registrationPassword.value = ''
//     return
//   }
//   let data = {
//     login: UserLogin,
//     password: UserPassword,
//   }
//   const json = JSON.stringify(data)
//   console.log(json)
//   console.log(data)
//   // mp.trigger("login", json)
//   inputPassword.classList.remove('hidden')
//   inputLogin.classList.remove('hidden')
//   registrationButton.classList.remove('hidden')
//   authorizationButton.classList.remove('hidden')
//
//   declineButton.classList.add('hidden')
//   registrationCheckButton.classList.add('hidden')
//   registrationText.classList.add('hidden')
//   registrationInput.classList.add('hidden')
//   registrationPassword.classList.add('hidden')
// })
//
// registrationButton.addEventListener('click', () => {
//   inputLogin.classList.add('hidden')
//   inputPassword.classList.add('hidden')
//   authorizationButton.classList.add('hidden')
//   registrationButton.classList.add('hidden')
//
//   declineButton.classList.remove('hidden')
//   registrationInput.classList.remove('hidden')
//   registrationText.classList.remove('hidden')
//   registrationPassword.classList.remove('hidden')
//   registrationCheckButton.classList.remove('hidden')
//
//
//   pageWrapper.prepend(registrationPassword)
//   pageWrapper.prepend(registrationInput)
//   pageWrapper.prepend(registrationText)
// })
//
// declineButton.addEventListener('click', () => {
//   registrationInput.classList.add('hidden')
//   registrationPassword.classList.add('hidden')
//   registrationText.classList.add('hidden')
//   declineButton.classList.add('hidden')
//   registrationCheckButton.classList.add('hidden')
//
//   registrationButton.classList.remove('hidden')
//   authorizationButton.classList.remove('hidden')
//   inputLogin.classList.remove('hidden')
//   inputPassword.classList.remove('hidden')
// })
//
// let timer;
//
// authorizationButton.addEventListener('click', () => {
//   if (!inputLogin.value) {
//     clearTimeout(timer)
//     timer = setTimeout(clearMainNotification, 3000)
//     MainNotification.classList.remove('hidden')
//     MainNotification.textContent = 'Введите логин'
//     return
//   }
//   if (!inputPassword.value) {
//     clearTimeout(timer)
//     timer = setTimeout(clearMainNotification, 3000)
//     MainNotification.classList.remove('hidden')
//     MainNotification.textContent = 'Введите пароль'
//     return
//   }
//   inputLogin.classList.remove('hidden')
//   inputPassword.classList.remove('hidden')
//   let data = {
//     login: inputLogin.value,
//     password: inputPassword.value,
//   }
//   const json = JSON.stringify(data)
//   console.log(json)
//   console.log(data)
//   // mp.trigger("login", json)
// })
