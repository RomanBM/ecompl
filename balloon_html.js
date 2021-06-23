ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.60501183433506,50.54201487499999],
            zoom: 4,
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([59.76569012784967,29.686897945830278], {
        // Номер клиента в таблице: 95
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_d100d_110" target="_blank">Фахверковый дом Chalet 110 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковая надстройка в стиле шале</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592408856/1c6657d5/30834177.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Chalet 110 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_d100d_110" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Chalet 110 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.10235174523006,37.12843987369055], {
        // Номер клиента в таблице: 142
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([57.9995419986316,33.243019847217504], {
        // Номер клиента в таблице: 73
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_may_all" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Валдае</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409032/58251610/30834215.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Валдае"> <br/> ' +           
        '<b><a href = "#popup:stepform_may_all" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.516669208423735,36.74659587722304], {
        // Номер клиента в таблице: 130
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.60436303259329,36.533095948974534], {
        // Номер клиента в таблице: 204
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409099/f8288341/30834248.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.946972131408685,65.79844984128636], {
        // Номер клиента в таблице: 274
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Тюмени</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Тюмени"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.946385786796355,65.79789194181132], {
        // Номер клиента в таблице: 273
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Тюмени</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Тюмени"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.319032423131496,37.32712348261471], {
        // Номер клиента в таблице: 48
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409182/1bfe0596/30834268.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.010995817267165,37.938557520143384], {
        // Номер клиента в таблице: 53
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409201/aca2d12c/30834270.jpg" height="230" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.040342036496064,37.3464941741461], {
        // Номер клиента в таблице: 70
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409215/63010bdd/30834276.jpg" height="230" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.951022646536686,37.085887310454225], {
        // Номер клиента в таблице: 88
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409231/cd5b9a9e/30834277.jpg" height="230" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.70040987756174,38.559663814567976], {
        // Номер клиента в таблице: 147
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409248/ab782923/30834280.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.17619966821131,37.527864689039724], {
        // Номер клиента в таблице: 153
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409266/2c200ba2/30834283.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.02429939862508,29.05889263449928], {
        // Номер клиента в таблице: 100
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.32415498986958,38.10884210450295], {
        // Номер клиента в таблице: 110
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.11826765854447,38.464839362393825], {
        // Номер клиента в таблице: 117
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409366/440522a2/30834291.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.73117157530839,37.891021336185446], {
        // Номер клиента в таблице: 84
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409380/5e7dbe3b/30834293.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.67145690818811,38.03384360181044], {
        // Номер клиента в таблице: 52
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409397/edb6de7b/30834294.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.51853260913246,37.67073877499336], {
        // Номер клиента в таблице: 154
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409418/68d404be/30834296.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.72978585052932,37.17705750684764], {
        // Номер клиента в таблице: 167
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409447/eaf3c133/30834302.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.80256272490423,37.190103771496055], {
        // Номер клиента в таблице: 54
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409461/66e1cdf1/30834305.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.97479278321486,36.800591639823736], {
        // Номер клиента в таблице: 55
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409475/7f722b0a/30834307.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.945401223950945,37.156262936557894], {
        // Номер клиента в таблице: 105
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409490/97c1fa4c/30834308.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.61303190275646,31.270938384651], {
        // Номер клиента в таблице: 12
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409504/3dca0f9a/30834310.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.228406099268554,37.03637237036182], {
        // Номер клиента в таблице: 19
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409577/ba6f0676/30834322.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.085086551789914,37.40647429907274], {
        // Номер клиента в таблице: 38
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409592/85bbac98/30834329.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.87193948048919,37.21726909280504], {
        // Номер клиента в таблице: 62
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409609/c8a51f65/30834331.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.32497740862459,63.591712008620796], {
        // Номер клиента в таблице: 82
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Казахстане</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1592409625/dcf103f9/30834332.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Казахстане"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.144328740232325,30.491552052655752], {
        // Номер клиента в таблице: 123
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.37268458075133,36.6824650216205], {
        // Номер клиента в таблице: Нет в списке (условно: 1n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Наро-Фоминске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594286640/c3b12ce4/31027425.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Наро-Фоминске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрыт��я балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.05459453246095,36.81249190462352], {
        // Номер клиента в таблице: Нет в списке (условно: 2n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.95307285010466,38.21993915921501], {
        // Номер клиента в таблице: Нет в списке (условно: 3n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594287248/d89fb245/31027511.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.021044219254804,37.8269568701171], {
        // Номер клиента в таблице: Нет в списке (условно: 14n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Пушкино</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594756449/507b90f9/31076812.jpg" height="200" width="150" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Пушкино"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.96396817270854,37.307488080659006], {
        // Номер клиента в таблице: Нет в списке (условно: 16n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594756698/d17b3bc9/31076839.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.308018529748985,36.74031262716016], {
        // Номер клиента в таблице: Нет в списке (условно: 4n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Московской области</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594287602/b1e78d28/31027567.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Московской области"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.56399292291939,38.283656824218724], {
        // Номер клиента в таблице: Нет в списке (условно: 12n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594755837/9e500c53/31076739.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.3607412544086,37.63137251629281], {
        // Номер клиента в таблице: Нет в списке (условно: 18n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([56.246347828490215,36.25170441748078], {
        // Номер клиента в таблице: Нет в списке (условно: 5n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Московской области</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594287770/aad63813/31027613.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Московской области"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.25052188324658,30.51089418634013], {
        // Номер клиента в таблице: 172 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_d100d_110" target="_blank">Фахверковый дом Chalet 110 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковая надстройка в стиле шале</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Chalet 110 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_d100d_110" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Chalet 110 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.180859648069145,37.73412308030851], {
        // Номер клиента в таблице: 116 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_d100d_110" target="_blank">Фахверковый дом Chalet 110 м² <br/> в Москве</a><br>' +
        '<span class="description">Фахверковая надстройка в стиле шале</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Chalet 110 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_d100d_110" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Chalet 110 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.798934556460395,55.96966921617143], {
        // Номер клиента в таблице: 292 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Уфе</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Уфе"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.274961353053364,37.270582829201096], {
        // Номер клиента в таблице: 280 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Москве</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.958803798459904,82.78849749609374], {
        // Номер клиента в таблице: 276 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Новосибирске</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Новосибирске"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.65055252772153,39.67616237109375], {
        // Номер клиента в таблице: 223 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Сочи</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.499471772827334,85.1744999326171], {
        // Номер клиента в таблице: 99 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Томске</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Томске"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.335532845599516,34.81732419531247], {
        // Номер клиента в таблице: 98 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_alpha_82" target="_blank">Фахверковый дом Alpha 82 м² <br/> в Крыму</a><br>' +
        '<span class="description">Стильный дом для дачи и базы отдыха</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409146/78428648/30834264.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Alpha 82 м² в Крыму"> <br/> ' +           
        '<b><a href = "#popup:stepform_alpha_82" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.4954469789055,37.072414148437495], {
        // Номер клиента в таблице: 288 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.93423040749482,37.039455164062495], {
        // Номер клиента в таблице: 180 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.93885533589482,37.627223718749974], {
        // Номер клиента в таблице: 150 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([45.15795709332898,39.21900959423822], {
        // Номер клиента в таблице: 141 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([52.236451624598836,104.4162358662109], {
        // Номер клиента в таблице: 124 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Иркутске</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Иркутске"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.686763209091296,38.14083455859373], {
        // Номер клиента в таблице: 122 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_barn_135" target="_blank">Фахверковый дом Bergen Barn 135 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный дом с европейскими корнями</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286693/6e95a04b/31027429.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Barn 135 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_barn_135" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Barn 135 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.97891482658088,37.992519128906245], {
        // Номер клиента в таблице: 300 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_d100d_110" target="_blank">Фахверковый дом Chalet 110 м² <br/> в Москве</a><br>' +
        '<span class="description">Фахверковая надстройка в стиле шале</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Chalet 110 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_d100d_110" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Chalet 110 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.86855892538991,61.05475703515614], {
        // Номер клиента в таблице: 286 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Екатеренбурге</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Екатеренбурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([59.90083477787437,29.732237146484263], {
        // Номер клиента в таблице: 197 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.72714447331985,37.0995327976227], {
        // Номер клиента в таблице: 183 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.95278672781832,38.10752840309146], {
        // Номер клиента в таблице: 182 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([56.04520739322234,37.239865300703606], {
        // Номер клиента в таблице: 177 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.851019167081496,38.18194293742235], {
        // Номер клиента в таблице: 145 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.112783895084846,33.30184944001783], {
        // Номер клиента в таблице: 136 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Сафоново</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Сафоново"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещен��е левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.24203795169709,37.643703210937474], {
        // Номер клиента в таблице: 128 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([54.38762178629673,48.36247835710845], {
        // Номер клиента в таблице: 127 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Ульяновске</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Ульяновске"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.88177578958446,38.066676843749974], {
        // Номер клиента в таблице: 114 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.59355523234635,37.61898397265624], {
        // Номер клиента в таблице: 94 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([54.802555051350915,55.80975819140619], {
        // Номер клиента в таблице: 89 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Уфе</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Уфе"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([43.12115237071117,131.97132959472648], {
        // Номер клиента в таблице: 71 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Владивостоке</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Владивостоке"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.584222181163646,37.79476522265623], {
        // Номер клиента в таблице: 63 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594759760/00e4950a/31077252.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([56.77895153195647,60.27747432031239], {
        // Номер клиента в таблице: 61 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Екатеренбурге</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Екатеренбурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.88023192794727,37.62447713671873], {
        // Номер клиента в таблице: 57 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([44.97101284500956,38.883405505798116], {
        // Номер клиента в таблице: 49 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([54.65200740496494,20.43087615576174], {
        // Номер клиента в таблице: 47 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Калининграде</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Калининграде"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.07809453703544,37.49249924678274], {
        // Номер клиента в таблице: 34 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.93806549606559,37.59453037380591], {
        // Номер клиента в таблице: 32 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.57667081474362,37.45198649065962], {
        // Номер клиента в таблице: 25 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.57355870125172,37.910665689878385], {
        // Номер клиента в таблице: 17 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.68233536186372,38.12215250628462], {
        // Номер клиента в таблице: 15 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.678466718418996,39.74345363085937], {
        // Номер клиента в таблице: 15 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Сочи</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.678466718418996,39.74345363085937], {
        // Номер клиента в таблице: 13 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Сочи</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([48.45555032004309,135.18781836035146], {
        // Номер клиента в таблице: 5 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Хабаровске</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Хабаровске"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.71134880487249,39.64045680468748], {
        // Номер клиента в таблице: 3 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi 205 м² <br/> в Сочи</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1594286887/3da7884d/31027455.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi 205 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.66382192858298,38.375920562199404], {
        // Номер клиента в таблице: 295 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.7298690199494,38.63296565213931], {
        // Номер клиента в таблице: 290 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.721320847993724,36.84197421447795], {
        // Номер клиента в таблице: 281 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.74996701226793,37.42785202815917], {
        // Номер клиента в таблице: 264 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([64.51011529121574,40.437308554687434], {
        // Номер клиента в таблице: 262 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Архангельске</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Архангельске"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.767363397028284,37.33883260546874], {
        // Номер клиента в таблице: 251 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.767363397028284,37.33883260546874], {
        // Номер клиента в таблице: 212 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.15314602501769,33.79559567968748], {
        // Номер клиента в таблице: 208 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Крыму</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Крыму"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
       // .add(new ymaps.Placemark([50.811804207457726,-1.053747976074312], {
        // Номер клиента в таблице: 194 Нет фото
        // Зададим содержимое заголовка балуна.
        //balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Портсмуте</a><br>' +
        //'<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        //balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Портсмуте"> <br/> ' +           
        //'<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        //balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        //hintContent: 'Maxi UP 205 м²'
        //}, {
            // Опции.
            // Необходимо указать данный тип макета.
          //  iconLayout: 'default#image',
            // Своё изображение иконки метки.
            //iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            //iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [0, 0],
            //hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            //balloonCloseButton: true,
            //balloonOffset: [0, -0]
        //}))
        .add(new ymaps.Placemark([59.873455249843346,30.569008047151573], {
        // Номер клиента в таблице: 176 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.822223004771125,37.716419475055616], {
        // Номер клиента в таблице: 170 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.89945631668192,38.155872600055616], {
        // Номер клиента в таблице: 140 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([44.933744794843925,39.306904646189395], {
        // Номер клиента в таблице: 135 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.73862042185521,37.804412111636836], {
        // Номер клиента в таблице: 133 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.723536766894924,49.12057686523431], {
        // Номер клиента в таблице: 112 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Казани</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Казани"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([44.97403612251729,39.415368781443455], {
        // Номер клиента в таблице: 102 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.721560279734646,37.223733662211586], {
        // Номер клиента в таблице: 93 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.760296562918285,37.263559101664725], {
        // Номер клиента в таблице: 81 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.36033626439104,44.07384942773426], {
        // Номер клиента в таблице: 79 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Нижнем Новгороде</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Нижнем Новгороде"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.74773710658734,37.39703464919535], {
        // Номер клиента в таблице: 78 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.8683853290993,37.6304941218516], {
        // Номер клиента в таблице: 60 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.823289469197405,37.438477856564944], {
        // Номер клиента в таблице: 58 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.87156066352348,53.09082628222646], {
        // Номер клиента в таблице: 56 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Ижевске</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Ижевске"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.61741416381377,37.58237871638734], {
        // Номер клиента в таблице: 42 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.65159539346834,37.77463945857483], {
        // Номер клиента в таблице: 35 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.69970903850316,37.310467095293575], {
        // Номер клиента в таблице: 24 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.639169320346255,37.499981255449846], {
        // Номер клиента в таблице: 16 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.67148939617538,39.78053248828123], {
        // Номер клиента в таблице: 11 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Сочи</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.28243023669301,77.04259774842518], {
        // Номер клиента в таблице: 10 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Алма-Ате</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Алма-Ате"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.65261281120615,37.88814901171873], {
        // Номер клиента в таблице: 4 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_maxi_205" target="_blank">Фахверковый дом Bergen Maxi UP 205 м² <br/> в Москве</a><br>' +
        '<span class="description">Максимум комфорта для всей семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409166/74a4b0b4/30834266.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Maxi UP 205 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_maxi_205" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Maxi UP 205 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.14962730900754,30.515013025390505], {
        // Номер клиента в таблице: Нет в списке (условно: 13n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([56.76613290185923,60.66474238671862], {
        // Номер клиента в таблице: Нет в списке (условно: 6n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Екатеренбурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594758372/160ab62f/31077057.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Екатеренбурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.92045119493935,36.894373132568326], {
        // Номер клиента в таблице: Нет в списке (условно: 7n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Истре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594758596/ec3d17ae/31077095.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Истре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.84131195628887,37.96388101095282], {
        // Номер клиента в таблице: Нет в списке (условно: 8n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Балашихе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594758796/1c0f0be9/31077131.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Балашихе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([42.95741738608442,74.58444739941405], {
        // Номер клиента в таблице: Нет в списке (условно: 9n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Бишкеке</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594758963/b4e4afd1/31077144.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Бишкеке"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([53.960621199471014,32.91010931607605], {
        // Номер клиента в таблице: Нет в списке (условно: 10n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Бишкеке</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594759166/edf9cc09/31077181.jpg" height="220" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Бишкеке"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([45.098383208023286,38.877188877380306], {
        // Номер клиента в таблице: Нет в списке (условно: 11n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594759336/9ee60190/31077223.jpg" height="157" width="320" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.837665176131274,37.931324941406224], {
        // Номер клиента в таблице: Нет в списке (условно: 15n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Балашихе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594759510/62d24980/31077236.jpg" height="180" width="320" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Балашихе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([44.873202844849935,37.37297733642578], {
        // Номер клиента в таблице: Нет в списке (условно: 17n)
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Анапе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="220" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Анапе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.501683386258094,37.940334070312474], {
        // Номер клиента в таблице: 33
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="http://images.vfl.ru/ii/1594759864/e455c2f9/31077263.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.831887078454926,37.79566713484713], {
        // Номер клиента в таблице: 307 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.706499711434155,53.220602283203036], {
        // Номер клиента в таблице: 306 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Ижевске</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Ижевске"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.09892191360568,30.182676599609263], {
        // Номер клиента в таблице: 301 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.836978763267865,37.76180623828124], {
        // Номер клиента в таблице: 299 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([64.51569908729334,40.64374822596798], {
        // Номер клиента в таблице: 284 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Архангельске</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Архангельске"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.010106105027305,92.74842692480456], {
        // Номер клиента в таблице: 266 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Красноярске</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Красноярске"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.703827185038776,37.520107019531224], {
        // Номер клиента в таблице: 258 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([48.46349631568964,22.717861341308506], {
        // Номер клиента в таблице: 255 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Мукачево</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Мукачево"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.787502554346574,30.471067712890527], {
        // Номер клиента в таблице: 235 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.49259738625967,36.327465885206514], {
        // Номер клиента в таблице: 230 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Калуге</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Калуге"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.87868800465036,37.520107019531224], {
        // Номер клиента в таблице: 224 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.94694832411362,83.17851214453125], {
        // Номер клиента в таблице: 220 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Новосибирске</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Новосибирске"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([61.71628137896607,50.76776717187493], {
        // Номер клиента в таблице: 209 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Сыктывкаре</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Сыктывкаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.750327290406986,37.393764246093724], {
        // Номер клиента в таблице: 191 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.900297320271434,37.56130574999998], {
        // Номер клиента в таблице: 188 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([57.77272153859045,28.345979058105474], {
        // Номер клиента в таблице: 187 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Пскове</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Пскове"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.16275081493946,39.231238002575196], {
        // Номер клиента в таблице: 186 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.72863416217099,37.38552449999999], {
        // Номер клиента в таблице: 175 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([47.23318012204206,39.56430757542984], {
        // Номер клиента в таблице: 174 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Ростове-на-Дону</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Ростове-на-Дону"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.70692892247437,37.82772420703123], {
        // Номер клиента в таблице: 139 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_one_100" target="_blank">Фахверковый дом One 100 м² <br/> в Москве</a><br>' +
        '<span class="description">Классика одноэтажного фахверка</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 100 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_one_100" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 100 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.3658175661,37.04220174609374], {
        // Номер клиента в таблице: 312 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.3658175661,37.04220174609374], {
        // Номер клиента в таблице: 305 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Ижевске</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Ижевске"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.359559565190516,37.51736043749998], {
        // Номер клиента в таблице: 303 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.1626390680451,37.67684365917969], {
        // Номер клиента в таблице: 296 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Туле</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.78748734328149,38.393520105468724], {
        // Номер клиента в таблице: 294 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.88023192794727,37.86068319140623], {
        // Номер клиента в таблице: 278 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.13714419306051,40.531859635742165], {
        // Номер клиента в таблице: 277 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Владимире</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Владимире"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.11726104241869,37.54482625781248], {
        // Номер клиента в таблице: 270 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.96695368270938,60.46149531640615], {
        // Номер клиента в таблице: 265 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Екатеринбурге</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Екатеринбурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.618432473349046,37.60799764453123], {
        // Номер клиента в таблице: 261 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.48297118834893,37.20150350390624], {
        // Номер клиента в таблице: 259 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.233734629895686,29.80776815234364], {
        // Номер клиента в таблице: 257 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.501683386258094,37.382777917968745], {
        // Номер клиента в таблице: 253 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.84559913254832,30.721006677734277], {
        // Номер клиента в таблице: 248 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.61519745615961,30.43436015124062], {
        // Номер клиента в таблице: 244 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.9773748467428,36.586269128906245], {
        // Номер клиента в таблице: 239 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.42553530761836,49.59251224506258], {
        // Номер клиента в таблице: 234 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Самаре</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Самаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([52.55631850485642,39.69923432617183], {
        // Номер клиента в таблице: 233 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Липецке</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Липецке"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.166514650545714,38.278676339702365], {
        // Номер клиента в таблице: 232 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.207868158665434,37.21300251157737], {
        // Номер клиента в таблице: 231 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.75287298735027,30.035734460937398], {
        // Номер клиента в таблице: 225 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.04815021325498,36.70711873828123], {
        // Номер клиента в таблице: 222 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.19207161252583,39.09871761494908], {
        // Номер клиента в таблице: 219 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.17399228030262,37.803004968749995], {
        // Номер клиента в таблице: 218 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.153177419275735,37.67026453204326], {
        // Номер клиента в таблице: 217 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Туле</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.775104611378026,37.77553914843749], {
        // Номер клиента в таблице: 210 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Туле</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([52.20861940590744,104.19032949414063], {
        // Номер клиента в таблице: 200 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Иркутске</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Иркутске"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.45337137331103,24.844034908203092], {
        // Номер клиента в таблице: 193 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Таллине</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Таллине"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.309459774890534,38.127101648437474], {
        // Номер клиента в таблице: 190 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.511036137620515,37.66567586718749], {
        // Номер клиента в таблице: 171 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.13291078021833,61.57777843261717], {
        // Номер клиента в таблице: 164 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Челябинске</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Челябинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.17705643861512,37.37453817187498], {
        // Номер клиента в таблице: 163 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.34368196754805,37.83871053515624], {
        // Номер клиента в таблице: 155 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.13633424581923,38.914138988769466], {
        // Номер клиента в таблице: 144 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.77974859894775,37.01473592578123], {
        // Номер клиента в таблице: 119 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.092702565545444,36.660426843749974], {
        // Номер клиента в таблице: 118 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.13720322173734,37.24819539843749], {
        // Номер клиента в таблице: 103 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([45.04559799185949,39.30058727183931], {
        // Номер клиента в таблице: 101 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.921894554076665,37.35531209765624], {
        // Номер клиента в таблице: 51 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковый дом One 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Ваш идеальный гостевой дом</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409074/92e81670/30834247.jpg" height="200" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([44.751172120110915,33.5522073730468], {
        // Номер клиента в таблице: 282 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Севастополе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Севастополе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.90098514270582,35.85119552880857], {
        // Номер клиента в таблице: 283 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Твери</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Твери"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.178588425680445,37.37728475390623], {
        // Номер клиента в таблице: 275 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.06659194145878,36.87740682421873], {
        // Номер клиента в таблице: 272 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.729997724513744,30.1895430546874], {
        // Номер клиента в таблице: 269 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([51.75083021148596,36.09502702050776], {
        // Номер клиента в таблице: 267 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Курске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Курске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.31147483094412,38.1812319130859], {
        // Номер клиента в таблице: 263 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Сергев Посаде</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Сергев Посаде"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([53.184309328182685,45.11392304414562], {
        // Номер клиента в таблице: 254 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Пензе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Пензе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.34183768155824,37.2906924814007], {
        // Номер клиента в таблице: 236 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.79442414352639,30.122251794921763], {
        // Номер клиента в таблице: 213 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.21992887479241,37.179530847656245], {
        // Номер клиента в таблице: 199 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([63.29473596045798,25.000215499999996], {
        // Номер клиента в таблице: 196 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Финляндии</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Финляндии"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.865509498329544,38.493819063720665], {
        // Номер клиента в таблице: 192 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Ногинске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Ногинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.774033274897036,48.97057527123848], {
        // Номер клиента в таблице: 185 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Казани</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Казани"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.796166060828895,36.74055697585752], {
        // Номер клиента в таблице: 181 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([45.078714032938464,38.92924518994134], {
        // Номер клиента в таблице: 173 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([46.31983854408373,48.13071693457031], {
        // Номер клиента в таблице: 169 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Астрахани</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Астрахани"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.74256585426731,49.09797541772121], {
        // Номер клиента в таблице: 168 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Казани</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Казани"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.31415933322838,38.132594812499995], {
        // Номер клиента в таблице: 162 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([54.649618442115475,20.497480770019546], {
        // Номер клиента в таблице: 156 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Калининграде</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Калининграде"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.40490756185747,37.333339441406224], {
        // Номер клиента в таблице: 151 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([43.706367837680695,39.70500148242188], {
        // Номер клиента в таблице: 149 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Сочи</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.992771874552055,36.68789266406248], {
        // Номер клиента в таблице: 148 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([60.05431870363968,30.6125166874999], {
        // Номер клиента в таблице: 146 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([47.27330821017478,39.01172914952424], {
        // Номер клиента в таблице: 134 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Таганроге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Таганроге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.9881346158021,36.712611902343745], {
        // Номер клиента в таблице: 132 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.7223691456582,30.131864832031145], {
        // Номер клиента в таблице: 125 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.958044499638305,30.534239099609277], {
        // Номер клиента в таблице: 115 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.27345178028115,37.319606531249995], {
        // Номер клиента в таблице: 111 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.7698969882688,53.368231067382716], {
        // Номер клиента в таблице: 106 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Ижевске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Ижевске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([43.6306058173951,39.73521388476561], {
        // Номер клиента в таблице: 91 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Сочи</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.98007482845391,30.60153035937489], {
        // Номер клиента в таблице: 87 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([45.07555173654537,39.077217296874935], {
        // Номер клиента в таблице: 86 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([45.070199756681475,39.11154957226555], {
        // Номер клиента в таблице: 85 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([45.03223488017831,39.08957691601557], {
        // Номер клиента в таблице: 83 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([51.80052244565984,107.55633991967773], {
        // Номер клиента в таблице: 80 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Улан-Удэ</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Улан-Удэ"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([44.99814223662816,38.880836681640574], {
        // Номер клиента в таблице: 75 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.16043941207332,61.2832075097656], {
        // Номер клиента в таблице: 72 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Челябинске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Челябинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([60.743906517824136,46.31672147369378], {
        // Номер клиента в таблице: 64 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Великом Устюге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Великом Устюге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([42.9669472927382,74.58510438421021], {
        // Номер клиента в таблице: 64 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Бишкеке</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Бишкеке"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([44.862704463123336,37.33658512451172], {
        // Номер клиента в таблице: 59 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Анапе</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Анапе"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.677452432646064,36.74557088671874], {
        // Номер клиента в таблице: 46 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.3313862619068,36.84170125781249], {
        // Номер клиента в таблице: 45 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.77296252592528,30.633116052734266], {
        // Номер клиента в таблице: 43 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.88873943497179,37.41230094244385], {
        // Номер клиента в таблице: 40 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Кимрах</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Кимрах"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.07534382794726,37.286647546874974], {
        // Номер клиента в таблице: 39 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([59.87460932653309,30.567198083984273], {
        // Номер клиента в таблице: 37 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.7162326513332,38.80550741015624], {
        // Номер клиента в таблице: 36 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([54.49753226086053,48.8870733442902], {
        // Номер клиента в таблице: 31 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Ульяновске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Ульяновске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.22481874765617,38.37412543472463], {
        // Номер клиента в таблице: 30 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.39002869907274,37.12075278922872], {
        // Номер клиента в таблице: 27 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.756240014159076,36.375985004065235], {
        // Номер клиента в таблице: 26 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([50.603371560420676,137.1426067307159], {
        // Номер клиента в таблице: 23 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Комсомольске-на-Амуре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Комсомольске-на-Амуре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.68081494310292,60.35300532617175], {
        // Номер клиента в таблице: 22 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Екатеринбурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Екатеринбурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([56.48193520931397,36.81148885546874], {
        // Номер клиента в таблице: 21 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.638204713861214,40.658204956276045], {
        // Номер клиента в таблице: 20 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Гусь-Хрустальном</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Гусь-Хрустальном"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.405141870648485,38.102195173239494], {
        // Номер клиента в таблице: 302 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.59555448158941,38.8949177716132], {
        // Номер клиента в таблице: 297 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.18197614629956,37.64182473828125], {
        // Номер клиента в таблице: 293 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Туле</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.743863395363,29.847593591796777], {
        // Номер клиента в таблице: 291 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.150371434016726,47.163883173828054], {
        // Номер клиента в таблице: 289 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Чебоксарах</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Чебоксарах"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.15285007864435,127.28827549999998], {
        // Номер клиента в таблице: 252 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Амурской области</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Амурской области"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.80410045619712,36.493029757044646], {
        // Номер клиента в таблице: 227 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.12428440806171,29.958830164062398], {
        // Номер клиента в таблице: 157 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.829874262595965,27.3427978733196], {
        // Номер клиента в таблице: 131 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Минске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Минске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.343456716700885,37.785273864083635], {
        // Номер клиента в таблице: 129 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.26099885697612,38.16430218439612], {
        // Номер клиента в таблице: 113 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.05150028592402,37.4388364492042], {
        // Номер клиента в таблице: 109 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.81715801300578,37.18889748436045], {
        // Номер клиента в таблице: 108 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.725526789264514,36.856544206298736], {
        // Номер клиента в таблице: 97 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Звенигороде</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Звенигороде"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.81725516547679,30.7663252812499], {
        // Номер клиента в таблице: 96 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([44.93992750807141,38.85705759855468], {
        // Номер клиента в таблице: 90 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Краснодаре</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Краснодаре"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.3658175661,37.489894617187474], {
        // Номер клиента в таблице: 69 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.61863459020086,39.74894679492186], {
        // Номер клиента в таблице: 68 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Сочи</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.401781790138095,37.39101766406248], {
        // Номер клиента в таблице: 50 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.91563542193217,35.930159762207], {
        // Номер клиента в таблице: 41 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Твери</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Твери"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([43.67348300017979,39.683028826171864], {
        // Номер клиента в таблице: 28 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti UP 127 м² <br/> в Сочи</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti UP 127 м² в Сочи"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti UP 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.11743161241865,30.2829268437499], {
        // Номер клиента в таблице: 226 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_d100d_110" target="_blank">Фахверковый дом Chalet 110 м² <br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковая надстройка в стиле шале</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Chalet 110 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_d100d_110" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Chalet 110 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.38458560702676,38.110622156249974], {
        // Номер клиента в таблице: 18 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([54.68663758662747,39.734719574218694], {
        // Номер клиента в таблице: 14 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Рязани</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Рязани"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.7828442819168,36.946071374999995], {
        // Номер клиента в таблице: 8 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Москве</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.856620843333516,48.95852852539058], {
        // Номер клиента в таблице: 7 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Казани</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592409285/495fd9af/30834284.jpg" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Казани"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([48.5021156676055,135.07520849707024], {
        // Номер клиента в таблице: 6 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Хабаровске</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Хабаровске"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([52.61849904130625,38.557556079589816], {
        // Номер клиента в таблице: 1 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_opti_127" target="_blank">Фахверковый дом Bergen Opti 127 м² <br/> в Ельце</a><br>' +
        '<span class="description">Оптимальное решение загородной жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="150" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Opti 127 м² в Ельце"> <br/> ' +           
        '<b><a href = "#popup:stepform_opti_127" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]         
        }))
        .add(new ymaps.Placemark([55.90184038045691,37.912868249999995], {
        // Номер клиента в таблице: 249 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковая Баня 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный взгляд на баню</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковая Баня 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Баня 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.6945204891324,37.22896932421874], {
        // Номер клиента в таблице: 214 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковая Баня 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный взгляд на баню</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковая Баня 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Баня 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.60755063024257,37.21798299609373], {
        // Номер клиента в таблице: 120 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковая Баня 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный взгляд на баню</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковая Баня 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Баня 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.57021842478566,37.51736043749998], {
        // Номер клиента в таблице: 107 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_banya_62" target="_blank">Фахверковая Баня 62 м² <br/> в Москве</a><br>' +
        '<span class="description">Современный взгляд на баню</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковая Баня 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_banya_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Баня 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]        
        }))
        .add(new ymaps.Placemark([55.627757353747405,37.550319421874974], {
        // Номер клиента в таблице: 250 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_garage_62" target="_blank">Фахверковый Гараж 62 м²<br/> в Москве</a><br>' +
        '<span class="description">Гараж в котором хочется жить</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый Гараж 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_garage_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Гараж 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
        }))
        .add(new ymaps.Placemark([55.85706660345813,37.29214071093749], {
        // Номер клиента в таблице: 121 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_garage_62" target="_blank">Фахверковый Гараж 62 м²<br/> в Москве</a><br>' +
        '<span class="description">Гараж в котором хочется жить</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый Гараж 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_garage_62" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Гараж 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
        }))
        .add(new ymaps.Placemark([55.855521755101485,37.43221639453124], {
        // Номер клиента в таблице: 285 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.55309591005892,37.846950281249974], {
        // Номер клиента в таблице: 260 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.9490904782118,30.701780603515505], {
        // Номер клиента в таблице: 247 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([47.313681175768444,39.79765949331517], {
        // Номер клиента в таблице: 247 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Ростове-на-Дону</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Ростове-на-Дону"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([44.04427926717385,42.90115893139636], {
        // Номер клиента в таблице: 245 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Ессентуках</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Ессентуках"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.5434684995369,37.55631469923707], {
        // Номер клиента в таблице: 242 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.2240158587772,44.00930474999989], {
        // Номер клиента в таблице: 241 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Нижнем Новогороде</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Нижнем Новогороде"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.14248662037303,37.71460916210939], {
        // Номер клиента в таблице: 221 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Туле</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.168279987294426,37.39669229199221], {
        // Номер клиента в таблице: 216 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Туле</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Туле"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.024336463053615,92.7340073691405], {
        // Номер клиента в таблице: 205 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Красноярске</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Красноярске"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.15784242213945,30.47793416796864], {
        // Номер клиента в таблице: 202 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.20955024936964,61.257801625976555], {
        // Номер клиента в таблице: 184 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Челябинске</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Челябинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.356430192075415,37.68764852343748], {
        // Номер клиента в таблице: 178 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.00046807988799,36.65218709765624], {
        // Номер клиента в таблице: 166 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.618432473349046,36.899379480468745], {
        // Номер клиента в таблице: 165 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.71960716749271,20.63274993505859], {
        // Номер клиента в таблице: 158 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Калининграде</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Калининграде"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([57.15233542516494,65.74023217871093], {
        // Номер клиента в таблице: 138 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Тюмени</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: // '<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Тюмени"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([58.17210137556916,68.35852645507809], {
        // Номер клиента в таблице: 315 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Тобольске</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Тобольске"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.65245537335292,38.35729550699392], {
        // Номер клиента в таблице: 314 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.934074108723316,38.365535253087664], {
        // Номер клиента в таблице: 313 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.97413856592547,38.071650975743935], {
        // Номер клиента в таблице: 311 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.695524106619565,37.072337669094296], {
        // Номер клиента в таблице: 310 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.806879373027066,30.7663252812499], {
        // Номер клиента в таблице: 309 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.44864230034417,37.456935632812474], {
        // Номер клиента в таблице: 308 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.49388772208288,37.99526571093749], {
        // Номер клиента в таблице: 304 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.58088983343905,36.21556154248039], {
        // Номер клиента в таблице: 298 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Калуге</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Калуге"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.95053879516872,27.506946291992175], {
        // Номер клиента в таблице: 243 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Минске</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Минске"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.603011548755525,39.88578158593743], {
        // Номер клиента в таблице: 240 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Рязани</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Рязани"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([46.29747398754303,48.031839981445316], {
        // Номер клиента в таблице: 229 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Астрахани</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Астрахани"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([59.743863395363,30.217008874999884], {
        // Номер клиента в таблице: 215 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.85243187334208,37.71786092578123], {
        // Номер клиента в таблице: 211 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.00816274640757,37.602504480468745], {
        // Номер клиента в таблице: 207 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.83380606147985,37.18733700569887], {
        // Номер клиента в таблице: 206 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.20029138904582,43.88776849511709], {
        // Номер клиента в таблице: 198 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Нижнем Новогороде</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Нижнем Новогороде> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([54.19284926237916,37.90069009472658], {
        // Номер клиента в таблице: 195 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Туле</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Туле> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.49856530656668,37.43496297656249], {
        // Номер клиента в таблице: 189 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([56.00403465435029,37.708618706674926], {
        // Номер клиента в таблице: 179 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.95475690825919,37.96679741761241], {
        // Номер клиента в таблице: 160 Нет фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_midi_167" target="_blank">Фахверковый дом Bergen Midi 167 м²<br/> в Москве</a><br>' +
        '<span class="description">Фахверковый дом для большой семьи</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Midi 167 м² в Москве> <br/> ' +           
        '<b><a href = "#popup:stepform_midi_167" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Midi UP 167 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.14736948727303,34.280224065429636], {
        // Номер клиента в таблице: 161 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega 245 м²<br/> в Брянске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega 245 м² в Брянске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.14736948727303,34.280224065429636], {
        // Номер клиента в таблице: 287 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Брянске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Брянске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([53.342187642962394,34.2390253349609], {
        // Номер клиента в таблице: 287 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Брянске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Брянске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.061158309661856,37.35805867968748], {
        // Номер клиента в таблице: 279 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.61687811001194,37.43770955859373], {
        // Номер клиента в таблице: 271 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([50.22558924613592,57.28105601654067], {
        // Номер клиента в таблице: 256 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Актюбинске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Актюбинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([50.22558924613592,57.28105601654067], {
        // Номер клиента в таблице: 228 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Актюбинске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Актюбинске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.85750281798643,37.31039901489718], {
        // Номер клиента в таблице: 203 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Красногорске</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Красногорске"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.93885533589482,38.49789022265623], {
        // Номер клиента в таблице: 201 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.95118576765898,37.660182703124974], {
        // Номер клиента в таблице: 159 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.77200831090496,37.04494832812499], {
        // Номер клиента в таблице: 143 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.55776643007428,37.23720907031248], {
        // Номер клиента в таблице: 137 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.39552950178753,38.10787557421873], {
        // Номер клиента в таблице: 104 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Москве</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([60.222122915381014,30.513639734374884], {
        // Номер клиента в таблице: 126 Нет Фото
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:stepform_omega_245" target="_blank">Фахверковый дом Bergen Omega UP 245 м²<br/> в Санкт-Петербурге</a><br>' +
        '<span class="description">Новый уровень качества жизни</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: //'<img src="http://images.vfl.ru/ii/1592408889/13661f40/30834181.jpg" height="170" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Фахверковый дом Bergen Omega UP 245 м² в Санкт-Петербурге"> <br/> ' +           
        '<b><a href = "#popup:stepform_omega_245" target="_blank" style="font-size: 14px">➥ <u>Рассчитать стоимость строительства</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Omega UP 245 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }));
}
