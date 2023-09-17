
  // let vartical_manu = document.querySelector(".vartical_menu_title");
  // vartical_manu.classList.toggle("active");
  $(document).ready(function(){
    $(".vartical_menu_title").click(function(){
      $(".vertical_menu").toggleClass("active");
    });
  }); 
 AOS.init(); 

 $('.slider_wrapper').slick({
  infinite: true,
  prevArrow:".prev",
  nextArrow:".next",
  speed:1000
});
$('.specific_item_catagory_wrapper').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
});
$(' .tem_member_wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#team .prev",
  nextArrow:"#team .next",
});
$('#testimony .testimony_wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".testimony_slider .prev",
  nextArrow:".testimony_slider .next",
});
$('.branding_wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#branding .prev",
  nextArrow:"#branding .next",
});
$('.blog_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#blog .prev",
  nextArrow:"#blog .next",
});
$('.discount_product_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".discount_product_slider .prev",
  nextArrow:".discount_product_slider .next",
});
$('.feature_product_wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".feature_product_slider .prev",
  nextArrow:".feature_product_slider .next",
});
$('.recommend_product_wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".recommend_product_slider .prev",
  nextArrow:".recommend_product_slider .next",
});
$('.top_selling_product_wrapper').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#top_selling .prev",
  nextArrow:"#top_selling .next",
});
// =================back to top button=============
let toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY>10){
    toTop.classList.add("show");
  }else{
    toTop.classList.remove("show");
  }
  
})
// =============countdown section=============
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);