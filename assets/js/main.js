const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Jan 29, 2019 09:00:00').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);


  }, second)



$(function() {
  var header = $(".navInovia");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });

});

$(function() {
  var link = $("#linkNavbar");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      link.addClass("scrolledLink");
    } else {
      link.removeClass("scrolledLink");
    }
  });

});
