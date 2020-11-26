'use strict';


{
   let iconMenu = document.querySelector(".icon-menu");
   let body = document.querySelector("body");
   let menuBody = document.querySelector(".menu__body");
   if (iconMenu) {
      iconMenu.addEventListener("click", function () {
         iconMenu.classList.toggle("active");
         body.classList.toggle("lock");
         menuBody.classList.toggle("active");
      });
   }
}
{
   const btnPlay = document.querySelector('.player__btn-play');
   const button = document.querySelector('.player__button');
   const poster = document.querySelector('.player__poster');
   const video = document.querySelector('.player__video');
   btnPlay.addEventListener('click', function () {
      button.classList.add('play');
      poster.classList.add('play');
      video.play();
   });
   video.addEventListener('ended', function () {
      button.classList.remove('play');
      poster.classList.remove('play');
   });
}
$(document).ready(function () {
   $('.spoiler__title').click(function (event) {
      if ($('.spoiler__body').hasClass('one')) {
         $('.spoiler__title').not($(this)).removeClass('active');
         $('.spoiler__content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

$(document).ready(function () {
   $('.slider').slick({
      vertical: true,
      verticalSwiping: true,
      adaptiveHeight: true,
      adaptiveWidth: true,
      infinite: false,
      slidesToShow: 2,
      autoplay: 0,
      autoplaySpeed: 10000,
      draggable: false,
      waiteForAnimate: false,
   });

   $('.slider__text').each(function () {
      $(this).css('height');
      if (parseFloat($(this).css('height')) > 100) {
         $(this).parent().wrap("<div class='slider__wrapper'></div>");
      }
   });
});

let l = $('.slider-img .slider-img__item');
if (l.length < 4) {
   $('.slider-img__item:last-child').clone().prependTo('.slider-img');
   $('.slider-content__item:last-child').clone().prependTo('.slider-content');
}

$(document).ready(function () {
   $('.slider-img').slick({
      asNavFor: '.slider-content',
      infinite: false,
      slidesToShow: 3,
      initialSlide: 2,
      waiteForAnimate: false,
      variableWidth: true,
      centerMode: true,
      cssEase: 'ease-in',
      speed: 500,
      easing: 'liner',
      touchMove: false,
      swipeToSlide: false,
      touchThreshold: 7,
   });

   $('.slider-content').slick({
      asNavFor: '.slider-img',
      infinite: false,
      slidesToShow: 1,
      initialSlide: 2,
      speed: 500,
      cssEase: 'ease-in',
      waiteForAnimate: false,
      draggable: false,
      swipe: false,
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let form = document.getElementById('form');
   form.addEventListener('submit', formSend);


   async function formSend(e) {
      e.preventDefault();

      let error = formValidate();

      let formData = new FormData(form);

      if (error === 0) {
         form.classList.add('_sending');

         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
         });

         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('_sending');
         } else {
            alert('Error');
            form.classList.remove('_sending');
         }

      } else {
         alert('Fill in the required fields');
      }
   }

   function formValidate() {
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);


         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               formRemoveSuccess(input);
               error++;
            }
         } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
         } else {
            if (input.value === '') {
               formAddError(input);
               formRemoveSuccess(input)
               error++;
            }
         }
      }
      return error;
   }

   function inputSuccess() {
      let inputs = form.querySelectorAll('._req');
      let er = 0;
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         input.addEventListener("input", function () {
            if (input.validity.valid) {
               if (input.classList.contains('_error')) {
                  er = 1
                  formRemoveError(input);
               }
               formAddSuccess(input);
            }
            if (input.value === '' || input.value == '[A-Za-z]') {
               formRemoveSuccess(input);
               if (er) {
                  formAddError(input);
               }
            }
         }, false);
      }
   }
   inputSuccess();

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }

   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }

   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   function formAddSuccess(input) {
      input.classList.add('_success');
   }

   function formRemoveSuccess(input) {
      input.classList.remove('_success');
   }

   // placeholder======================================
   function placeHolder() {
      const input = form.querySelectorAll('input[data-txt]');
      const textArea = form.querySelectorAll('textarea[data-txt]');
      if (input) {
         for (let i = 0; i < input.length; i++) {
            let elem = input[i];
            addPlaceholder(elem);

            elem.addEventListener('focus', function () {
               removePlaceholder(elem);
            });

            elem.addEventListener('blur', function () {
               if (elem.value == '') {
                  addPlaceholder(elem);
               }
            });
         }
      }
      if (textArea) {
         for (let i = 0; i < textArea.length; i++) {
            let elem = textArea[i];
            addPlaceholder(elem);

            elem.addEventListener('focus', function () {
               removePlaceholder(elem);
            });

            elem.addEventListener('blur', function () {
               if (elem.value === '') {
                  addPlaceholder(elem);
               }
            });
         }
      }
   }
   placeHolder();

   function addPlaceholder(elem) {
      let dataTxt = elem.getAttribute('data-txt');
      elem.insertAdjacentHTML('afterend', `<div class="placeholder">${dataTxt}</div>`);
   }

   function removePlaceholder(elem) {
      if (elem.nextSibling) {
         elem.nextSibling.remove();
      }
   }

});