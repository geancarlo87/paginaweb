jQuery("document").ready(function($){

    var menuBtn=$(".menu-icon");
        menu= $(".navigation ul");

    menuBtn.click(function(){

    if(menu.hasClass("show")){
        menu.removeClass("show");
        
    } else{
        menu.addClass("show");
    }
    });
});

const navToggle = document.querySelector("formular.html");
const navMenu = document.querySelector(".formular.html");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visble")){
        navToggle.setAttribute("arial-label", "Cerrar menu");
    } else {
        navToggle.setAttribute("arial-label", "Abrir menu");
    }
});
