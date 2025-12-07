document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');
  const Ticon = document.getElementById("TIcon");
  const Tmenu = document.getElementById("TMenu");
  // Переключаем класс .active
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    Ticon.classList.remove('active');
    Tmenu.classList.remove('active');
  });

  // Закрываем при клике вне меню
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== burger) {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  

  Ticon.addEventListener('click', (e) => {
    e.stopPropagation();
    Ticon.classList.toggle('active');
    Tmenu.classList.toggle('active');
    burger.classList.remove('active');
    navMenu.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!Tmenu.contains(e.target) && e.target !== Ticon) {
      Ticon.classList.remove('active');
      Tmenu.classList.remove('active');
    }
  });

  const body = document.body;
  const style1 = document.getElementById("delovoyS");
  const style2 = document.getElementById("defaultS");
  const style3 = document.getElementById("comicsS");

  function setFont(fontValue) {
  body.style.fontFamily = fontValue;
  localStorage.setItem('selectedFont', fontValue); // Сохраняем в браузере
  }

  // Обработчики кликов
  style1.addEventListener('click', (e) => {
    e.stopPropagation();
    setFont('"Bookman", serif');
  });

  style2.addEventListener('click', (e) => {
    e.stopPropagation();
    setFont('Arial, Helvetica, sans-serif');
  });

  style3.addEventListener('click', (e) => {
    e.stopPropagation();
    setFont('"Comic Sans MS", "Comic Sans", cursive');
  });

  const savedFont = localStorage.getItem('selectedFont');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
  }
  
  // Карусель с кнопочками
// === Карусель 1: Книги ===
{
  const grid = document.getElementById('catalogCaruselGrid');
  const cards = Array.from(grid.querySelectorAll('.book'));
  const prevBtn = document.getElementById('prev-books');
  const nextBtn = document.getElementById('next-books');

  let currentIndex = 0;
  let cardWidth = 0;
  let visibleCards = 0;

  function updateCardWidth() {
    const firstCard = cards[0];
    cardWidth = firstCard.offsetWidth + 30;
  }

  function updateVisibleCards() {
    const containerWidth = grid.parentElement.clientWidth;
    visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
  }

  function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    grid.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - visibleCards;
    }
    updateCarousel();
  }

  updateCardWidth();
  updateVisibleCards();
  updateCarousel();

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  window.addEventListener('resize', () => {
    updateCardWidth();
    updateVisibleCards();
    if (currentIndex > cards.length - visibleCards) {
      currentIndex = Math.max(0, cards.length - visibleCards);
    }
    updateCarousel();
  });
}

// === Карусель 2: Авторы ===
{
  const grid = document.getElementById('authorsGrid');
  const cards = Array.from(grid.querySelectorAll('.author-card'));
  const prevBtn = document.getElementById('prev-authors');
  const nextBtn = document.getElementById('next-authors');

  let currentIndex = 0;
  let cardWidth = 0;
  let visibleCards = 0;

  function updateCardWidth() {
    const firstCard = cards[0];
    cardWidth = firstCard.offsetWidth + 30;
  }

  function updateVisibleCards() {
    const containerWidth = grid.parentElement.clientWidth;
    visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
  }

  function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    grid.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - visibleCards;
    }
    updateCarousel();
  }

  updateCardWidth();
  updateVisibleCards();
  updateCarousel();

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  window.addEventListener('resize', () => {
    updateCardWidth();
    updateVisibleCards();
    if (currentIndex > cards.length - visibleCards) {
      currentIndex = Math.max(0, cards.length - visibleCards);
    }
    updateCarousel();
  });
}
});
