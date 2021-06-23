$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<button class='nav-button owl-prev control-btn'><i class='fas fa-arrow-left'></i>Prev</button>",
    "<button class='nav-button owl-next control-btn'>Next<i class='fas fa-arrow-right'></i></button>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
