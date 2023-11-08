const template = `<svg class="svg-progress" viewBox="0 0 100 100">
\t<style>
        .circle-progress-bar {
            min-width: 2.148148vmin;
            min-height: 2.148148vmin;
            max-width: 2.148148vmin;
            max-height: 2.148148vmin;
            width: 2.148148vmin;
            height: 2.148148vmin;
            
            position: absolute;
            right: 1.1111vmin;
        }
        
        .progress-bar{
            transform: rotate(-90deg);
        }
        .progress-bar {
            stroke-dasharray: 251;
            stroke-dashoffset: 251;
            transition: all linear;
        }

        .svg-progress {
            position: absolute;
            height: 100%;
            width: 100%;
\t          background-color: transparent;
        }


\t</style>
\t<circle cy=50 cx=50 r=40 fill=transparent stroke="white" stroke-opacity=".1" stroke-width="10"></circle>
\t<circle class="progress-bar" cy=50 cx=-50 r=40 fill=transparent stroke="white" stroke-opacity="1" stroke-width="10" stroke-dasharray="100, 500" stroke-linecap="round" stroke-dashoffset=0></circle>
</svg>
`

function createProgressBar() {
    let circleProgressBar = document.createElement('div')
    circleProgressBar.classList.add('circle-progress-bar')
    circleProgressBar.innerHTML = template

    return circleProgressBar
}

function activateProgressBar(circleProgressBar,time) {
    let circle = circleProgressBar.getElementsByClassName('progress-bar')[0]
    circle.style.strokeDashoffset = '0';
    circle.style.transitionDuration = `${time}s`
}


export {createProgressBar,activateProgressBar}
