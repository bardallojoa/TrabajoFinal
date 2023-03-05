/*window.onbeforeunload = function() {
    return "¿Desea abandonar la pagina?";
};*/


function edad(){
    let numero = prompt("Por favor, ingresa tu edad:");

    if (numero >= 18){
      alert("sos mayor, podes ingresar")
    }
    else (numero < 18);{
      alert("si sos menor, entra bajo tu responsabilidad")
    }
}
edad();
