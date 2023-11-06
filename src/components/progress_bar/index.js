

export let circleProgressBar = document.createElement('svg')
circleProgressBar.classList.add('circle-progress-bar')

const template = `<svg>
\t<style>
        .st0{
            transform: rotate(-90deg);
        }
        .st0 {
            stroke-dasharray: 62.8;
            stroke-dashoffset: 62.8;
            animation: dash 5s linear forwards;
        }

        svg {
            position: absolute;
            right: 5px;
            height: 25px;
            width: 25px;
\t        background-color: transparent;
        }

        @keyframes dash {
            from{
                stroke-dashoffset: 62.8;
            }
            to {
                stroke-dashoffset: 0;
            }
        }

\t</style>
\t<circle cy=12 cx=12 r=10 fill=transparent stroke="white" stroke-opacity=".1" stroke-width="2"></circle>
\t<circle class="st0" cy=12 cx=-12 r=10 fill=transparent stroke="white" stroke-opacity="1" stroke-width="2" stroke-dasharray="100, 500" stroke-linecap="round" stroke-dashoffset=0></circle>
</svg>
`

let circleStatic = document.createElement('circle')
circleStatic.classList.add('circle-static')
// circleStatic.setAttribute('r', '10')
// circleStatic.setAttribute('cy', '12')
// circleStatic.setAttribute('cx', '12')
circleStatic.innerHTML = template

let circleActive = document.createElement('circle')
circleActive.classList.add('circle-active')

circleProgressBar.append(circleStatic,circleActive)



