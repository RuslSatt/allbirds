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

const swipeLeft = document.querySelector('.swipe-left');
const swipeRight = document.querySelector('.swipe-right');
const swipeShopRow = document.querySelectorAll('.swiper-shop__row');
const swiperRow = document.querySelector('.swiper-shop__row-wrapper');


let click = 0;
let swipe = 0;

const cardArray = [
    {
        img: './assets/images/swiper-one-1.png',
        subtitle: 'New Arrivals',
        text: 'The latest styles and limited edition colors that you can only find here (while\n' +
            '                                        they\n' +
            '                                        last,\n' +
            '                                        that is).'
    },
    {
        img: './assets/images/swiper-one-2.png',
        subtitle: 'Natural Run Collection',
        text: 'Looking for more sustainable ways to break a sweat? We’ve got you covered\n' +
            '                                            from head\n' +
            '                                            to\n' +
            '                                            toe'
    },
    {
        img: './assets/images/swiper-one-3.png',
        subtitle: 'Fresh Long Sleeve Tee Colors',
        text: 'It’s crisp, clean and ready for wherever the day takes you.',
    },
    {
        img: './assets/images/swiper-one-1.png',
        subtitle: 'New Arrivals',
        text: 'The latest styles and limited edition colors that you can only find here (while\n' +
            '                                        they\n' +
            '                                        last,\n' +
            '                                        that is).'
    },
    {
        img: './assets/images/swiper-one-2.png',
        subtitle: 'Natural Run Collection',
        text: 'Looking for more sustainable ways to break a sweat? We’ve got you covered\n' +
            '                                            from head\n' +
            '                                            to\n' +
            '                                            toe'
    },
    {
        img: './assets/images/swiper-one-3.png',
        subtitle: 'Fresh Long Sleeve Tee Colors',
        text: 'It’s crisp, clean and ready for wherever the day takes you.',
    },
]

if (window.innerWidth < 1150 && window.innerWidth > 767) {

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
        items3.innerHTML = `<img src=${cardArray[i].img} alt="">`;
        items2.appendChild(items3);

        let textItems = document.createElement('div');
        textItems.classList.add('swiper-shop__subtitle');
        textItems.innerHTML = `${cardArray[i].subtitle}`
        items2.appendChild(textItems);

        let textItems2 = document.createElement('div');
        textItems2.classList.add('swiper-shop__text');
        textItems2.innerHTML = `${cardArray[i].text}`
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
} else if (window.innerWidth < 768) {
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
            items3.innerHTML = `<img src=${cardArray[index].img} alt="">`;
            items2.appendChild(items3);

            let textItems = document.createElement('div');
            textItems.classList.add('swiper-shop__subtitle');
            textItems.innerHTML = `${cardArray[index].subtitle}`
            items2.appendChild(textItems);

            let textItems2 = document.createElement('div');
            textItems2.classList.add('swiper-shop__text');
            textItems2.innerHTML = `${cardArray[index].text}`
            items2.appendChild(textItems2);
        }
    })
}

const moveRight = () => {
    if (window.innerWidth > 1199) {
        if (click < 1) click += 1
        swiperRow.style.left = -100 + '%';
        swipeRight.src = './assets/images/swipe-right-disable.svg'
        swipeLeft.src = './assets/images/swipe-left.svg'
    }

    if (window.innerWidth < 1200 && window.innerWidth > 767) {
        if (click < 2) {
            click += 1
            swipe += 100
        }
        if (click === 2) {
            swipeRight.src = './assets/images/swipe-right-disable.svg'
            swipeLeft.src = './assets/images/swipe-left.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    } else if (window.innerWidth < 768) {
        if (click < 5) {
            click += 1
            swipe += 100
        }
        if (click === 5) {
            swipeRight.src = './assets/images/swipe-right-disable.svg'
            swipeLeft.src = './assets/images/swipe-left.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    }
}
const moveLeft = () => {
    if (window.innerWidth > 1199) {
        if (click === 1) {
            swiperRow.style.left = 0;
        }
        click = 0
        swipeRight.src = './assets/images/swipe-right.svg'
        swipeLeft.src = './assets/images/swipe-left-disable.svg'
    }
    if (window.innerWidth < 1200 && window.innerWidth > 767) {
        if (click < 3) {
            click -= 1
            swipe -= 100
        }
        if (click === 0) {
            swipeRight.src = './assets/images/swipe-right.svg'
            swipeLeft.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    } else if (window.innerWidth < 768) {
        if (click < 6) {
            click -= 1
            swipe -= 100
        }
        if (click === 0) {
            swipeRight.src = './assets/images/swipe-right.svg'
            swipeLeft.src = './assets/images/swipe-left-disable.svg'
        }
        swiperRow.style.left = '-' + swipe + '%';
    }
}

swipeRight.addEventListener('click', moveRight)
swipeLeft.addEventListener('click', moveLeft)



