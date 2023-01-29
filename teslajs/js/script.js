//slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) { //여기서 slide는 nextSlide와 preSlide의 curSlide값임
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        //forEach(item, index)
        //s는 각각의 slide
        //curslide가 1일때, slide는 1
        //100*(i-1)%
        //100*(0-1)% -> -100%
        //100*(1-1)% -> 0% - 현재보고있는 슬라이드
        //100*(2-1)% -> 100%
        //100*(3-1)% -> 200%
    ); //translateX=0% 현재보고있는 슬라이드
};

const nextSlide = function () {
    if (curSlide === maxSlide - 1) { //curSlide는 현재 내가 보는 Slide(current Slide)
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
}

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key == "Escape" && !modal.classList.contains('hidden'))
        closeModal();
})


