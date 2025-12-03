document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');

  // Переключаем класс .active
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Закрываем при клике вне меню
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== burger) {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  

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

  // Инициализация
  updateCardWidth();
  updateVisibleCards();
  updateCarousel();

  // Обработчики
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Адаптивность
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

  // Инициализация
  updateCardWidth();
  updateVisibleCards();
  updateCarousel();

  // Обработчики
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Адаптивность
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
