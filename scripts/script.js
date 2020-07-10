'use strict';


const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');

const closeModal = (event)=> {
    const target = event.target;
    if (target.classList.contains('modal__close') || 
        target === modalAdd ) {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    } else if (target.closest('.modal__close') || 
    target === modalItem) {
        modalItem.classList.add('hide');
    }

};

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide'),
    modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', closeModal);

catalog.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.card')) {
        modalItem.classList.remove('hide');
    }
});