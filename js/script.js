
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
$('.tem_member_wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".prev",
  nextArrow:".next",
});
$('.testimony_wrapper').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:".testimony_slider .prev",
  nextArrow:".testimony_slider .next",
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