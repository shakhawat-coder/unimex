
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