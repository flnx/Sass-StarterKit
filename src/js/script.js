$(document).ready(function () {
  /* -----------------------------------------------
                  MOBILE NAVIGATION     
  -------------------------------------------------- */

  $('.menu-wrapper').on('click', function () {
    if ($('.main-nav').hasClass('mobile-hide')) {
      $('.main-nav').removeClass('mobile-hide');
      $('.main-nav').addClass('mobile-show');
    } else {
      $('.main-nav').addClass('mobile-hide');
      $('.main-nav').removeClass('mobile-show');
    }

    $('.hamburger-menu').toggleClass('animate');
  });
});

// (function () {
//   $(".menu-wrapper").on("click", function () {
//     $(".hamburger-menu").toggleClass("animate");
//   });
// })();

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
