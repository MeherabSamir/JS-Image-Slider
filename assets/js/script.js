// Selecting Elements
const img = document.querySelector('.img-container img');
const pag1 = document.querySelector('.pag-1');
const pag2 = document.querySelector('.pag-2');
const pag3 = document.querySelector('.pag-3');
const pag = document.querySelectorAll('.pag');

const slider = [
    {
        imgUrl: 'assets/img/img-1.jpg',
    },
    {
        imgUrl: 'assets/img/img-2.jpg',
    },
    {
        imgUrl: 'assets/img/img-3.jpg',
    },
];

// Event Listeners
pag1.addEventListener('click', () => {
    img.src = slider[0].imgUrl;
    pag[1].classList.remove('active');
    pag[2].classList.remove('active');
    pag1.classList.add('active');
});

pag2.addEventListener('click', () => {
    img.src = slider[1].imgUrl;
    pag[0].classList.remove('active');
    pag[2].classList.remove('active');
    pag2.classList.add('active');
});

pag3.addEventListener('click', () => {
    img.src = slider[2].imgUrl;
    pag[0].classList.remove('active');
    pag[1].classList.remove('active');
    pag3.classList.add('active');
});
