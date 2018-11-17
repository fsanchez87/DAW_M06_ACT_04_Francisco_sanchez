/*
 * 3.	Controla que si no se selecciona algún tipo de alimento (Congelado, Fruta
 *      o Snack) no se envíe el formulario al clicar en Regístrate.
 */
function validaAlimentos() {
    var formAlimentos = document.forms["miFormulario"]["inputAlimento"];
    var alimentos = false;

    for (var i = 0; i < formAlimentos.length; i++) {
        if (formAlimentos[i].checked === true) {
            document.forms["miFormulario"]["log"].innerHTML += "- " + formAlimentos.value + " : Alimento seleccionado\n";
            alimentos = true;
            break;
        } else {
            document.forms["miFormulario"]["log"].innerHTML += "- " + formAlimentos.value + " : Alimento seleccionado\n";
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
    inputNombre.addEventListener("keypress", validaNombre, false);

    // Control input Código
    var inputCodigo = miFormulario["inputCodigo"];
    inputCodigo.addEventListener("keypress", validaCodigo, false);

    // Control input fecha
    var inputDia = miFormulario["inputDia"];
    inputDia.addEventListener("keypress", validaFecha, false);
    var inputMes = miFormulario["inputMes"];
    inputMes.addEventListener("keypress", validaFecha, false);
    var inputAnio = miFormulario["inputAnio"];
    inputAnio.addEventListener("keypress", validaFecha, false);

}

/* 
 *   4.a.No se debe enviar el formulario si alguno de los inputs es incorrecto.
 */
function validaForm() {
    var formValido = true;

//    if (!validaAlimentos()) {
//        formValido = false;
//        window.alert("Elige un alimento");
//    }
//
//    if (!validaNombre()) {
//        formValido = false;
//        window.alert("Nombre erronero");
//    }
//    
    if (!validaOferta()) {
        formValido = false;
        window.alert("Selecciona una Oferta");
    }
//
//    if (!validaCodigo()) {
//        formValido = false;
//        window.alert("Código erronero");
//    }
//
//    if (!validaFecha()) {
//        formValido = false;
//        window.alert("Fecha erronea");
//    }

    return formValido;
}

function validaOferta() {
    var formOferta = document.forms["miFormulario"]["oferta"].value;
    console.log(formOferta);
    
    if (formOferta === 0) {
        return false;
    }else {
        return true;
    }
}

/*
 *   4.b.InputNombre  no puede empezar por un número y debe contener entre 3 y 20 caracteres.
 */
function validaNombre() {
    var formNombre = document.forms["miFormulario"]["inputNombre"];
    var pattern = new RegExp("^[^0-9][a-zA-Z0-9_]{2,10}$");

    if (pattern.test(formNombre.value)) {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formNombre.value + " : Nombre correcto\n";
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML += "- " + formNombre.value + ": Nombre incorrecto\n";
        console.log("test error");
        return false;
    }
}

/*  
 *  4.c.InputCodigo debe tener 13 números, ninguna letra (puedes utilizar una  
 *      expresión regular para validar).
 */
function validaCodigo() {
    var formCodigo = document.forms["miFormulario"]["inputCodigo"];
    var pattern = new RegExp("^[0-9]{13}$");

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

    //formato DD/MM/YYYY
    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if (pattern.test(fecha)) {
        document.forms["miFormulario"]["log"].innerHTML += "- " + fecha + " : Fecha correcta\n";
        setCookie("fecha", (fecha), 1);
        console.log("fecha ok");
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML += "- " + fecha + " : Fecha incorrecta\n";
        console.log("fecha  no ok");
        return false;
    }
}

/*
 * 5.	Programa con JavaScript que al clicar sobre Guardar Datos se guarden todos
 *      los datos de los inputs en una cookie para cada input. Pej: para el input 
 *      inputNombre crea una cookie que guarde su valor, para el input inputCodigo 
 *      crea otra cookie con su valor, etc...)
 */
function guardarCookies() {
    if (!validaForm()) {
    } else {
        var miFormulario = document.forms["miFormulario"];

        setCookie("nombreProducto", (miFormulario["inputNombre"].value), 1);
        setCookie("codigo", (miFormulario["inputCodigo"].value), 1);
        setCookie("dia", (miFormulario["inputDia"].value), 1);
        setCookie("mes", (miFormulario["inputMes"].value), 1);
        setCookie("anio", (miFormulario["inputAnio"].value), 1);
        setCookie("alimento", (miFormulario["inputAnio"].value), 1);

    }
}


/*
 * 
 * @param {type} cname
 * @param {type} cvalue
 * @param {type} exdays
 * @returns {undefined}
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
/*
 * 
 * @param {type} cname
 * @returns {undefined|String}
 * 
 */


/*
 * 6.	Programa con JavaScript que al clicar sobre Recupera Datos se sustituya 
 *      el valor de los inputs por el valor almacenado en su correspondiente cookie.
 */


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return
        c.substring(name.length, c.length);
    }
    return "";
}
/*
 * 7.	Comenta las funciones que has utilizado y todos los bloques de código 
 *      explicando cuál es su funcionalidad.
 */