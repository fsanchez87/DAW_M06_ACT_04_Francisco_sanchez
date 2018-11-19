/*
 * 3.	Controla que si no se selecciona algún tipo de alimento (Congelado, Fruta
 *      o Snack) no se envíe el formulario al clicar en Regístrate.
 */
function validaAlimentos() {
    var formAlimentos = document.forms["miFormulario"]["inputAlimento"];
    var alimentos = false;

    for (var i = 0; i < formAlimentos.length; i++) {
        if (formAlimentos[i].checked === true) {
            alimentos = true;
            break;
        } else {
            alimentos = false;
        }
    }
    return alimentos;
}

/*
 * 4.	Controla que cada vez que el usuario escribe una letra en un input se 
 *      muestre un mensaje en el TextArea con el valor del input y si su valor es válido.
 *      Para saber si un input es válido ten en cuenta qué:
 */
function ini() {

    var miFormulario = document.forms["miFormulario"];

    // Control input Nombre
    var inputNombre = miFormulario["inputNombre"];
    inputNombre.addEventListener("keyup", validaNombre, false);

    // Control input Código
    var inputCodigo = miFormulario["inputCodigo"];
    inputCodigo.addEventListener("keyup", validaCodigo, false);

    // Control input fecha
    var inputDia = miFormulario["inputDia"];
    inputDia.addEventListener("keyup", validaFecha, false);
    var inputMes = miFormulario["inputMes"];
    inputMes.addEventListener("keyup", validaFecha, false);
    var inputAnio = miFormulario["inputAnio"];
    inputAnio.addEventListener("keyup", validaFecha, false);

}

/* 
 *   4.a.No se debe enviar el formulario si alguno de los inputs es incorrecto.
 *   
 *   Si alguna de las funciones no se cumple no se enviará el formulario
 */
function validaForm() {
    var formValido = true;

    if (!validaNombre()) {
        window.alert("Nombre erronero");
         formValido = false;
    }

    else if (!validaCodigo()) {
        window.alert("Código erronero");
        formValido = false;
    }

    else if (!validaFecha()) {
        window.alert("Fecha erronea");
        formValido = false;
    }

    else if (!validaOferta()) {
        window.alert("Selecciona una Oferta");
        formValido = false;
    }

    else if (!validaAlimentos()) {
        window.alert("Elige un alimento");
        formValido = false;
    }    

    return formValido;
}

/* 
 * Valida si se ha seleccionado una oferta
 */
function validaOferta() {
    var formOferta = document.getElementById("oferta");

    if (formOferta.selectedIndex == "") {
        return false;
    } else {
        return true;
    }
}

/*
 *   4.b.InputNombre  no puede empezar por un número y debe contener entre 3 y 20 caracteres.
 */
function validaNombre() {
    var formNombre = document.forms["miFormulario"]["inputNombre"];
    // Expresión regular para controlar que el nombre no puede empezar por un número y contener entre 2 y 20 caracteres
    var pattern = new RegExp("^[^0-9][a-zA-Z0-9_]{2,10}$");

    // Escribe en el texarea lo introducido por el tecaldo
    if (pattern.test(formNombre.value)) {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formNombre.value + " : Nombre correcto\n";
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formNombre.value + ": Nombre incorrecto\n";
        return false;
    }
}

/*  
 *  4.c.InputCodigo debe tener 13 números, ninguna letra (puedes utilizar una  
 *      expresión regular para validar).
 */
function validaCodigo() {
    var formCodigo = document.forms["miFormulario"]["inputCodigo"];
    // Expresión regular para controlar la entrada del código
    var pattern = new RegExp("^[0-9]{13}$");

    // Escribe en el texarea lo introducido por el tecaldo
    if (pattern.test(formCodigo.value)) {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formCodigo.value + " : Código correcto\n";
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formCodigo.value + " : Código incorrecto\n";
        return false;
    }
}

/*
 *   4d.InputDia , inputMes y inputAno deben formar una fecha válida.
 */
function validaFecha() {
    var formDia = document.forms["miFormulario"]["inputDia"].value;
    var formMes = document.forms["miFormulario"]["inputMes"].value;
    var formAnio = document.forms["miFormulario"]["inputAnio"].value;
    //variable para almacenar la fecha en formato DD/MM/YYYY
    var fecha = formDia + "/" + formMes + "/" + formAnio;

    // Expresión regular para validar el formato de la fecha
    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    // Escribe en el texarea la fecha introducida
    if (pattern.test(fecha)) {
        document.forms["miFormulario"]["log"].innerHTML += "- " + fecha + " : Fecha correcta\n";
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML += "- " + fecha + " : Fecha incorrecta\n";
        return false;
    }
}

/*
 * 5.	Programa con JavaScript que al clicar sobre Guardar Datos se guarden todos
 *      los datos de los inputs en una cookie para cada input. Pej: para el input 
 *      inputNombre crea una cookie que guarde su valor, para el input inputCodigo 
 *      crea otra cookie con su valor, etc...)
 *      
 *      Función que si el formulario es válido guarda los datos introducidos
 */



function guardarCookies() {
    if (!validaForm()) {
    } else {
        var miFormulario = document.forms["miFormulario"];

        // Crea una cookie para cada input y la guarda
        setCookie("nombreProducto", (miFormulario["inputNombre"].value), 1);
        setCookie("codigo", (miFormulario["inputCodigo"].value), 1);
        setCookie("dia", (miFormulario["inputDia"].value), 1);
        setCookie("mes", (miFormulario["inputMes"].value), 1);
        setCookie("anio", (miFormulario["inputAnio"].value), 1);
        setCookie("alimento_0", (miFormulario["inputAlimento"][0].checked), 1);
        setCookie("alimento_1", (miFormulario["inputAlimento"][1].checked), 1);
        setCookie("alimento_2", (miFormulario["inputAlimento"][2].checked), 1);
        setCookie("oferta", (miFormulario["oferta"].value), 1);
    }
}

/*
 * Funcion estandar para guardar las cookies
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/*
 * 6.	Programa con JavaScript que al clicar sobre Recupera Datos se sustituya 
 *      el valor de los inputs por el valor almacenado en su correspondiente cookie.
 */

/*
 *Función para pasar un string a booleano.
 *Se usa para poder pasar el chevked de las cookies checkbox 
 */
function pasarBoleano(valor){
    if (valor =="true") {
        return true;
    } else {
        return false;
    }
}

/*
 * Función para recuperar las cookies guardadas
 */
function recuperarCookies() {

    document.forms["miFormulario"]["inputNombre"].value = getCookie("nombreProducto");
    document.forms["miFormulario"]["inputCodigo"].value = getCookie("codigo");
    document.forms["miFormulario"]["inputDia"].value = getCookie("dia");
    document.forms["miFormulario"]["inputMes"].value = getCookie("mes");
    document.forms["miFormulario"]["inputAnio"].value = getCookie("anio");
    document.forms["miFormulario"]["oferta"].value = getCookie("oferta");    
    // Para recuperar el checked se pasa el valor string a boleano con la función pasarBoleano
    document.forms["miFormulario"]["inputAlimento"][0].checked = pasarBoleano(getCookie("alimento_0"));
    document.forms["miFormulario"]["inputAlimento"][1].checked = pasarBoleano(getCookie("alimento_1"));
    document.forms["miFormulario"]["inputAlimento"][2].checked = pasarBoleano(getCookie("alimento_2"));
}

/*
 * Función estandar para recuperar las cookies
 */
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

/*
 * 7.	Comenta las funciones que has utilizado y todos los bloques de código 
 *      explicando cuál es su funcionalidad.
 */