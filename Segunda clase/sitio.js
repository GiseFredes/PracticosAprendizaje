/*Condicionales*/
let numeroIngresado = prompt("Ingrese un día del mes");

/*REcordar que el prompt ingresa un caracter*/
let entero = parseInt(numeroIngresado);

if( numeroIngresado > 10){
    document.write("<h1>No llego a fin de mes</h1>")
    //alert("No llego a fin de mes")
}
else if(numeroIngresado<0){
    document.write("<h2>Mandaste fruta</h2>")
}
else
    {
    document.write("<h1>Creo que llego</h1>")
    //alert("Creo que llego")
}

console.log("Ejecute todo el script");