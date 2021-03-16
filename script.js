const sceneELement = document.querySelector('.scene');
const cubeElement = document.querySelector('.cube');
// const controlsContainer = document.querySelector('.controls');

// controlsContainer.addEventListener('click', e => {
//     if(e.target.tagName !== 'INPUT') {
//         return;
//     }

//     for(className of cubeElement.classList){
//         if(className.startsWith('show')) {
//             cubeElement.classList.remove(className);
//             break;
//         }
//     }

//     cubeElement.classList.add('show-' + e.target.value);
// });

const currentData = {
    clicked: false,
    clientX: 0,
    clientY: 0,
    rotateX: 0,
    rotateY: 0,
    perspective: 1000
}

window.addEventListener('mousedown', e => {
    currentData.clicked = true;
    currentData.clientX = e.clientX;
    currentData.clientY = e.clientY;
});

window.addEventListener('mouseup', e => {
    currentData.clicked = false;
});

window.addEventListener('mousemove', e => {
    if(!currentData.clicked) {
        return;
    }

    rotate(currentData.clientX, currentData.clientY, e.clientX, e.clientY);
    currentData.clientX = e.clientX;
    currentData.clientY = e.clientY;
});

function rotate(fromX, fromY, toX, toY) {
    currentData.rotateX -= toY - fromY;
    currentData.rotateY += toX - fromX;
    cubeElement.style.transform = `rotateX(${currentData.rotateX / 5}deg) rotateY(${currentData.rotateY / 5}deg)`;
}

window.addEventListener('wheel', e => {
    currentData.perspective += e.deltaY / 5;
    sceneELement.style.perspective = currentData.perspective + 'px';
});