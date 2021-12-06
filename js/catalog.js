window.addEventListener('DOMContentLoaded', function () {
// табы стран
  document.querySelectorAll('.catalog-country__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog-content').forEach(function (tabsContent) {
        tabsContent.classList.remove('catalog-content_active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content_active');


      $('#accordion-catalog_france').accordion("refresh");
      $('#accordion-catalog_germany').accordion("refresh");
      $('#accordion-catalog_italy').accordion("refresh");
      $('#accordion-catalog_russia').accordion("refresh");
      $('#accordion-catalog_belgium').accordion("refresh");

    });
  });



  //табы художники
  document.querySelectorAll('.catalog-accordion__link').forEach(function (tabsArt) {
    tabsArt.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog-artist_italy').forEach(function (tabsContent) {
        tabsContent.classList.remove('catalog-artist_active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-artist_active');

    });
  });


  //бордер у кнопок
  document.querySelectorAll(".catalog-country__btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      btn.classList.add("catalog-country__btn_active");
      document.querySelectorAll(".catalog-country__btn").forEach(el => (el != btn) ? el.classList.remove("catalog-country__btn_active") : false);
    })
  });



  //цвет ссылки
  document.querySelectorAll(".catalog-accordion__link").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      btn.classList.add("catalog-accordion__link_active");
      document.querySelectorAll(".catalog-accordion__link").forEach(el => (el != btn) ? el.classList.remove("catalog-accordion__link_active") : false);
    });
  });



});





