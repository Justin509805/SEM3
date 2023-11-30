// function for dragging the "event object" in this case the img's
function startDrag(e) {
    // determine event objects
    if (!e) {
        var e = window.event;
    }
    if(e.preventDefault) e.preventDefault();

    var targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') {return}; //return makes it droppable
    // X, Y coordinates
        offsetX = e.clientX;
        offsetY = e.clientY;

    // starting lacation of the elements (topleft)
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left 
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
        document.onmousemove=dragDiv;
    return false;
    
}

function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    var targ=e.target?e.target:e.srcElement;
    // moveing the element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}

function stopDrag() {
    drag=false;
}
// funtion starts when page is loaded
window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}