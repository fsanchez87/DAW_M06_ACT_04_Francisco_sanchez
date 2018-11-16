
function muestraMensaje() {
    console.log("Muestro un mensaje");
}
function inicio() {
    console.log("BODY CARGADO");
    let segundoDiv = document.getElementById("segundoDiv");
    segundoDiv.onclick = clickSegundoDiv;
    segundoDiv.onclick = muestraMensaje;

    segundoDiv.addEventListener("click", clicaDiv, false);
    document.getElementById("miBody").addEventListener("click", clickBody, false);

    setCookie("nombre", "Juan", 3);
    setCookie("nombre", "Josefa", 1);
    setCookie("edad", "92", 1);
    let valorCookie = getCookie("nombre");
    console.log("cookie que se llama 'nombre':" + valorCookie);
    setCookie("nombre", "", -1);

    ///Evento al formulario
    let miformulario = document.forms["miForm"];
    let inputNombre = miformulario["nombre"];
    inputNombre.addEventListener("keyup", inputNombreClicado, false);

}
function inputNombreClicado() {
    let valorInput = document.forms["miForm"]["nombre"].value;
    if (valorInput.length <= 4) {
        console.log("El texto ha de ser mayor a 4 caracteres");
        document.forms["miForm"]["logErrores"].innerHTML="El texto ha de ser \n mayor a 4 caracteres";
    } else {
        document.forms["miForm"]["logErrores"].innerHTML="Correcto"
    }
    console.log(valorInput);
}

function validaFormulario() {
    
    let formCorrecto = true;
    let valorInput = document.forms["miForm"]["nombre"].value;
    if (valorInput.length <= 4) {
        console.log("El texto ha de ser mayor a 4 caracteres");
        formCorrecto = false;
    } else {
        console.log("Texto correcto");
    }

    if (formCorrecto) {
        return true;
    } else {
        return false;
    }
    
}

function clicaDiv(event) {

    console.log("DIV CLICADO");
    console.log("boton clicado" + event.button);
    let divClicado = event.target;
    divClicado.style.color = "red";
    event.stopPropagation();   //si queremos detener la propagacion del evento

}
function clickBody(event) {
    console.log("Clicado el body");
}
function clickSegundoDiv() {
    console.log("Clicado el segundo div");
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return   c.substring(name.length, c.length);
    }
    return "";
}

