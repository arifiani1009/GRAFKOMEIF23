var freeze = false;
function onMouseClick(event){
    freeze = !freeze;
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        freeze = true;
    }
}

function onKeyup(event){
    if(event.keyCode == 32){
        freeze = false;
    }
}

document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);