document.getElementById('playMusic').addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
        this.classList.add('playing');
    } else {
        audio.pause();
        this.classList.remove('playing');
    }
});