function checkboxToggle() {

  let btn = document.querySelector(".books-menu__btn");
  let labels = document.querySelectorAll(".books-checkbox__label");
  let listLabels = document.querySelector(".books-checkbox__list");

btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }

  })



function toggleSpoiler() {

    if (!listLabels.classList.contains("checklist-active")) {
    listLabels.classList.add("checklist-active");
    labels.forEach(item => {
      item.classList.add("books-checkbox__label-active");
      animationItem(item, "books-checkbox__label-active", "animation-test", "add");
    })
  } else {
    listLabels.classList.remove("checklist-active");
    labels.forEach(item => {
      if (item.querySelector(".books-checkbox__input").checked) {
      animationItem(item, "books-checkbox__label-active", "animation-test", "add");

      } else {
        animationItem(item, "books-checkbox__label-active", "animation-test", "remove");
      }
      });
  }
  labels.forEach(item => {
    item.addEventListener("click", function() {
      if (!listLabels.classList.contains("checklist-active")) {
        animationItem(this, "books-checkbox__label-active", "animation-test", "remove");
      }

    });
  });

}


function animationItem(item, class1, class2, f) {
 if (f === "add") {
    item.classList.add(class1);
  setTimeout(function() {
    item.classList.add(class2)
  }, 100);

 } else {
     item.classList.remove(class2);
  setTimeout(function() {
    item.classList.remove(class1)
  }, 300);
  }

}


}



checkboxToggle()


document.querySelectorAll('.books-menu__btn').forEach(item => {
  item.addEventListener('click', function () {

    let n = item.querySelector('.books-arrow__svg');
    n.classList.toggle('books-arrow__svg_active');

    document.querySelectorAll('.books-arrow__svg').forEach(element => {
      if (element != n) {
        element.classList.remove('books-arrow__svg_active');
      }
    })
  })
});



// slider

const slider = document.querySelector('.books-swiper__container');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 620 && slider.dataset.mobile == 'false') {
    slider.dataset.mobile = 'false';

		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}

	}

	if (window.innerWidth > 620) {
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

  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,


  //navigation buttons
  navigation: {
    nextEl: '.swiper-button-next_books',
    prevEl: '.swiper-button-prev_books',
  },

  //pagination
  pagination: {
    el: '.swiper-pagination-fraction_books',
    type: 'fraction',
  },


  breakpoints: {

    621: {
      slidesPerView: 2,
      slidesPerGroup: 2,
       spaceBetween: 34,
    },

   768: {
     slidesPerView: 2,
     slidesPerGroup: 2,
      spaceBetween: 34,
   },


   1024: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 43,
  },

    // 1200: {
    //   slidesPerView: 3,
    //   slidesPerGroup: 3,
    //   spaceBetween: 34,
    // },

   1430: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 46,
  },

   },

  a11y: {
    enabled: true,
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий  слайд',
  },
		});

		slider.dataset.mobile = 'true';
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

