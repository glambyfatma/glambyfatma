// AOS animation init
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// DOM Ready
$(document).ready(function () {
  // Slick Carousel
  $('.portfolio-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Smooth Scroll
  $('.nav-links a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // WhatsApp Click
  $('.whatsapp-trigger').click(function (e) {
    e.preventDefault();
    window.open('https://wa.me/254114065922', '_blank');
  });

  // Active nav link on scroll
  $(window).on('scroll', function () {
    const scrollPos = $(document).scrollTop();
    $('.nav-links a').each(function () {
      const section = $($(this).attr('href'));
      if (
        section.length &&
        section.position().top <= scrollPos + 100 &&
        section.position().top + section.height() > scrollPos
      ) {
        $('.nav-links a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  // Form validation
  $('form').submit(function (e) {
    const name = $('input[type="text"]').val();
    const email = $('input[type="email"]').val();
    const message = $('textarea').val();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      e.preventDefault();
    } else {
      alert("Thanks for reaching out! We'll be in touch soon.");
    }
  });
});

// Preloader (if used)
$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});

// Hero Typewriter
document.addEventListener("DOMContentLoaded", () => {
  const heroText = "Where Beauty Meets Art. And Every Look Tells a Story.";
  const heroEl = document.getElementById("typewriter");
  let i = 0;

  function typeHero() {
    if (i < heroText.length) {
      heroEl.textContent += heroText.charAt(i);
      i++;
      setTimeout(typeHero, 65);
    }
  }

  heroEl.textContent = "";
  typeHero();
});

// Section typewriters on scroll
const sectionTypewriters = document.querySelectorAll(".typewriter-text");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.getAttribute("data-text");
        let index = 0;
        el.textContent = "";

        function typeNextChar() {
          if (index < text.length) {
            el.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextChar, 45);
          }
        }

        typeNextChar();
        observer.unobserve(el);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sectionTypewriters.forEach(el => {
  observer.observe(el);
});
