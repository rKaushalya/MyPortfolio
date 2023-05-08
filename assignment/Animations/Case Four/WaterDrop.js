
const createCursor = (x, y) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    return cursor;
}
const removeCursor = cursor => {
    const timeOut = setTimeout(() =>{
        cursor.remove();
        clearTimeout(timeOut);
    }, 1000)
};
window.addEventListener('click', event => {
    const cursor = createCursor(event.pageX, event.pageY);
    document.body.append(cursor);
    removeCursor(cursor);
})