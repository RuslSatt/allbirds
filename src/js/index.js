import '../scss/project-allbirds.scss';
import '../index.html'


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
    console.log (link)
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

    } else if (link.closest('#running')){
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

