"use strict"

const popupOpen = document.querySelectorAll('.popup-btn');
const popupClose = document.querySelector('.popup-video__btn')
const popupVideo = document.querySelector('.popup-video');


function openPopup(e) { //открытие popup
    e.preventDefault();
    popupVideo.classList.add('popup-video--active');
}

function closePopup() { //закрытие popup
    popupVideo.classList.remove('popup-video--active');
}

popupOpen.forEach(function(element){
    element.addEventListener('click', openPopup);
});

popupClose.addEventListener('click', closePopup);