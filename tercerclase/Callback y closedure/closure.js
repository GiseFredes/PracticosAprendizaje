function crearFuncion(){
    let nombre ="Codo a codo";
    //Esto es encapsulamiento
    //No quiero mostrar el funcionamiento interno de esta funcion 
    function muestraNombre(){

    alert(nombre);
    }
    return muestraNombre;
    
}

let myFunc= crearFuncion();
myFunc();
//define una nueva variable global y le asigna Hola
nombre = "Hola";
//Vuelve a llamar closure que tiene su propia variable nombre 
myFunc();
//No esta definida de manera global por lo que da error solo esta dentro
//dentro de crearFuncion()
//No puedo llamar esta función  por que wxiste solo en la otra funcion
//muestraNombre();
