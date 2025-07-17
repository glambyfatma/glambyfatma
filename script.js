// 🌿 Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 💌 Simple Form Validation
document.querySelector('form')?.addEventListener('submit', function(e) {
  const name = this.querySelector('input[type="text"]');
  const email = this.querySelector('input[type="email"]');
  const message = this.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields before sending.');
  }
});

// ✨ Scroll Reveal Setup (AOS)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
}

// 🎠 Slick Carousel
$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  });
});
