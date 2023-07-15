
var credito=Math.floor(Math.random()*4)+9;
var imagenes= ["tigre_slot.png", "7.png"];
var premios= [3,2,3,2,2,3,6];
var numeros_actuales=[];

/*function inicio(){
    document.getElementById("tirar").click=lanzar();
}
*/ 

function mantenimiento(){
alert("JUEGO EN MANTENIMIENTO, DISCULPE LAS MOLESTIAS")

}
function escoger_numero(){

    var azar=Math.floor(Math.random()*imagenes.length);
    return azar;
}

function lanzar(){
    numeros_actuales=[];
    for (let k=0; k<document.getElementsByClassName("boton").length;k++){
    numeros_actuales.push(escoger_numero());
    mostrar_imagen(k,numeros_actuales[k]);
    }


}
function mostrar_imagen(num,im){
document.getElementsByClassName("imagen")[num, im].getElementsByTagName("img")[0].src="tigre_slot.png";
document.getElementsByClassName("imagen")[num, im].getElementsByTagName("img")[1].src="7.png";

}

function comparar(){

}   

function actualizar(){

}

function mostrar_mensaje(){

}

function cerrar(){

}

function sonar(){

}



