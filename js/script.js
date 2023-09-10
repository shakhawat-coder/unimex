
  // let vartical_manu = document.querySelector(".vartical_menu_title");
  // vartical_manu.classList.toggle("active");
  $(document).ready(function(){
    $(".vartical_menu_title").click(function(){
      $(".vertical_menu").toggleClass("active");
    });
  }); 
 AOS.init(); 