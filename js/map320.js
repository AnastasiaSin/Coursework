document.addEventListener("DOMContentLoaded", function () {

 // Функция ymaps.ready() будет вызвана, когда
                // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
                ymaps.ready(init);
                function init() {
                  // Создание карты.
                  var myMap = new ymaps.Map("map-320", {
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

              });
