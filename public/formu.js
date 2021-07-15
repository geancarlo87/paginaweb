var nombre = document.getElementsByClassName("formulario_input");
var correo = document.getElementsByClassName("formulario_input");
var telefono = document.getElementsByClassName("formulario_input");
var mensaje = document.getElementsByClassName("formulario_input");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario(){
    console.log("Enviando formulario...");

    var menajesError = [];

    if(nombre.value === null || nombre.value === ""){
        menajesError.push("ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        menajesError.push("ingresa tu correo");
    }
    if(telefono.value === null || telefono.value === ""){
        menajesError.push("ingresa tu nombre");
    }
    if(mensaje.value === null || mensaje.value === ""){
        menajesError.push("ingresa tu nombre");
    }

    error.innerHTML = mensajes.Error.join(", ");

    return false

}









var input = document.getElementsByClassName("formulario_input");
var nombre = document.getElementsByClassName("formulario_input");
var error = document.getElementById("error");
error.style.color = "red";
if(nombre.value === null || nombre.value === ""){
    menajesError.push("ingresa tu nombre");

    error.innerHTML = mensajes.Error.join(", ");
}

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijar");
        }   else{
            this.nextElementSibling.classList.remove("fijar");
        }

    }
    );
    function enviarFormulario(){
        console.log("Enviando formulario...");
    
        var menajesError = [];
    
        if(nombre.value === null || nombre.value === ""){
            menajesError.push("ingresa tu nombre");
        }
        if(correo.value === null || correo.value === ""){
            menajesError.push("ingresa tu correo");
        }
        if(telefono.value === null || telefono.value === ""){
            menajesError.push("ingresa tu nombre");
        }
        if(mensaje.value === null || mensaje.value === ""){
            menajesError.push("ingresa tu nombre");
        }
    
        error.innerHTML = mensajes.Error.join(", ");
    
        return false
    
    };
    
}


