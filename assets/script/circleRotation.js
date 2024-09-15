const circleMiriam = document.querySelector('#circleMiriam');

let  angle = 0;

export function circleRotation () {
    // incrementa o angulo
    angle += .3;

    circleMiriam.style.transform = `translate(-50%, -50%) rotate(${angle}deg) `

    requestAnimationFrame(circleRotation)
}

circleRotation();