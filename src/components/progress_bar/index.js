let circleProgressBar = document.createElement('svg')
circleProgressBar.classList.add('circle-progress-bar')

let circleStatic = document.createElement('circle')
circleStatic.classList.add('circle-static')
circleStatic.setAttribute('r', '10')
circleStatic.setAttribute('cy', '12')
circleStatic.setAttribute('cx', '12')

let circleActive = document.createElement('circle')
circleActive.classList.add('circle-active')

circleProgressBar.append(circleStatic,circleActive)

let mainNotify = document.querySelector('.notify-el')

mainNotify.append(circleProgressBar)
