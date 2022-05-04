import '../scss/project-allbirds.scss';
import '../index.html'
import '../assets/images/swipe-left-disable.svg'
import '../assets/images/swipe-right-disable.svg'
import '../assets/images/swipe-left.svg'


const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
})

const linksLeft = document.querySelectorAll('[data-num = link]');

linksLeft.forEach(linkLeft => {
    linkLeft.addEventListener('click', function (e) {
        if (iconMenu.classList.contains('active')) {
            iconMenu.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('lock');
        }
    })
})

// ==================== tabs ==================== //

const blockTopParent = document.querySelector('.block-top__tab');
const everyday = document.querySelector('#everyday');
const travel = document.querySelector('#travel');
const running = document.querySelector('#running');
const columns = document.querySelectorAll('.main-tabs__column')

const addActiveBlockLink = (e) => {
    const link = e.target;
    console.log(link)
    if (link.closest('#everyday')) {
        everyday.classList.add('active-tab');
        travel.classList.remove('active-tab');
        running.classList.remove('active-tab');

        columns.forEach(elem => {
            if (elem.closest('.not-active-column')) {
                elem.classList.remove('not-active-column');
            }
            elem.classList.add('active-column');
        })


    } else if (link.closest('#travel')) {
        travel.classList.add('active-tab');
        running.classList.remove('active-tab');
        everyday.classList.remove('active-tab');

        columns.forEach((elem, i) => {
            if (elem.closest('.not-active-column')) {
                elem.classList.remove('not-active-column');
            }
            if (i === 1) {
                elem.classList.add('not-active-column');
            }
        })

    } else if (link.closest('#running')) {
        running.classList.add('active-tab');
        travel.classList.remove('active-tab');
        everyday.classList.remove('active-tab');

        columns.forEach((elem, i) => {
            if (elem.closest('.not-active-column')) {
                elem.classList.remove('not-active-column');
            }
            if (i === 2) {
                elem.classList.add('not-active-column');
            }
        })
    }
}

blockTopParent.addEventListener('click', addActiveBlockLink);

// ==================== swiper ==================== //

import {cardsSwipeOne} from "./cards";
import {cardsSwipeTwo} from "./cards";

const swipeLeft = document.querySelector('.swipe-left');
const swipeRight = document.querySelector('.swipe-right');
const swipeShopRow = document.querySelectorAll('.swiper-shop__row');
const swiperRow = document.querySelector('.swiper-shop__row-wrapper');




let click = 0;
let swipe = 0;


if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {

    swipeShopRow.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        swiperRow.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row');

    const createElement = (elem, i) => {
        let items = document.createElement('div');
        items.classList.add('swiper-shop__column');
        elem.appendChild(items);

        let items2 = document.createElement('div');
        items2.classList.add('swiper-shop__card');
        items.appendChild(items2);

        let items3 = document.createElement('div');
        items3.classList.add('swiper-shop__image');
        items3.innerHTML = `<img src=${cardsSwipeOne[i].img} alt="">`;
        items2.appendChild(items3);

        let textItems = document.createElement('div');
        textItems.classList.add('swiper-shop__subtitle');
        textItems.innerHTML = `${cardsSwipeOne[i].subtitle}`
        items2.appendChild(textItems);

        let textItems2 = document.createElement('div');
        textItems2.classList.add('swiper-shop__text');
        textItems2.innerHTML = `${cardsSwipeOne[i].text}`
        items2.appendChild(textItems2);
    }


    cards.forEach((elem, index) => {
        if (index < 1) {
            for (let i = 0; i < 2; i++) {
                createElement(elem, i);
            }
        } else if (index === 1) {
            for (let i = 2; i < 4; i++) {
                createElement(elem, i);
            }
        } else {
            for (let i = 4; i < 6; i++) {
                createElement(elem, i);
            }
        }

    })
} else if (window.matchMedia("(max-width: 768px)").matches) {
    swipeShopRow.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 6; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        swiperRow.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row');


    cards.forEach((elem, index) => {
        for (let i = 0; i < 1; i++) {
            let items = document.createElement('div');
            items.classList.add('swiper-shop__column');
            elem.appendChild(items);

            let items2 = document.createElement('div');
            items2.classList.add('swiper-shop__card');
            items.appendChild(items2);

            let items3 = document.createElement('div');
            items3.classList.add('swiper-shop__image');
            items3.innerHTML = `<img src=${cardsSwipeOne[index].img} alt="">`;
            items2.appendChild(items3);

            let textItems = document.createElement('div');
            textItems.classList.add('swiper-shop__subtitle');
            textItems.innerHTML = `${cardsSwipeOne[index].subtitle}`
            items2.appendChild(textItems);

            let textItems2 = document.createElement('div');
            textItems2.classList.add('swiper-shop__text');
            textItems2.innerHTML = `${cardsSwipeOne[index].text}`
            items2.appendChild(textItems2);
        }
    })
}

const moveRight = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (click < 1) click += 1
        swiperRow.style.left = -100 + '%';
        swipeRight.src = './assets/images/swipe-right-disable.svg'
        swipeLeft.src = './assets/images/swipe-left.svg'
    }

    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (click < 2) {
            click += 1
            swipe += 100
            swipeLeft.src = './assets/images/swipe-left.svg'
        }
        if (click === 2) {
            swipeRight.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (click < 5) {
            click += 1
            swipe += 100
            swipeLeft.src = './assets/images/swipe-left.svg'
        }
        if (click === 5) {
            swipeRight.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    }
}
const moveLeft = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (click === 1) {
            swiperRow.style.left = 0;
        }
        click = 0
        swipeRight.src = './assets/images/swipe-right.svg'
        swipeLeft.src = './assets/images/swipe-left-disable.svg'
    }
    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (click < 3 && click > 0) {
            click -= 1
            swipe -= 100
            swipeRight.src = './assets/images/swipe-right.svg'
        }
        if (click === 0) {
            swipeLeft.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (click < 6 && click > 0) {
            click -= 1
            swipe -= 100
            swipeRight.src = './assets/images/swipe-right.svg'
        }
        if (click === 0) {
            swipeLeft.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    }
}

// -------------------- Second swiper --------------------------------------- //

swipeRight.addEventListener('click', moveRight)
swipeLeft.addEventListener('click', moveLeft)

const swipeLeftSecond = document.querySelector('.swipe-left-second');
const swipeRightSecond = document.querySelector('.swipe-right-second');

const swipeShopRowSecond = document.querySelectorAll('.swiper-shop__row-second');
const swiperRowSecond = document.querySelector('.swiper-shop__row-wrapper-second');

let clickSecond = 0;
let swipeSecond = 0;

if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {

    swipeShopRowSecond.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        card.classList.add('swiper-shop__row-second');
        swiperRowSecond.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row-second');

    const createElement = (elem, i) => {
        let items = document.createElement('div');
        items.classList.add('swiper-shop__column');
        elem.appendChild(items);

        let items2 = document.createElement('div');
        items2.classList.add('swiper-shop__card');
        items.appendChild(items2);

        let items3 = document.createElement('div');
        items3.classList.add('swiper-shop__image');
        items3.innerHTML = `<img src=${cardsSwipeTwo[i].img} alt="">`;
        items2.appendChild(items3);

        let textItems = document.createElement('div');
        textItems.classList.add('swiper-shop__subtitle');
        textItems.innerHTML = `${cardsSwipeTwo[i].subtitle}`
        items2.appendChild(textItems);

        let textItems2 = document.createElement('div');
        textItems2.classList.add('swiper-shop__text');
        textItems2.innerHTML = `${cardsSwipeTwo[i].text}`
        items2.appendChild(textItems2);
    }


    cards.forEach((elem, index) => {
        if (index < 1) {
            for (let i = 0; i < 2; i++) {
                createElement(elem, i);
            }
        } else if (index === 1) {
            for (let i = 2; i < 4; i++) {
                createElement(elem, i);
            }
        } else {
            for (let i = 4; i < 6; i++) {
                createElement(elem, i);
            }
        }

    })
} else if (window.matchMedia("(max-width: 768px)").matches) {
    swipeShopRowSecond.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 6; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        card.classList.add('swiper-shop__row-second');
        swiperRowSecond.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row-second');


    cards.forEach((elem, index) => {
        for (let i = 0; i < 1; i++) {
            let items = document.createElement('div');
            items.classList.add('swiper-shop__column');
            elem.appendChild(items);

            let items2 = document.createElement('div');
            items2.classList.add('swiper-shop__card');
            items.appendChild(items2);

            let items3 = document.createElement('div');
            items3.classList.add('swiper-shop__image');
            items3.innerHTML = `<img src=${cardsSwipeTwo[index].img} alt="">`;
            items2.appendChild(items3);

            let textItems = document.createElement('div');
            textItems.classList.add('swiper-shop__subtitle');
            textItems.innerHTML = `${cardsSwipeTwo[index].subtitle}`
            items2.appendChild(textItems);

            let textItems2 = document.createElement('div');
            textItems2.classList.add('swiper-shop__text');
            textItems2.innerHTML = `${cardsSwipeTwo[index].text}`
            items2.appendChild(textItems2);
        }
    })
}

const moveRightSecond = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (clickSecond < 1) clickSecond += 1
        swiperRowSecond.style.left = -100 + '%';
        swipeRightSecond.src = './assets/images/swipe-right-disable.svg'
        swipeLeftSecond.src = './assets/images/swipe-left.svg'
    }

    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (clickSecond < 2) {
            clickSecond += 1
            swipeSecond += 100
            swipeLeftSecond.src = './assets/images/swipe-left.svg'
        }
        if (clickSecond === 2) {
            swipeRightSecond.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRowSecond.style.left = '-' + swipeSecond + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (clickSecond < 5) {
            clickSecond += 1
            swipeSecond += 100
            swipeLeftSecond.src = './assets/images/swipe-left.svg'
        }
        if (clickSecond === 5) {
            swipeRightSecond.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRowSecond.style.left = '-' + swipeSecond + '%';
    }
}
const moveLeftSecond = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (clickSecond === 1) {
            swiperRowSecond.style.left = 0;
        }
        clickSecond = 0
        swipeRightSecond.src = './assets/images/swipe-right.svg'
        swipeLeftSecond.src = './assets/images/swipe-left-disable.svg'
    }
    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (clickSecond < 3 && clickSecond > 0) {
            clickSecond -= 1
            swipeSecond -= 100
            swipeRightSecond.src = './assets/images/swipe-right.svg'
        }
        if (clickSecond === 0) {
            swipeLeftSecond.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRowSecond.style.left = '-' + swipeSecond + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (clickSecond < 6 && clickSecond > 0) {
            clickSecond -= 1
            swipeSecond -= 100
            swipeRightSecond.src = './assets/images/swipe-right.svg'
        }
        if (clickSecond === 0) {
            swipeLeftSecond.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRowSecond.style.left = '-' + swipeSecond + '%';
    }
}

swipeRightSecond.addEventListener('click', moveRightSecond)
swipeLeftSecond.addEventListener('click', moveLeftSecond)


// -------------------- Third swiper --------------------------------------- //

import {cardsSwipeThree} from './cards'

const swipeLeftThird = document.querySelector('.swipe-left-third');
const swipeRightThird = document.querySelector('.swipe-right-third');

const swipeShopRowThird = document.querySelectorAll('.swiper-shop__row-third');
const swiperRowThird = document.querySelector('.swiper-shop__row-wrapper-third');

let clickThird = 0;
let swipeThird = 0;

if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {

    swipeShopRowThird.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        card.classList.add('swiper-shop__row-third');
        swiperRowThird.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row-third');

    const createElement = (elem, i) => {
        let items = document.createElement('div');
        items.classList.add('swiper-shop__column');
        elem.appendChild(items);

        let items2 = document.createElement('div');
        items2.classList.add('swiper-shop__card');
        items.appendChild(items2);

        let items3 = document.createElement('div');
        items3.classList.add('swiper-shop__image');
        items3.innerHTML = `<img src=${cardsSwipeThree[i].img} alt="">`;
        items2.appendChild(items3);

        let textItems = document.createElement('div');
        textItems.classList.add('swiper-shop__subtitle');
        textItems.innerHTML = `${cardsSwipeThree[i].subtitle}`
        items2.appendChild(textItems);

        let textItems2 = document.createElement('div');
        textItems2.classList.add('swiper-shop__text');
        textItems2.innerHTML = `${cardsSwipeThree[i].text}`
        items2.appendChild(textItems2);
    }


    cards.forEach((elem, index) => {
        if (index < 1) {
            for (let i = 0; i < 2; i++) {
                createElement(elem, i);
            }
        } else if (index === 1) {
            for (let i = 2; i < 4; i++) {
                createElement(elem, i);
            }
        } else {
            for (let i = 4; i < 6; i++) {
                createElement(elem, i);
            }
        }

    })
} else if (window.matchMedia("(max-width: 768px)").matches) {
    swipeShopRowThird.forEach(elem => {
        elem.remove()
    })

    for (let i = 0; i < 6; i++) {
        let card = document.createElement('div');
        card.classList.add('swiper-shop__row');
        card.classList.add('swiper-shop__row-third');
        swiperRowThird.appendChild(card)
    }

    const cards = document.querySelectorAll('.swiper-shop__row-third');


    cards.forEach((elem, index) => {
        for (let i = 0; i < 1; i++) {
            let items = document.createElement('div');
            items.classList.add('swiper-shop__column');
            elem.appendChild(items);

            let items2 = document.createElement('div');
            items2.classList.add('swiper-shop__card');
            items.appendChild(items2);

            let items3 = document.createElement('div');
            items3.classList.add('swiper-shop__image');
            items3.innerHTML = `<img src=${cardsSwipeThree[index].img} alt="">`;
            items2.appendChild(items3);

            let textItems = document.createElement('div');
            textItems.classList.add('swiper-shop__subtitle');
            textItems.innerHTML = `${cardsSwipeThree[index].subtitle}`
            items2.appendChild(textItems);

            let textItems2 = document.createElement('div');
            textItems2.classList.add('swiper-shop__text');
            textItems2.innerHTML = `${cardsSwipeThree[index].text}`
            items2.appendChild(textItems2);
        }
    })
}

const moveRightThird = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (clickThird < 1) clickThird += 1
        swiperRowThird.style.left = -100 + '%';
        swipeRightThird.src = './assets/images/swipe-right-disable.svg'
        swipeLeftThird.src = './assets/images/swipe-left.svg'
    }

    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (clickThird < 2) {
            clickThird += 1
            swipeThird += 100
            swipeLeftThird.src = './assets/images/swipe-left.svg'
        }
        if (clickThird === 2) {
            swipeRightThird.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRowThird.style.left = '-' + swipeThird + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (clickThird < 5) {
            clickThird += 1
            console.log (clickThird);
            swipeThird += 100
            swipeLeftThird.src = './assets/images/swipe-left.svg'
        }
        if (clickThird === 5) {
            swipeRightThird.src = './assets/images/swipe-right-disable.svg'
        }
        swiperRowThird.style.left = '-' + swipeThird + '%';
    }
}
const moveLeftThird = () => {
    if (window.matchMedia("(min-width: 1201px)").matches) {
        if (clickThird === 1) {
            swiperRowThird.style.left = 0;
        }
        clickThird = 0
        swipeRightThird.src = './assets/images/swipe-right.svg'
        swipeLeftThird.src = './assets/images/swipe-left-disable.svg'
    }
    if (window.matchMedia("(max-width: 1200px)").matches && window.matchMedia("(min-width: 769px)").matches) {
        if (clickThird < 3 && clickThird > 0) {
            clickThird -= 1
            swipeThird -= 100
            swipeRightThird.src = './assets/images/swipe-right.svg'
        }
        if (clickThird === 0) {
            swipeLeftThird.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRowThird.style.left = '-' + swipeThird + '%';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (clickThird < 6 && clickThird > 0) {
            clickThird -= 1
            swipeThird -= 100
            swipeRightThird.src = './assets/images/swipe-right.svg'
        }
        if (clickThird === 0) {
            swipeLeftThird.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRowThird.style.left = '-' + swipeThird + '%';
    }
}

swipeRightThird.addEventListener('click', moveRightThird)
swipeLeftThird.addEventListener('click', moveLeftThird)
