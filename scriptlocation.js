let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
document.querySelectorAll('.location-img').forEach(function (img) {
    img.style.position = 'relative';
    img.style.cursor = 'grab';
    img.addEventListener('mousedown', function (event) {
    draggedElement = event.target;
    offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = 1000;
    draggedElement.style.cursor = 'grabbing';
    document.body.appendChild(draggedElement);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
    img.ondragstart = function () {
    return false;
};
});
    function onMouseMove(event) {
    let posX = event.pageX - offsetX;
    let posY = event.pageY - offsetY;
    if (draggedElement) {
    draggedElement.style.left = posX + 'px';
    draggedElement.style.top = posY + 'px';
}
}
    function onMouseUp() {
    if (draggedElement) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    draggedElement.style.cursor = 'grab';
    draggedElement = null;
}
}


