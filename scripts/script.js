'use strict';


const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad');

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
});

modalAdd.addEventListener('click', (event)=> {
    const target = event.target;
    if (target.classList.contains('modal__close')) {
        modalAdd.classList.add('hide');
    }
});