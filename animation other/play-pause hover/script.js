const video = document.querySelectorAll('.video');

video.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.play();
    });
    item.addEventListener('mouseout', e => {
        item.pause();
    });
});