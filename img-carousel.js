const images = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#images img');

let indx = 0;

let interval = setInterval(run, 2000);

function run() {
    indx++;
    changeImage();
}

function changeImage() {
    if (indx > img.length - 1) {
        indx = 0;
    } else if (indx < 0) {
        indx = img.length - 1;
    }

    images.style.transform = `translateX(${-indx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    indx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    indx--;
    changeImage();
    resetInterval();
});
