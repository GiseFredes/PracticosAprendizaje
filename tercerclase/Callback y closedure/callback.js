//DECLARACION DE FUNCIONES
//Un callback es una funcion que recibe de parametro una funcion que 
//se ejecutara una vez finalizado el código de la funcion
//o en este caso cuando la llame
//la variable nombreCualquiera se suele llamar callback
function saludar(nombre){
    alert("¡¡¡Hola "+ nombre + "!!!");
}
function procesarEntradaUsuario(nombreCualquiera){
    //banda de código
    //este siguiente segmento la llama y valida
    if (typeof nombreCualquiera == 'function'){
        var nombre = prompt("Ingrese su nombre, por favor:");
        nombreCualquiera(nombre);
    }
    else {
        alert("Mandaste Cualquiera :(");
    }
}

//LLAMADAS DE FUNCIONES

procesarEntradaUsuario(saludar)
/*Llamo a la funcion procesarEntradaUsuario con el parametro 
que es otra función esto es lo que se llama callback*/
