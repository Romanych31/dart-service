"use strict";document.addEventListener("DOMContentLoaded",(function(){}));{let e=document.querySelector(".icon-menu"),t=document.querySelector("body"),s=document.querySelector(".menu__body");e&&e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("lock"),s.classList.toggle("active")}))}{const e=document.querySelector(".player__btn-play"),t=document.querySelector(".player__button"),s=document.querySelector(".player__poster"),i=document.querySelector(".player__video");e.addEventListener("click",(function(){t.classList.add("play"),s.classList.add("play"),i.play()})),i.addEventListener("ended",(function(){t.classList.remove("play"),s.classList.remove("play")}))}$(".spoiler__title").click((function(e){$(".spoiler__body").hasClass("one")&&($(".spoiler__title").not($(this)).removeClass("active"),$(".spoiler__content").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})),$(".slider").slick({vertical:!0,verticalSwiping:!0,adaptiveHeight:!0,adaptiveWidth:!0,infinite:!1,slidesToShow:2,autoplay:0,autoplaySpeed:1e4,draggable:!1,waiteForAnimate:!1}),$(".slider__text").each((function(){$(this).css("height"),parseFloat($(this).css("height"))>100&&$(this).parent().wrap("<div class='slider__wrapper'></div>")}));let l=$(".slider-img .slider-img__item");l.length<4&&($(".slider-img__item:last-child").clone().prependTo(".slider-img"),$(".slider-content__item:last-child").clone().prependTo(".slider-content")),$(".slider-img").slick({asNavFor:".slider-content",infinite:!1,slidesToShow:3,initialSlide:2,waiteForAnimate:!1,variableWidth:!0,centerMode:!0,cssEase:"ease-in",speed:500,easing:"liner",touchMove:!1,swipeToSlide:!1,touchThreshold:7}),$(".slider-content").slick({asNavFor:".slider-img",infinite:!1,slidesToShow:1,initialSlide:2,speed:500,cssEase:"ease-in",waiteForAnimate:!1,draggable:!1,swipe:!1});let form=document.getElementById("form");async function formSend(e){e.preventDefault();let t=formValidate(),s=new FormData(form);if(0===t){form.classList.add("_sending");let e=await fetch("sendmail.php",{method:"POST",body:s});if(e.ok){let t=await e.json();alert(t.message),form.reset(),form.classList.remove("_sending")}else alert("Error"),form.classList.remove("_sending")}else alert("Fill in the required fields")}function formValidate(){let e=0,t=document.querySelectorAll("._req");for(let s=0;s<t.length;s++){const i=t[s];formRemoveError(i),i.classList.contains("_email")?emailTest(i)&&(formAddError(i),formRemoveSuccess(i),e++):"checkbox"===i.getAttribute("type")&&!1===i.checked?(formAddError(i),e++):""===i.value&&(formAddError(i),formRemoveSuccess(i),e++)}return e}function inputSuccess(){let e=form.querySelectorAll("._req"),t=0;for(let s=0;s<e.length;s++){const i=e[s];i.addEventListener("input",(function(){i.validity.valid&&(i.classList.contains("_error")&&(t=1,formRemoveError(i)),formAddSuccess(i)),""!==i.value&&"[A-Za-z]"!=i.value||(formRemoveSuccess(i),t&&formAddError(i))}),!1)}}function formAddError(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}function formRemoveError(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")}function emailTest(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function formAddSuccess(e){e.classList.add("_success")}function formRemoveSuccess(e){e.classList.remove("_success")}form.addEventListener("submit",formSend),inputSuccess();