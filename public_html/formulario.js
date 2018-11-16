/*
 * 
 * @returns {undefined}
 */
function ini(){
    
}

/*
 * Funcion para validar un formulario
 * @returns {undefined}
 */
function validaForm() {
    var formValido = true;

    if (!validaAlimentos()) {
        formValido = false;
        window.alert("Elige un alimento");
    }
    
    if (!validaNombre()) {
        formValido = false;
        window.alert("Nombre erronero");
    }
    
    if (!validaCodigo()) {
        formValido = false;
        window.alert("Código erronero");
    }
}
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
 *      
 *   a.	No se debe enviar el formulario si alguno de los inputs es incorrecto.
 *   
 *   b.	InputNombre  no puede empezar por un número y debe contener entre
 *      3 y 20 caracteres.
 */
function validaNombre(){
    var formNombre = document.forms["miFormulario"]["inputNombre"];
    var pattern = new RegExp("^[^0-9][a-zA-Z0-9_]{2,10}$");

    if (pattern.test(formNombre.value)){
        console.log("test ok");
        document.forms["miFormulario"]["log"].innerHTML= formNombre.value + " : Texto Correcto";
        return true;
    } else {
        document.forms["miFormulario"]["log"].innerHTML="Texto error";
        console.log("test error");
        return false;
    }
}

/*   c.	InputCodigo debe tener 13 números, ninguna letra (puedes utilizar una  
 *      expresión regular para validar).
 */
function validaCodigo(){
    var formCodigo = document.forms["miFormulario"]["inputCodigo"];
    var pattern = new RegExp("^[0-9]{13}$");
    
    if (pattern.test(formCodigo.value)){
        return true;
    }else{
        return false;
    }
}

/*
 *   d.	InputDia , inputMes y inputAno deben formar una fecha válida.
 */

/*
 * 5.	Programa con JavaScript que al clicar sobre Guardar Datos se guarden todos
 *      los datos de los inputs en una cookie para cada input. Pej: para el input 
 *      inputNombre crea una cookie que guarde su valor, para el input inputCodigo 
 *      crea otra cookie con su valor, etc...)
 */

/*
 * 6.	Programa con JavaScript que al clicar sobre Recupera Datos se sustituya 
 *      el valor de los inputs por el valor almacenado en su correspondiente cookie.
 */

/*
 * 7.	Comenta las funciones que has utilizado y todos los bloques de código 
 *      explicando cuál es su funcionalidad.
 */