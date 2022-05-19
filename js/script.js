const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

const currentYear = new Date().getFullYear();
const copyright = document.querySelectorAll('.copyright');
copyright.forEach((element) => {
  element.innerHTML = `© ${currentYear} Gheorghe Tarcea`;
});
