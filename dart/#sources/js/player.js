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