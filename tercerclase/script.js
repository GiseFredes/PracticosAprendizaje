let edad =prompt("Dime tu edad");
edad = parseInt(edad);

/*Primera parte
if( edad>60){
    mostrarAlertaPobre();
}
else{
    mostrarAlertaPobre();
}*/

//Segunda mejora
let valorDeVerdad = esJubilado(edad);

if(valorDeVerdad){
    mostrarAlertaJubilado();
}
else{
    mostrarAlertaPobre();
}
