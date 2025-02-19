const images = ['./img1.jpg', './img2.jpg', './img3.jpg', './img4.jpg', './img5.jpg'];
let img = document.getElementById('image');
const btnPrevious = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const dotsContainer = document.getElementById('image-dott');

img.src = images[0];
let currentIndex = 0;
btnPrevious.style.visibility = 'hidden';

function createDots() {
    images.forEach((image, index) => {
        const newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide()
        })
        dotsContainer.appendChild(newDot);
    })
}
function updateSlide() {
    img.src = images[currentIndex];
    btnPrevious.style.visibility = currentIndex === 0 ? "hidden" : "visible";
    btnNext.style.visibility = currentIndex === images.length - 1 ? "hidden" : "visible";

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function showNextSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlide();
    }
}

function showPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
}

createDots();
btnNext.addEventListener('click', showNextSlide)
btnPrevious.addEventListener('click', showPreviousSlide)
