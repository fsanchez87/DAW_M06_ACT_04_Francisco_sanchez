window.addEventListener("load", ini, false);
function ini() {
    let miForm = document.forms["miForm"];
    miForm.addEventListener("submit", validaForm, false);
    miForm["nombre"].addEventListener("keyup",validaNombre,false);
    miForm["nombre"].addEventListener("blur",hePerdidoElFoco,false);
    miForm["nombre"].addEventListener("focus",heObtenidoElFoco,false);
    cargarChecked();
}
function hePerdidoElFoco(){
    console.log("Nombr ha pedido el foco");
}
function heObtenidoElFoco(){
    console.log("Nombr ha obtenido el foco");
}
/**Marca o desmarca los checkbox que deseemos
 * 
 * @returns {undefined}
 */
function cargarChecked(){
    let postresCheckBox = document.forms["miForm"]["postres"];
    console.log(postresCheckBox);
    postresCheckBox[0].checked= false;
    postresCheckBox[1].checked = false;
    postresCheckBox[2].checked = true;
    
    for(let k=0; k < postresCheckBox.length;k++){
        
        console.log(postresCheckBox[k].value+" = "+postresCheckBox[k].checked);
    }
    
}

function validaForm(evt) {
    let formValido = true;
    if(!validaNombre()){
        formValido=false;
    }
    if(validaApellido()===false){
        formValido=false;
    }
  
    if (!formValido) {
        evt.preventDefault(); //evitamos la accion por defecto del submit
    }
}
function validaApellido(){
    return true;
}
/**Retornar true o false si el nombre tiene entre 5 y 10 letras
 * 
 * @returns {undefined}
 */
function validaNombre() {
    let inputNombre = document.forms["miForm"]["nombre"];
    var pattern = new RegExp("^[A-z]{5,10}$");
    if (pattern.test(inputNombre.value)) {
        console.log("Test OK");
        return true;
    } else {
        console.log("Test Error");
        return false;
    }
}