import './style.css'

const pageWrapper = document.createElement('div')
pageWrapper.classList.add('page-wrapper')


// авторизация

const logo = document.createElement('img')
logo.src = './img/server-logo.svg'
logo.alt = 'server-logo'
logo.classList.add('logo')
pageWrapper.appendChild(logo)

const authorizationTitle = document.createElement('span')
authorizationTitle.textContent = 'Авторизация'

const inputLogin = document.createElement('input');
inputLogin.classList.add('input-login', 'input')
inputLogin.type = 'text';
inputLogin.placeholder = 'Введите логин'

const inputPassword = document.createElement('input');
inputPassword.classList.add('input-password', 'input')
inputPassword.type = 'password'
inputPassword.placeholder = 'Введите пароль'

document.body.append(pageWrapper)
pageWrapper.appendChild(inputLogin)
pageWrapper.appendChild(inputPassword)


// уведомления в нижней части экрана

const MainNotification = document.createElement('div')
MainNotification.classList.add('main-notification', 'hidden')
document.body.append(MainNotification)

function clearMainNotification() {
  MainNotification.classList.add('hidden')
}


// авторизация и регистрация
const authorizationArea = document.createElement('div')
authorizationArea.classList.add('authorization-area')
pageWrapper.appendChild(authorizationArea)

const registrationButton = document.createElement('button')
registrationButton.textContent = 'Регистрация'
registrationButton.classList.add('registration-button')

const authorizationButton = document.createElement('button')
authorizationButton.textContent = 'Войти'
authorizationButton.classList.add('login-button')

authorizationArea.appendChild(registrationButton)
authorizationArea.appendChild(authorizationButton)


const registrationInput = document.createElement('input');
registrationInput.classList.add('input-login', 'input')
registrationInput.type = 'text';
registrationInput.placeholder = 'Придумайте ваш логин';

const registrationText = document.createElement('div')
registrationText.textContent = 'Регистрация'

const registrationPassword = document.createElement('input');
registrationPassword.classList.add('input-password', 'input')
registrationPassword.type = 'password'
registrationPassword.placeholder = 'Придумайте ваш пароль'

// кнопка проверки на регистрацию
const registrationCheckButton = document.createElement('button')
registrationCheckButton.classList.add('registration-check-button')
registrationCheckButton.textContent = 'Зарегистрироваться'

// кнопка отмены регистрации
const declineButton = document.createElement('button')
declineButton.classList.add('decline-button','hidden')
declineButton.textContent = 'Отмена'
authorizationArea.append(declineButton)

// регулярка для проверки логина
const loginRegex = /[0-9a-zA-Z$^\-_]{4,24}/
// регулярка для проверки пароля
const passwordRegex = /[0-9a-zA-Z!@#$%^&*\-_]{6,36}/

// доделать регулярку https://u-next.com/blogs/java/what-is-password-validation-in-javascript-beginners-guide/
// добавить регулярку чтобы работало и на авторизацию
// менять MainNotification в зависимости, что не так с логином или паролем

registrationCheckButton.addEventListener('click', () => {
  let UserLogin = registrationInput.value
  let UserPassword = registrationPassword.value
  console.log(loginRegex.test(UserLogin))
  console.log(passwordRegex.test(UserPassword))
  if (!UserLogin || loginRegex.test(UserLogin) === false) {
    clearTimeout(timer)
    timer = setTimeout(clearMainNotification, 3000)
    MainNotification.classList.remove('hidden')
    MainNotification.textContent = 'Введите логин'
    registrationInput.value = ''
    return
  }
  if (!UserPassword || passwordRegex.test(UserPassword) === false) {
    clearTimeout(timer)
    timer = setTimeout(clearMainNotification, 3000)
    MainNotification.classList.remove('hidden')
    MainNotification.textContent = 'Введите пароль'
    registrationPassword.value = ''
    return
  }
  let data = {
    login: UserLogin,
    password: UserPassword,
  }
  const json = JSON.stringify(data)
  console.log(json)
  console.log(data)
  // mp.trigger("login", json)
  inputPassword.classList.remove('hidden')
  inputLogin.classList.remove('hidden')
  registrationButton.classList.remove('hidden')
  authorizationButton.classList.remove('hidden')

  declineButton.classList.add('hidden')
  registrationCheckButton.classList.add('hidden')
  registrationText.classList.add('hidden')
  registrationInput.classList.add('hidden')
  registrationPassword.classList.add('hidden')
})

registrationButton.addEventListener('click', () => {
  inputLogin.classList.add('hidden')
  inputPassword.classList.add('hidden')
  authorizationButton.classList.add('hidden')
  registrationButton.classList.add('hidden')

  declineButton.classList.remove('hidden')
  registrationInput.classList.remove('hidden')
  registrationText.classList.remove('hidden')
  registrationPassword.classList.remove('hidden')
  registrationCheckButton.classList.remove('hidden')

  authorizationArea.prepend(registrationCheckButton)
  pageWrapper.prepend(registrationPassword)
  pageWrapper.prepend(registrationInput)
  pageWrapper.prepend(registrationText)
})

declineButton.addEventListener('click', () => {
  registrationInput.classList.add('hidden')
  registrationPassword.classList.add('hidden')
  registrationText.classList.add('hidden')
  declineButton.classList.add('hidden')
  registrationCheckButton.classList.add('hidden')

  registrationButton.classList.remove('hidden')
  authorizationButton.classList.remove('hidden')
  inputLogin.classList.remove('hidden')
  inputPassword.classList.remove('hidden')
})

let timer;

authorizationButton.addEventListener('click', () => {
  if (!inputLogin.value) {
    clearTimeout(timer)
    timer = setTimeout(clearMainNotification, 3000)
    MainNotification.classList.remove('hidden')
    MainNotification.textContent = 'Введите логин'
    return
  }
  if (!inputPassword.value) {
    clearTimeout(timer)
    timer = setTimeout(clearMainNotification, 3000)
    MainNotification.classList.remove('hidden')
    MainNotification.textContent = 'Введите пароль'
    return
  }
  inputLogin.classList.remove('hidden')
  inputPassword.classList.remove('hidden')
  let data = {
    login: inputLogin.value,
    password: inputPassword.value,
  }
  const json = JSON.stringify(data)
  console.log(json)
  console.log(data)
  // mp.trigger("login", json)
})

