//выпадающие списки в header
document.addEventListener("DOMContentLoaded", function () {


  document.querySelectorAll('.button-item').forEach(item => {
    item.addEventListener('click', function () {

      let ul = item.parentElement.querySelector('.button-option');
      ul.classList.toggle('option-active');

      let n = item.querySelector('.header-arrow__svg');
      n.classList.toggle('header-arrow__svg_active');

      document.querySelectorAll('.button-option').forEach(element => {
        if (element != ul) {
          element.classList.remove('option-active');
        }
      });

      document.querySelectorAll('.header-arrow__svg').forEach(element => {
        if (element != n) {
          element.classList.remove('header-arrow__svg_active');
        }
      });

    });

  });


  let nav = document.querySelector(".header-bottom__nav");
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      document.querySelectorAll(".button-option").forEach(item => {
        item.classList.remove("option-active");
        item.parentElement.querySelector(".header-arrow__svg").classList.remove("header-arrow__svg_active");
      })
    };
  });


  //меню 1024

  document.querySelectorAll('.burger').forEach(item => {
    item.addEventListener('click', function () {

      let ul = item.parentElement.querySelector('.menu');
      ul.classList.toggle('menu-active');

      document.querySelectorAll('.menu').forEach(element => {
        if (element != ul) {
          element.classList.remove('menu-active');
        }
      });

    });

  });

  //закрытие меню 1024
  document.querySelectorAll('.menu-close').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.menu').forEach(element => {
        element.classList.remove('menu-active');
      });
    });

  });

  // закрытие вне области menu-media_1024
  let menu = document.querySelector(".menu-media_1024");
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) {
      document.querySelectorAll(".menu").forEach(item => {
        item.classList.remove("menu-active");

      })
    };
  });




  //

  document.querySelectorAll('.simplebar').forEach(item => {
    new SimpleBar(item, {
      /* чтобы изначально ползунок был виден */
      autoHide: false,
      /* с помощью этого значения вы можете управлять высотой ползунка*/
      scrollbarMaxSize: 40,
    });
  })





  // открытие form 1024

  document.querySelectorAll('.search-open').forEach(item => {
    item.addEventListener('click', function () {

      this.style.visibility = 'hidden';

      let form = item.parentElement.querySelector('.form-search-media');
      form.classList.toggle('form-search-media_active');

      let formBtn = document.querySelector('.header-search__btn_media');
      formBtn.setAttribute("type", "submit");


      let menuMediaHidden = document.querySelector('.menu-media_1024');  //768
      menuMediaHidden.classList.toggle('menu-media_1024_hidden');
      let searchMediaWidth = document.querySelector('.search-media');
      searchMediaWidth.classList.toggle('search-media_active')


      document.querySelectorAll('.form-search-media').forEach(element => {
        if (element != form) {
          element.classList.remove('form-search-media_active');
        }
      });

    });

  });




  // закрытие вне области form 1024 и 768
  let btn = document.querySelector(".search-open");
  let inp = document.querySelector(".form-search-media");
  document.addEventListener("click", function (e) {
    if (!btn.contains(e.target) && !inp.contains(e.target)) {
      document.querySelectorAll(".form-search-media").forEach(item => {
        item.classList.remove("form-search-media_active");
        btn.style.visibility = 'visible';
      })

      document.querySelectorAll(".search-media").forEach(item => {  //768
        item.classList.remove('search-media_active');
      })

      document.querySelectorAll(".menu-media_1024").forEach(item => {  //768
        item.classList.remove('menu-media_1024_hidden');
      })
    };
  });



//закрытие form 768
document.querySelectorAll('.header-search__btn_close').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.form-search-media').forEach(element => {
      element.classList.remove('form-search-media_active');
    });

    document.querySelectorAll('.menu-media_1024').forEach(element => {
      element.classList.remove('menu-media_1024_hidden');
    });

    document.querySelectorAll('.search-media').forEach(element => {
      element.classList.remove('search-media_active');
    });

    let btn = document.querySelector(".search-open");
    btn.style.visibility = 'visible';

  });

});



  // открытие form в menu

  document.querySelectorAll('.search-open_menu').forEach(item => {
    item.addEventListener('click', function () {

      this.style.visibility = 'hidden';

      let form = item.parentElement.querySelector('.form-search-media_menu');
      form.classList.toggle('form-search-media_active_menu');

      let formBtn = document.querySelector('.header-search__btn_media');
      formBtn.setAttribute("type", "submit");

      document.querySelectorAll('.form-search-media_menu').forEach(element => {
        if (element != form) {
          element.classList.remove('form-search-media_active_menu');
        }
      });

    });

  });



  // закрытие вне области form в menu
  let btnMenu = document.querySelector(".search-open_menu");
  let inpMenu = document.querySelector(".form-search-media_menu");
  document.addEventListener("click", function (e) {
    if (!btnMenu.contains(e.target) && !inpMenu.contains(e.target)) {
      document.querySelectorAll(".form-search-media_menu").forEach(item => {
        item.classList.remove("form-search-media_active_menu");
        btnMenu.style.visibility = 'visible';
      })
    };
  });





  //section slider

  const swiper = new Swiper('.swiper-slider__container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,


    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    autoplay: {
      delay: 5000,
    },

    // If we need pagination

  });



});












