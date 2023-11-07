const template = `<svg>
\t<style>
        .progress-bar{
            transform: rotate(-90deg);
        }
        .progress-bar {
            stroke-dasharray: 62.8;
            stroke-dashoffset: 62.8;
            transition: all linear;
        }

        svg {
            position: absolute;
            right: 5px;
            height: 25px;
            width: 25px;
\t          background-color: transparent;
        }

\t</style>
\t<circle cy=12 cx=12 r=10 fill=transparent stroke="white" stroke-opacity=".1" stroke-width="2"></circle>
\t<circle class="progress-bar" cy=12 cx=-12 r=10 fill=transparent stroke="white" stroke-opacity="1" stroke-width="2" stroke-dasharray="100, 500" stroke-linecap="round" stroke-dashoffset=0></circle>
</svg>
`

function createProgressBar() {
    let circleProgressBar = document.createElement('svg')
    circleProgressBar.classList.add('circle-progress-bar')

    let circleStatic = document.createElement('circle')
    circleStatic.classList.add('circle-static')
    circleStatic.innerHTML = template

    let circleActive = document.createElement('circle')
    circleActive.classList.add('circle-active')

    circleProgressBar.append(circleStatic)

    return circleProgressBar
}

function activateProgressBar(circleProgressBar,time) {
    let circle = circleProgressBar.getElementsByClassName('progress-bar')[0]
    circle.style.strokeDashoffset = '0';
    circle.style.transitionDuration = `${time}s`
}


export {createProgressBar,activateProgressBar}
