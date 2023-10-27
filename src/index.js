import './style.css'
import './companents/button.css'
import serverLogo from './assets/img/server-logo.svg'
import passwordShow from './assets/img/password-show-icon.svg'
import maleIcon from './assets/img/maleIcon.svg'
import femaleIcon from './assets/img/femaleIcon.svg'

const pageWrapper = document.createElement('div')
pageWrapper.classList.add('page-wrapper')
document.body.append(pageWrapper)

// авторизация

const logo = document.createElement('div')
const logoText = document.createElement('div')
logoText.textContent = 'CATCH RPG'
logoText.classList.add('logo-text')
logo.classList.add('logo')
logo.append(logoText)
pageWrapper.append(logo)

// ОКНО АВТОРИЗАЦИИ!!!!

const authTitle = document.createElement('div')
authTitle.classList.add('authorization-title')
authTitle.textContent = 'Авторизация'
pageWrapper.append(authTitle)

const authLoginInput = document.createElement('input');
authLoginInput.classList.add('input-login', 'input')
authLoginInput.type = 'text';
authLoginInput.placeholder = 'Введите логин'
pageWrapper.append(authLoginInput)

const authPasswordInput = document.createElement('input');
authPasswordInput.classList.add('input-password', 'input')
authPasswordInput.id = 'input-password'
authPasswordInput.type = 'password'
authPasswordInput.placeholder = 'Введите пароль'

// иконка глазика

function createPasswordShowIcon() {
  const passwordShowIcon = document.createElement('img')
  passwordShowIcon.src = passwordShow
  passwordShowIcon.alt = 'password-show-icon'
  passwordShowIcon.classList.add('password-control')
  return passwordShowIcon
}

let authPasswordShow = createPasswordShowIcon()

// после с паролем при авторизации
const authPasswordArea = document.createElement('div')
authPasswordArea.classList.add('authorization-password-area')
authPasswordArea.append(authPasswordInput, authPasswordShow)
pageWrapper.append(authPasswordArea)


// Запомнить меня
const passwordCheckboxArea = document.createElement('div')
passwordCheckboxArea.classList.add('auth-pass-checkbox')

const passwordCheckbox = document.createElement('input')
passwordCheckbox.classList.add('my-checkbox')
passwordCheckbox.type = 'checkbox'
passwordCheckbox.id = 'checkbox'

const passwordCheckboxText = document.createElement('label')
passwordCheckboxText.htmlFor = 'checkbox'
passwordCheckboxText.textContent = 'Запомнить меня'

passwordCheckboxArea.append(passwordCheckbox, passwordCheckboxText)
pageWrapper.append(passwordCheckboxArea)


// Кнопки для авторизации

const authButton = document.createElement('button')
authButton.textContent = 'Войти'
authButton.classList.add('login-button', 'primary-button', 'btn')

const registrationButton = document.createElement('button')
registrationButton.textContent = 'Регистрация'
registrationButton.classList.add('registration-button', 'btn', 'secondary-button')

pageWrapper.append(authButton, registrationButton)

// функция показать/скрыть пароль

authPasswordShow.addEventListener('click', (e) => {
  onClickPasswordShow(authPasswordInput)
})

function onClickPasswordShow(input) {
  if (input.type === 'password') {
    input.type = 'text'
  } else {
    input.type = 'password'
  }
  return false;
}




// ОКНО РЕГИСТРАЦИИ !!!!!!!!!!!!!!!!!!!!!!!!!

const registrationTitle = document.createElement('div')
registrationTitle.classList.add('authorization-title')
registrationTitle.textContent = 'РЕГИСТРАЦИЯ'

const registrationInputLogin = document.createElement('input')
registrationInputLogin.placeholder = 'Введите логин'
registrationInputLogin.classList.add('input', 'input-login')

// Введите пароль
const registrationPasswordArea = document.createElement('div')
registrationPasswordArea.id = 'input-password'
registrationPasswordArea.classList.add('registration-password-area')

const registrationPasswordInput = document.createElement('input');
registrationPasswordInput.placeholder = 'Введите пароль'
registrationPasswordInput.classList.add('input-password', 'input', 'reg-password')

let regPassIcon = createPasswordShowIcon()
registrationPasswordArea.append(registrationPasswordInput, regPassIcon)

// повторите пароль
const confirmRegistrationPasswordArea = document.createElement('div')
confirmRegistrationPasswordArea.id = 'input-password'
confirmRegistrationPasswordArea.classList.add('registration-password-area')

regPassIcon.addEventListener('click', (e) => {
  onClickPasswordShow(registrationPasswordInput)
})

const confirmRegistrationPasswordInput = document.createElement('input');
confirmRegistrationPasswordInput.placeholder = 'Повторите пароль'
confirmRegistrationPasswordInput.classList.add('input-password', 'input')


let regPassConfirmIcon = createPasswordShowIcon()
confirmRegistrationPasswordArea.append(confirmRegistrationPasswordInput,regPassConfirmIcon )

regPassConfirmIcon.addEventListener('click', (e) => {
  onClickPasswordShow(confirmRegistrationPasswordInput)
})

// электронная почта
const regMailInput = document.createElement('input')
regMailInput.classList.add('reg-mail-input')
regMailInput.placeholder = 'Электронная почта'
regMailInput.classList.add('input')

// свитчер смены пола
const regGenderSwitcher = document.createElement('div')
regGenderSwitcher.classList.add('reg-gender-switcher')

const maleGenderItem = document.createElement('div')
maleGenderItem.classList.add('gender-item')
const maleGenderText = document.createElement('div')
maleGenderText.classList.add('gender-item-text')
maleGenderText.textContent = 'МУЖЧИНА'
const maleGenderIcon = document.createElement('div')
maleGenderIcon.classList.add('male-gender-item-icon')

maleGenderItem.append(maleGenderText, maleGenderIcon)

const femaleGenderItem = document.createElement('div')
femaleGenderItem.classList.add('gender-item')
const femaleGenderText = document.createElement('div')
femaleGenderText.classList.add('gender-item-text')
femaleGenderText.textContent = 'ЖЕНЩИНА'
const femaleGenderIcon = document.createElement('div')
femaleGenderIcon.classList.add('female-gender-item-icon')

regGenderSwitcher.append(maleGenderItem, femaleGenderItem)
// создать аккаунт

const createAccButton = document.createElement('button')
createAccButton.classList.add('primary-button', 'btn', 'create-acc-btn')
createAccButton.textContent = 'СОЗДАТЬ АККАУНТ'
femaleGenderItem.append(femaleGenderText, femaleGenderIcon)

// у меня есть аккаунт

const userHaveAccBtn = document.createElement('button')
userHaveAccBtn.classList.add('user-haveacc-btn')
userHaveAccBtn.textContent = 'У МЕНЯ ЕСТЬ АККАУНТ'




registrationButton.addEventListener('click', () => {
authTitle.classList.add('hidden')
  authLoginInput.classList.add('hidden')
  authPasswordArea.classList.add('hidden')
  passwordCheckboxArea.classList.add('hidden')
  registrationButton.classList.add('hidden')
  authButton.classList.add('hidden')

  pageWrapper.append(registrationTitle)
  pageWrapper.append(registrationInputLogin)
  pageWrapper.append(registrationPasswordArea)
  pageWrapper.append(confirmRegistrationPasswordArea)
  pageWrapper.append(regMailInput)
  pageWrapper.append(regGenderSwitcher)
  pageWrapper.append(createAccButton)
  pageWrapper.append(userHaveAccBtn)
})








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

