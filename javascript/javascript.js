window.onbeforeunload = function() {
    return "¿Desea abandonar la pagina?";
};


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

function distancia(){
    let option = prompt ("¿Se encuentra en San Nicolas o dentro de los 40km?")
    if (option == "si"){
      alert("No tenes costo de envio")
    }
    else (option == "no");{
      alert("Tenes un costo de envio de $800")
    }}
distancia();