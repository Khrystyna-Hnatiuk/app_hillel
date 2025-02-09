// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)


let btn = document.getElementById('btn-random');
let image = document.createElement('img');
let body = document.querySelector('body')
body.appendChild(image);

let imagesSrc = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let initialRandomSrc = imagesSrc[Math.floor(Math.random() * imagesSrc.length)];
image.src = `./images/${initialRandomSrc}`


btn.addEventListener('click', () => {
    let randomSrc = imagesSrc[Math.floor(Math.random() * imagesSrc.length)];
    image.src = `./images/${randomSrc}`

})

