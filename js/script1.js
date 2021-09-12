function mostrarPrecios(){
    let precios = document.getElementById("precio");
        if(precios.classList.contains("ocultarPrecio")) {
            precios.classList.remove("ocultarPrecio");
        } else {
            precios.classList.add("ocultarPrecio");
        }
}


function mostrarselect() {
    
    let checkboxes = document.getElementById("chequeo");
 
    if(checkboxes.classList.contains("escoger")) {
        checkboxes.classList.remove("escoger");       
    } else {
        checkboxes.classList.add("escoger");       
    }
}
