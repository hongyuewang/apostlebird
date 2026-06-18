let loop = null;

function playLoop() {
    if (loop) {
        loop.pause();
        loop = null;
    } else {
        loop = new Audio('assets/tp_loop.mp3');
        loop.play();
    }
}