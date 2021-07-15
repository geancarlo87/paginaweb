left boton_menu=document.getElementById("boton_menu");
left menu=document.getElementById("menu");

boton_menu.addEventListener("click",function(){ //cuando hanga click en el boton con id "boton_menu"
    //Ejecutar las sgts instrucciones
    menu.classList.toggle("mostrar")
});
const navToggle= document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu-visible");

    if (navMenu.classList.contains("nav-menu-visible")){
        navToggle.setAttribute("aria-label", "cerrar menú");
    } else{ 
        navToggle.setAttribute("aria-label", "abrir menú")
    }

});
