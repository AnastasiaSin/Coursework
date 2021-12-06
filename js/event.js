window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.events-btn').forEach(function (tabsEvents) {
    tabsEvents.addEventListener('click', function () {
      this.style.display = "none"
      document.querySelectorAll('.event-swiper__slide').forEach(function (tabsCard) {
        tabsCard.classList.add('event-swiper__slide_active')
      });

    });
  });




  const slider = document.querySelector('.event-swiper__container');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 620 && slider.dataset.mobile == 'false') {

        slider.dataset.mobile = 'true';

        mySwiper = new Swiper(slider, {
			// Optional parameters
  direction: 'horizontal',
  loop: false,
  //centeredSlides: true,
  //autoHeight: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView:1,
  slidesPerGroup:1,
  spacebetween: 34,
  slideClass: 'event-swiper__slide',


  //pagination
  pagination: {
    el: '.swiper-pagination__event',
      type: 'bullets',
  },



  a11y: {
    enabled: true,
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий  слайд',
  },
});


}


	if (window.innerWidth > 620) {

		slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
	}


}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});



});
