  const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3
});

$('.slider_btn--right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider_btn--left').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})