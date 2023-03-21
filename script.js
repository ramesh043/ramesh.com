let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// scroll reveal
const typed = new Typed('#multiple', {
  strings: ['frotened developer', 'backend dev'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
