const topNav = document.querySelector('.top_nav');

window.addEventListener('scroll', function() {
  let posY = window.scrollY;

  if(posY > 70) {
    topNav.classList.add('menu__active');
  } else {
    topNav.classList.remove('menu__active');
  }
})