const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const mobile_btn = document.querySelector('.mobile-btn')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active'); 
  mobile_btn.classList.toggle('is-active');
});

