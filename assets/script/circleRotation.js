const circleMiriam = document.querySelector('#circleMiriam');

let  angle = 0;

export function circleRotation () {
    // incrementa o angulo
    angle += .3;

    circleMiriam.style.transform = `rotate(${angle}deg)`

    requestAnimationFrame(circleRotation)
    console.log('funcionou')
}

circleRotation();