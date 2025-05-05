let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
document.querySelectorAll('.location-img').forEach(img => {
    img.style.position = 'relative';
    img.style.cursor = 'grab';
    img.addEventListener('mousedown', function (e) {
        draggedElement = e.target;
        offsetX = e.clientX - draggedElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggedElement.getBoundingClientRect().top;
        draggedElement.style.position = 'absolute';
        draggedElement.style.zIndex = 1000;
        draggedElement.style.cursor = 'grabbing';
        document.body.appendChild(draggedElement);
        moveAt(e.pageX, e.pageY);
        function moveAt(pageX, pageY) {
            draggedElement.style.left = pageX - offsetX + 'px';
            draggedElement.style.top = pageY - offsetY + 'px';
        }
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        draggedElement.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            draggedElement.onmouseup = null;
            draggedElement.style.cursor = 'grab';
        };
    });
    img.ondragstart = () => false;
});
