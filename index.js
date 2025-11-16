const topbar = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  // cuando se baja más de 10px, activa el borde
  if (window.scrollY > 700) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});
