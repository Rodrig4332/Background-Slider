const body = document.body;
const leftBtn = document.getElementById('left'); 
const rightBtn = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 3;

// Setting the background img to the body
setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')

}
setActiveSlide()

// Adding event listener to arrow buttons
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0;
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length -1
    }
        setBgToBody()
    setActiveSlide()
})

setBgToBody()

