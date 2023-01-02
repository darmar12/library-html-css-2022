document.addEventListener('mousemove', e => {
    const glass = document.querySelector('.glass');
    glass.style.top = e.offsetY + 'px';
    glass.style.left = e.offsetX + 'px';
})