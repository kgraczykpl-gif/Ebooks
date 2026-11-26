// Link do koszyka wklej w zmienną CHECKOUT_URL po skonfigurowaniu produktu w Naffy.
const CHECKOUT_URL = '';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false');
}));
const notice = document.querySelector('.notice');
let noticeTimer;
document.querySelector('.buy-button').addEventListener('click', () => {
  if (CHECKOUT_URL.trim()) { window.location.href = CHECKOUT_URL; return; }
  notice.textContent = 'Sprzedaż demonstracyjna: dodaj link do koszyka w pliku script.js, aby uruchomić zakup. Żadna płatność nie została rozpoczęta.';
  notice.classList.add('show'); clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.classList.remove('show'), 6000);
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.12});
  document.querySelectorAll('section, .problem-card, .benefit, .inside-list article').forEach(el => {el.classList.add('reveal'); observer.observe(el);});
}
