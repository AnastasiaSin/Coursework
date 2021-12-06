document.addEventListener("DOMContentLoaded", function () {

// Функция ymaps.ready() будет вызвана, когда
          // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
          ymaps.ready(init);
          function init() {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center: [55.758468, 37.601088],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 14
            });

            var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
              iconLayout: 'default#image',
              iconImageHref: 'img/map-marker.svg',
              iconImageSize: [28, 48],
              iconImageOffset: [-3, -42]
            });

            myMap.geoObjects.add(myPlacemark);
          }


//form


              /*new JustValidate('.contacts-form', {
                rules: {

                  name: {
                    required: true,
                    minLength: 2,
                    maxLenght: 10,
                  },

                  tel: {
                    required: true,
                    function: (name, value) => {
                      const phone = selector.inputmask.unmaskedvalue()
                      return Number(phone) && phone.length === 10
                    }
                  },

                },

                messages: {

                  tel: {
                    required: 'Недопустимый формат'
                  },

                  name: 'Недопустимый формат'
                },

              });*/



              var selector = document.querySelector("input[type='tel']");
              var im = new Inputmask("+7(999)-999-99-99");

              im.mask(selector);


              let validateForms = function(form, selector, successModal, yaGoal) {

                new window.JustValidate(form, {

                  rules: {

                    name: {
                      required: true,
                      minLength: 2,
                      maxLenght: 10,
                    },

                    tel: {
                      required: true,
                      function: (name, value) => {
                        const phone = selector.inputmask.unmaskedvalue()
                        return Number(phone) && phone.length === 10
                      }
                    },

                  },

                  messages: {

                    tel: {
                      required: 'Недопустимый формат'
                    },

                    name: 'Недопустимый формат'
                  },

              //отправка формы

                  submitHandler: function(form) {
                    let formData = new FormData(form);

                    let xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function() {
                      if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                          console.log('Отправлено');
                        }
                      }
                    }

                    xhr.open('POST', 'mail.php', true);
                    xhr.send(formData);

                    form.reset();

                  }
                });
              }

              validateForms('.contacts-form', selector, '.thanks-popup', 'send goal');



});
