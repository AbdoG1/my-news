const mql = window.matchMedia("(max-width: 992px)")

const changeSlideView = (slide) => {
    var swiper = new Swiper(".swiper", {
        slidesPerView: slide,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}


const handlerOrientationChange = (e) => {
    if (mql.matches) {
        changeSlideView(1);
    } else {
        changeSlideView(3);
    }
}


handlerOrientationChange();

mql.onchange = (e) => {
    handlerOrientationChange(e);
}