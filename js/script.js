
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
  responsive:[
    {
    breakpoint: 361,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 481,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 576,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1,
      }
    },
  ]
});
$(' .tem_member_wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#team .prev",
  nextArrow:"#team .next",
  responsive:[
    {
    breakpoint: 576,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 1200,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
  ]
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
  responsive:[
    {
    breakpoint: 476,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.blog_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#blog .prev",
  nextArrow:"#blog .next",
  responsive:[
    {
    breakpoint: 480,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 776,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.discount_product_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".discount_product_slider .prev",
  nextArrow:".discount_product_slider .next",
  responsive:[
    {
    breakpoint: 400,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 576,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 776,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 868,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 1200,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.feature_product_wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".feature_product_slider .prev",
  nextArrow:".feature_product_slider .next",
  responsive:[
    {
    breakpoint: 400,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 1200,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.recommend_product_wrapper').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".recommend_product_slider .prev",
  nextArrow:".recommend_product_slider .next",
  responsive:[
    {
    breakpoint: 400,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.related_product_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".related_product_slider .prev",
  nextArrow:".related_product_slider .next",
  responsive:[
    {
    breakpoint: 400,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 2600,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.recently_viewd_product_wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".recently_viewd_product_slider .prev",
  nextArrow:".recently_viewd_product_slider .next",
  responsive:[
    {
    breakpoint: 400,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 2600,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1,
      }
    },
  ]
});
$('.top_selling_product_wrapper').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:"#top_selling .prev",
  nextArrow:"#top_selling .next",
  responsive:[
    {
    breakpoint: 768,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
    {
    breakpoint: 992,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      }
    },
  ]
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
  let t = Date.parse(endtime) - Date.now();
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

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