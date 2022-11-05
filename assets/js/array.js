// база данных объявлений

const items = [
    {
        id: 0,
        type: "service",
        title: "Сделать что-то",
        category: "service",
        hotmark: "star",
        price: "50 900",
        date: "2022-11-02",
        address: "Санкт-Петербург, ст. м. Маяковская",
        typeExample: "одноэтапное",
        typePublic: "горящее",
        response: {pict: "response", oldResponse: 4, newResponse: 1},
        views: {pict: "views", views: 211},
        favorite: {pict: "favorite", favorite: 1},
        likes: {pict: "likes", likes: 2},
        percent: 39,
    }, 
    {
        id: 1,
        type: "trade",
        title: "Куплю планшет Samsung",
        category: "trade",
        hotmark: "star",
        photo: ["https://www.droidguides.com/wp-content/uploads/2017/05/Galaxy-Tab-A-10.1-Updated-To-Android-7.0-Nougat.png", "https://www.sammobile.com/wp-content/uploads/2015/11/samsung-galaxy-view.jpg", "https://korallmicro.ru/magic/filebrowser_uploads/tehnoblok/novosti_i_obzory_o_planshetah/samsung-galaxy-tab-s4.jpg"],
        price: "5 000",
        date: "2022-10-09",
        address: "Санкт-Петербург, ст. м. Лесная",
        visibility: "всем зарегистрированным",
        typePublic: "премиум",
        bid: {pict: "bid", bid: 3},
        views: {pict: "views", views: 23},
        favorite: {pict: "favorite", favorite: 0},
        percent: 21,
    },
    {
        id: 2,
        type: "trade",
        title: "Продам кроссовки",
        category: "trade",
        hotmark: "top",
        photo: ["https://хасл.рф/components/com_jshopping/files/img_products/5241/reebok-zprint-run-5241-1.jpg", "https://outmaxshop.ru/components/com_jshopping/files/img_products/2845/nike-kaishi-2845-1.jpg", "https://sportadvice.ru/sites/default/files/luchshie_krossovki_dlya_fitnesa_16.jpg", "https://i.pinimg.com/originals/e4/2a/90/e42a9072bffadbe4d052c47575b13b4d.jpg", "http://www.jumpmankicks.com/shoegallery/nike_air_max_90_hyperfuse/2012/wine_crimson/nike_air_max_90_hyperfuse_wine_crimson-1.jpg"],
        price: "2 102",
        date: "2022-10-30",
        address: "Санкт-Петербург, ст. м. Удельная",
        visibility: "всем зарегистрированным",
        typePublic: "поднятие в топ",
        bid: {pict: "bid", bid: 3},
        views: {pict: "views", views: 23},
        favorite: {pict: "favorite", favorite: 0},
        percent: 21,
    },
    {
        id: 3,
        type: "work",
        title: "Художник",
        category: "job",
        status: "moderation",
        price: "100 000",
        date: "2022-10-15",
        work: {pict: "company", name: "ООО “АТ-ВОРК”"},
        address: "Санкт-Петербург, ст. м. Академическая",
        visibility: "открытая",
        typePublic: "бесплатная",
        response: {pict: "response", oldResponse: 4, newResponse: 5},
        invites: {pict: "bid", invites: 14},
        views: {pict: "views", views: 263},
        likes: {pict: "likes", likes: 10},
        percent: 78,
    },
    {
        id: 4,
        type: "service",
        title: "Просто котятки",
        price: "0",
        photo: ["https://ie.wampi.ru/2022/11/05/BEZ-IMENI-1.png", "https://kartinkof.club/uploads/posts/2022-03/1648326164_31-kartinkof-club-p-mem-nevduplenish-kotenok-33.jpg", "https://avatars.dzeninfra.ru/get-zen_brief/7067868/pub_62fe0840696c5e75fd89bdd5_62fe085db8346d7a59224c6e/lazy_smart_crop_720x356", "https://avatars.mds.yandex.net/get-pdb/1381440/3dc8fe52-add2-420e-8400-d6a9513bd6e8/s1200", "https://cs12.pikabu.ru/post_img/2022/01/24/8/og_og_1643026007253980635.jpg", "https://celes.club/uploads/posts/2021-12/1638591416_1-celes-club-p-ochen-milie-kotyata-do-slyoz-zhivotnie-kra-1.jpg"],
        date: "2022-11-05",
        address: "Санкт-Петербург, ст. м. Зениит",
        typeExample: "красивое",
        typePublic: "милое",
        views: {pict: "views", views: 100500},
        favorite: {pict: "favorite", favorite: 4000},
        percent: 100,
    },
]

// Функции кликов динамического контента

const openSettungs = (id) => {
    var threeDots = document.querySelectorAll("#three-dots");
    for (i=0; i<threeDots.length; i++) {
        threeDots[i].nextElementSibling.classList.remove("open")
    }
    document.getElementById(`settings-${id}`).classList.toggle("open");
}

const clickOption = (id, el) => {
    alert(`Кнопка "${el.innerHTML}" объявления#${id}`); 
    document.getElementById(`settings-${id}`).classList.remove("open");
}

const checkClickProduct = (id, el) => {
    alert(`Кнопка с картинкой "${el.getAttribute('name')}" объявления#${id}`); 
}

// функция отображения динамических элементов

const sortData = (arr, sort) => {

    var sort = document.getElementById("sort").value
    const items = JSON.parse(JSON.stringify(arr));

    items.forEach(item => {
        item.date = 31 - Math.round((Date.now() - Date.parse(item.date)) / (1000 * 3600 * 24))
    })

    items.forEach(item => {
        item.price = +item.price.replace(/\D/g, "")
    })

    if (sort == "По дате публикации ↑") {
        items.sort((a, b) => a.date > b.date ? 1 : -1)
    } else if (sort == "По дате публикации ↓") {
        items.sort((a, b) => a.date > b.date ? -1 : 1)
    } else if (sort == "По цене ↑") {
        items.sort((a, b) => a.price > b.price ? 1 : -1)
    } else if (sort == "По цене ↓") {
        items.sort((a, b) => a.price > b.price ? -1 : 1)
    }
    
    items.forEach(item => {
        item.price = item.price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    })

    document.querySelector(".for-ad").innerHTML = "";

    items.forEach((item, i) => {
        document.querySelector(".for-ad").innerHTML += `
            <div key="${i}" class="ad d-flex between pos-relative border-6px">
                <div class="for-img-info d-flex">
                    <div id="for-photo-${i}" class="for-photo ${item.status ? `moderation` : ``} border-6px pos-relative">
                        <input id="product" class="pos-absolute" type="checkbox"/>
                        ${item.category ? 
                            `<img class="category-img pos-absolute" src="assets/img/category-${item.category}.svg"/>` : ""
                        }
                        ${item.hotmark ? 
                            `<div class="hotmark d-flex pos-absolute">
                                <img src="assets/img/${item.hotmark}.svg"/>
                            </div>` : ""
                        }
                        ${item.status ? 
                            `<p class="moderation pos-absolute">На модерации</p>` : ""
                        }
                        ${item.photo ?
                            `<div id="for-slider-${i}" class="for-slider vertical-center slider"></div>` : ""
                        }
                    </div>
                    <div class="about-service">
                        <h2 class="${item.type}">${item.title}</h2>
                        <h3>${item.price == 0 ? "Бесплатно" : `${item.price} ₽`}</h3>
                        ${item.work ? 
                            `<div class="info-company d-flex items-center">
                                <img src="assets/img/${item.work.pict}.svg"/>
                                <div>
                                    <p class="company">${item.work.name}</p>
                                    <p>${item.address}</p>
                                </div>
                            </div>` : ""
                        }
                        ${item.date <= 0 ? `<p>Время истекло</p>` : `<p>Осталось ${item.date} дней</p>`}
                        ${item.work ? `` : `<p>${item.address}</p>`}
                        ${item.typeExample ? 
                            `<p>Тип задания: ${item.typeExample}</p>` : ""
                        }
                        ${item.visibility ? 
                            `<p>Видимость: <b>${item.visibility}</b></p>` : ""}
                        <p>Тип публикации: ${item.typePublic}</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="info-service">
                        ${item.bid ? 
                            `<p class="d-flex items-center"><img src="assets/img/${item.bid.pict}.svg"/>Предложения ${item.bid.bid}</p>` : ""
                        }
                        ${item.response ? 
                            `<p class="d-flex items-center"><img src="assets/img/${item.response.pict}.svg"/>Отклики ${item.response.oldResponse}&nbsp
                                ${item.response.newResponse != 0 ? `<span class="${item.type}">+${item.response.newResponse}</span>` : ""}
                            </p>` : ""
                        }
                        ${item.invites ? 
                            `<p class="d-flex items-center"><img src="assets/img/${item.invites.pict}.svg"/>Приглашены ${item.invites.invites}</p>` : ""
                        }
                        <p class="d-flex items-center"><img src="assets/img/${item.views.pict}.svg"/>${item.views.views} просмотров</p>
                        ${item.favorite ? 
                            `<p class="d-flex items-center"><img src="assets/img/${item.favorite.pict}.svg"/>В избранном ${item.favorite.favorite}</p>` : ""
                        }
                        ${item.likes ? 
                            `<p class="d-flex items-center"><img src="assets/img/${item.likes.pict}.svg"/>Подходят ${item.likes.likes}</p>` : ""
                        }
                        <div class="for-percent d-flex items-center">
                            <div class="percent">
                                <div style="width: ${item.percent}%"></div>
                            </div>
                            <p>${item.percent}%</p>
                        </div>
                    </div>
                    <div class="for-buttons d-flex between">
                        <button name="загрузки" onclick='checkClickProduct(${i}, this)' class="quad-btn border-6px d-flex">
                            <img class="margin-auto" src="assets/img/up.svg"/>
                        </button>
                        <button name="карандашика" onclick='checkClickProduct(${i}, this)' class="quad-btn border-6px d-flex">
                            <img class="margin-auto" src="assets/img/pen.svg"/>
                        </button>
                        <button name="облачка" onclick='checkClickProduct(${i}, this)' class="quad-btn border-6px d-flex">
                            <img class="margin-auto" src="assets/img/cloud.svg"/>
                        </button>
                        <div class="three-dots pos-relative">
                            <button id="three-dots" onclick='openSettungs(${i})' class="quad-btn border-6px d-flex">
                                <img class="margin-auto" src="assets/img/dots.svg"/>
                            </button>
                            <div id="settings-${i}" class="pos-absolute border-6px transition_0_3">
                                <p onclick='clickOption(${i}, this)' class="transition_0_3 border-6px cursor-pointer">Передать</p>
                                <p onclick='clickOption(${i}, this)' class="transition_0_3 border-6px cursor-pointer">Продлевать</p>
                                <p onclick='clickOption(${i}, this)' class="transition_0_3 border-6px cursor-pointer">В архив</p>
                                <p onclick='clickOption(${i}, this)' class="transition_0_3 border-6px cursor-pointer">Поделиться</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    for (i=0; i < items.length; i++) {
        if (items[i].photo) {
                items[i].photo.forEach((item, index) => {
                    document.getElementById(`for-slider-${i}`).innerHTML += `
                    <img src="${items[i].photo[index]}" class="slider-photo" id="slider-photo-${index}"></img>
                ` 
            }) 
        }
    }

    // Чекбоксы динамических элеметнов

    document.getElementById('count-active').innerHTML = items.length;

    var ChekProducts = document.getElementById('all-products');
    var ArrayCheckProduct = document.querySelectorAll("#product");

    ChekProducts.checked = false
    
    ChekProducts.onchange = () => {
        if (ChekProducts.checked) {
            for (i=0; i<ArrayCheckProduct.length; i++ ) {
                ArrayCheckProduct[i].checked = true;
            }
        } else {
            for (i=0; i<ArrayCheckProduct.length; i++ ) {
                ArrayCheckProduct[i].checked = false;
            }
        }
    }

    ArrayCheckProduct.forEach((checker) => {
        checker.onchange = () => {
            var count = 0
            if (checker.checked == false) ChekProducts.checked = false; 
            for (i=0; i<ArrayCheckProduct.length; i++) {
                if (ArrayCheckProduct[i].checked) count += 1 
            }
            if (count == ArrayCheckProduct.length) ChekProducts.checked = true;
        }
    })
}