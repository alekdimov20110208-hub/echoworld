
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  // Проверяваме дали съществуват елементите преди да добавим слушател
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const gameAreaFall = document.getElementById('game-area-fall');
  const scoreElFall = document.getElementById('score-fall');
  const missedElFall = document.getElementById('missed-fall');

  let scoreFall = 0;
  let missedFall = 0;

  const trashTypes = [
    {src: 'bottle.png', class: 'bottle'},
    {src: 'can.png', class: 'can'},
    {src: 'paper.png', class: 'paper'}
  ];

  const clickSound = new Audio('pop-402324.mp3'); // звуков ефект при кликане

  function createTrash() {
    const trash = document.createElement('img');
    const type = trashTypes[Math.floor(Math.random() * trashTypes.length)];
    trash.src = type.src;
    trash.classList.add('falling-trash', type.class);

    trash.style.left = Math.random() * (gameAreaFall.offsetWidth - 40) + 'px';
    trash.style.top = '0px';
    gameAreaFall.appendChild(trash);

    let position = 0;
    const speed = 2 + Math.random() * 3;

    const fallInterval = setInterval(() => {
      position += speed;
      trash.style.top = position + 'px';
      if (position > gameAreaFall.offsetHeight - 40) {
        trash.remove();
        missedFall++;
        missedElFall.textContent = `Пропуснати предмети: ${missedFall}`;
        clearInterval(fallInterval);
      }
    }, 20);

    trash.addEventListener('click', () => {
      trash.remove();
      scoreFall++;
      scoreElFall.textContent = `Почистени предмети: ${scoreFall}`;
      clickSound.currentTime = 0;
      clickSound.play();
      clearInterval(fallInterval);
    });
  }

  // Създава нов боклук на всеки 1.5 секунди
  setInterval(createTrash, 1500);
});

// ❗ Замени с твоите ключове от EmailJS
const EMAIL_PUBLIC_KEY = "1coiN6XpS-mwmmnk2";
const EMAIL_SERVICE_ID = "service_z58a7wf";
const EMAIL_TEMPLATE_ID = "template_76an8a7";

// Инициализация
emailjs.init(EMAIL_PUBLIC_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusText = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusText.innerHTML = "Изпращане...";

    emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, this)
      .then(() => {
        statusText.innerHTML = "✔ Съобщението е изпратено успешно!";
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        statusText.innerHTML = "❌ Възникна грешка. Опитай пак!";
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.quote-slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Автоматично превъртане на цитатите
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
});

