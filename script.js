// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

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

  // WhatsApp click event
  $('.whatsapp-trigger').click(function (e) {
    e.preventDefault();
    window.open('https://wa.me/254700000000', '_blank');
  });

  // Active nav link on scroll
  $(window).on('scroll', function () {
    const scrollPos = $(document).scrollTop();
    $('.nav-links a').each(function () {
      const section = $($(this).attr('href'));
      if (section.length && section.position().top <= scrollPos + 100 && section.position().top + section.height() > scrollPos) {
        $('.nav-links a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  // Form validation + feedback
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

// Preloader fade-out
$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});
