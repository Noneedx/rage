import passwordShow from './../../assets/img/password-show-icon.svg'
import './main.css'
import {createNotify} from "../../components/notify";

let pageWrapper:HTMLElement | undefined

let logo:HTMLElement | undefined, logoText:HTMLElement | undefined

let authTitle:HTMLElement | undefined

let authLoginInput:HTMLInputElement | undefined

let authPasswordInput:HTMLInputElement | undefined

let authPasswordArea:HTMLElement | undefined

let passwordCheckboxArea:HTMLElement | undefined

let passwordCheckbox:HTMLInputElement | undefined

let passwordCheckboxText:HTMLLabelElement | undefined

let authButton:HTMLElement | undefined

let registrationButton:HTMLElement

let registrationTitle:HTMLElement | undefined

let registrationInputLogin:HTMLInputElement | undefined

let registrationPasswordArea:HTMLElement | undefined

let registrationPasswordInput:HTMLInputElement | undefined

let regPassIcon:HTMLElement | undefined

let confirmRegistrationPasswordArea:HTMLElement | undefined

let confirmRegistrationPasswordInput:HTMLInputElement | undefined

let regPassConfirmIcon:HTMLElement | undefined

let regMailInput:HTMLInputElement | undefined

let regGenderSwitcher:HTMLElement | undefined

let maleGenderItem:HTMLElement | undefined, maleGenderText:HTMLElement | undefined, maleGenderIcon:HTMLElement | undefined

let femaleGenderItem:HTMLElement | undefined, femaleGenderText:HTMLElement | undefined, femaleGenderIcon:HTMLElement | undefined

let createAccButton:HTMLElement | undefined

let userHaveAccBtn:HTMLElement | undefined

let genderStatus:boolean | undefined | null = null

let sexValue: boolean;

function createPasswordShowIcon() {
    const passwordShowIcon = document.createElement('img')
    passwordShowIcon.src = passwordShow
    passwordShowIcon.alt = 'password-show-icon'
    passwordShowIcon.classList.add('password-control')
    return passwordShowIcon
}

function onClickPasswordShow(input:HTMLInputElement) {
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
    return false;
}

function showLoginPage(remember:boolean) {
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

    if (remember) {
        passwordCheckbox.checked = true
    }

    passwordCheckboxArea.append(passwordCheckbox, passwordCheckboxText)

    authButton = document.createElement('button')
    authButton.textContent = 'Войти'
    authButton.classList.add('login-button', 'primary-button', 'btn')

    function onClickAuthButton() {
        let authUserLogin:string = authLoginInput ? authLoginInput.value : ''
        let authUserPassword:string = authPasswordInput ? authPasswordInput.value : ''
        if (!authUserLogin) {
            createNotify(2, 'Заполните логин',5)
            if ("value" in registrationInputLogin) {
                registrationInputLogin.value = ''
            }
            return
        }
        if (!authUserPassword) {
            createNotify(2, 'Заполните пароль',5)
            if ("value" in registrationPasswordInput) {
                registrationPasswordInput.value = ''
            }
            return
        }
        if ("checked" in passwordCheckbox) {
            window.mp.trigger('auth::input', JSON.stringify({
                login: authUserLogin,
                password: authUserPassword,
                remember: passwordCheckbox.checked,
            }))
        }
    }

    authButton.addEventListener('click', onClickAuthButton)

    registrationButton = document.createElement('button')
    registrationButton.textContent = 'Регистрация'
    registrationButton.classList.add('registration-button', 'btn', 'secondary-button')

    // функция показать/скрыть пароль

    authPasswordShow.addEventListener('click', () => {
        onClickPasswordShow(authPasswordInput as HTMLInputElement)
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
        onClickPasswordShow(registrationPasswordInput as HTMLInputElement)
    })

    confirmRegistrationPasswordInput = document.createElement('input');
    confirmRegistrationPasswordInput.placeholder = 'Повторите пароль'
    confirmRegistrationPasswordInput.classList.add('input-password', 'input')

    regPassConfirmIcon = createPasswordShowIcon()
    confirmRegistrationPasswordArea.append(confirmRegistrationPasswordInput, regPassConfirmIcon)

    regPassConfirmIcon.addEventListener('click', () => {
        onClickPasswordShow(confirmRegistrationPasswordInput as HTMLInputElement)
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
    maleGenderIcon.classList.add('male-gender-item-icon', 'gender-item-icon')

    maleGenderItem.addEventListener('click', () => {
        if ("classList" in maleGenderItem) {
            maleGenderItem.classList.add('gender-active')
        }
        if ("classList" in femaleGenderItem) {
            femaleGenderItem.classList.remove('gender-active')
        }
        // maleGenderItem.classList.remove('gender-item')
        genderStatus = true;
        sexValue = true
    })

    maleGenderItem.append(maleGenderText, maleGenderIcon)

    femaleGenderItem = document.createElement('div')
    femaleGenderItem.classList.add('gender-item')
    femaleGenderText = document.createElement('div')
    femaleGenderText.classList.add('gender-item-text')
    femaleGenderText.textContent = 'ЖЕНЩИНА'
    femaleGenderIcon = document.createElement('div')
    femaleGenderIcon.classList.add('female-gender-item-icon', 'gender-item-icon')

    femaleGenderItem.addEventListener('click', () => {
        if ("classList" in femaleGenderItem) {
            femaleGenderItem.classList.add('gender-active')
        }
        if ("classList" in maleGenderItem) {
            maleGenderItem.classList.remove('gender-active')
        }
        // maleGenderItem.classList.remove('gender-item')
        genderStatus = true;
        sexValue = false
    })

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
    userHaveAccBtn.addEventListener('click', onClickUserHaveAccBtn)

    // регулярка для проверки логина
    const loginRegex = /[0-9a-zA-Z$^\-_]{4,24}/
    // регулярка для проверки пароля
    const passwordRegex = /[0-9a-zA-Z!@#$%^&*\-_]{6,36}/

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    function onClickCreateAccButton() {
        let RegUserLogin = registrationInputLogin ? registrationInputLogin.value : ''
        let RegUserPassword = registrationPasswordInput ? registrationPasswordInput.value : ''
        let RegConfirmUserPassword = confirmRegistrationPasswordInput ? confirmRegistrationPasswordInput.value : ''
        let RegEmail = regMailInput ? regMailInput.value : ''
        if (!RegUserLogin || loginRegex.test(RegUserLogin) === false) {
            createNotify(2, 'Заполните корректно логин',5)
            if ("value" in registrationInputLogin) {
                registrationInputLogin.value = ''
            }
            return
        }
        if (!RegUserPassword || passwordRegex.test(RegUserPassword) === false) {
            createNotify(2, 'Заполните корректно пароль',5)
            if ("value" in registrationPasswordInput) {
                registrationPasswordInput.value = ''
            }
            return
        }
        if (RegUserPassword != RegConfirmUserPassword) {
            createNotify(2, 'Пароли не совпадают',5)
            return;
        }
        if (!RegEmail || emailRegex.test(RegEmail) === false) {
            createNotify(2, 'Заполните корректно почту',5)
            return;
        }
        if (genderStatus === null) {
            createNotify(2, 'Выберите пол',5)
            return;
        }
        window.mp.trigger('auth::reg',JSON.stringify({
            login: RegUserLogin,
            password: RegUserPassword,
            email: RegEmail,
            sex: sexValue,
        }))
    }

    createAccButton.addEventListener('click', onClickCreateAccButton)
}

function onClickRegistrationButton() {
    if ("classList" in authTitle) {
        authTitle.classList.add('hidden')
    }
    if ("classList" in authLoginInput) {
        authLoginInput.classList.add('hidden')
    }
    if ("classList" in authPasswordArea) {
        authPasswordArea.classList.add('hidden')
    }
    if ("classList" in passwordCheckboxArea) {
        passwordCheckboxArea.classList.add('hidden')
    }
    registrationButton.classList.add('hidden')
    if ("classList" in authButton) {
        authButton.classList.add('hidden')
    }
    if ("classList" in logo) {
        logo.classList.remove('logo-auth')
    }
    if ("classList" in logo) {
        logo.classList.add('logo-reg')
    }

    if ("classList" in registrationTitle) {
        registrationTitle.classList.remove('hidden')
    }
    if ("classList" in registrationInputLogin) {
        registrationInputLogin.classList.remove('hidden')
    }
    if ("classList" in registrationPasswordArea) {
        registrationPasswordArea.classList.remove('hidden')
    }
    if ("classList" in confirmRegistrationPasswordArea) {
        confirmRegistrationPasswordArea.classList.remove('hidden')
    }
    if ("classList" in regMailInput) {
        regMailInput.classList.remove('hidden')
    }
    if ("classList" in regGenderSwitcher) {
        regGenderSwitcher.classList.remove('hidden')
    }
    if ("style" in regGenderSwitcher) {
        regGenderSwitcher.style.display = 'flex'
    }
    if ("classList" in createAccButton) {
        createAccButton.classList.remove('hidden')
    }
    if ("classList" in userHaveAccBtn) {
        userHaveAccBtn.classList.remove('hidden')
    }


    if ("append" in pageWrapper) {
        pageWrapper.append(registrationTitle as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(registrationInputLogin as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(registrationPasswordArea as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(confirmRegistrationPasswordArea as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(regMailInput as HTMLInputElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(regGenderSwitcher as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(createAccButton as HTMLElement)
    }
    if ("append" in pageWrapper) {
        pageWrapper.append(userHaveAccBtn as HTMLElement)
    }
}

function onClickUserHaveAccBtn() {
    // if ("classList" in registrationTitle) {
    if(registrationTitle == undefined) {
        return
    }
        registrationTitle.classList.add('hidden')
    // }
    // if ("classList" in registrationInputLogin) {
        registrationInputLogin.classList.add('hidden')
    // }
    if ("classList" in registrationPasswordArea) {
        registrationPasswordArea.classList.add('hidden')
    }
    if ("classList" in confirmRegistrationPasswordArea) {
        confirmRegistrationPasswordArea.classList.add('hidden')
    }
    if ("classList" in regMailInput) {
        regMailInput.classList.add('hidden')
    }
    if ("classList" in regGenderSwitcher) {
        regGenderSwitcher.classList.add('hidden')
    }
    if ("style" in regGenderSwitcher) {
        regGenderSwitcher.style.display = 'none'
    }
    if ("classList" in createAccButton) {
        createAccButton.classList.add('hidden')
    }
    if ("classList" in userHaveAccBtn) {
        userHaveAccBtn.classList.add('hidden')
    }

    if ("classList" in authTitle) {
        authTitle.classList.remove('hidden')
    }
    if ("classList" in authLoginInput) {
        authLoginInput.classList.remove('hidden')
    }
    if ("classList" in authPasswordArea) {
        authPasswordArea.classList.remove('hidden')
    }
    if ("classList" in passwordCheckboxArea) {
        passwordCheckboxArea.classList.remove('hidden')
    }
    registrationButton.classList.remove('hidden')
    if ("classList" in authButton) {
        authButton.classList.remove('hidden')
    }
    if ("classList" in logo) {
        logo.classList.add('logo-auth')
    }

    if ("classList" in logo) {
        logo.classList?.remove('logo-reg')
    }


        userHaveAccBtn?.remove()

}

window.showLoginPage = window.showLoginPage || {}

function closeLoginPage() {
    pageWrapper?.remove()

    registrationButton.removeEventListener('click', onClickRegistrationButton)
}

window.closeLoginPage = window.closeLoginPage || {}

window.mp.events.add('auth::show', (remember:boolean) => {
    showLoginPage(remember)
})

window.mp.events.add('auth::hide', () => {
    closeLoginPage()
})

// доделать регулярку https://u-next.com/blogs/java/what-is-password-validation-in-javascript-beginners-guide/
// добавить регулярку чтобы работало и на авторизацию
