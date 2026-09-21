function mostrarpromo() {
    alert("Promoción: 2x1 en entradas de cine");
}   
function mostrarhora() {
const d = new Date();
document.getElementById("hora").innerHTML= d.toLocaleTimeString();
}

function mostrar_ocultar_menu() {
    let productos = document.getElementById("menu").style.display;
    if(productos ==="none") {
        document.getElementById("menu").style.display ="block";
    } else{
        document.getElementById("menu").style.display ="none";
    }
}

function numerorandom(){
    let num= Math.floor(Math.random()*100);
    document.getElementById("numin").innerHTML=num;
}

function imprimirpagina(){
    window.print();
}

let grados = 0;
function rotacion_imagen(){
    grados += 90;
    document.getElementById("img").style.transform = "rotate(" + grados + "deg)";
}


function mjsaleatorio (){
    let mensajes =["Tienda en linea de cine","Cualquier cosa de cine lo encuentras aqui","Que no te importe lo demas, lo importante esque te guste a ti"];
    let indice= Math.floor(Math.random()*mensajes.length);
    document.getElementById("mjs").innerHTML = mensajes[indice];
}



let tamaño = 300;

function cambiarTamano() {
    if (tamaño == 300) {
        tamaño = 200;
    } else {
        tamaño = 300;
    }

    document.getElementById("#img").style.width = tamaño + "px";
    document.getElementById("#img").style.height = (tamaño * 1.5) + "px";
}


function contarcarater() {
    let texto = document.querySelector("#texto").value;

    let cantidad = texto.length;

    document.getElementById("contador").innerHTML =
        "La cantidad de caracteres del texto es: " + cantidad;
}



function mostrarContraseña() {
    let contraseña = document.getElementById("contraseña");

    if (contraseña.type == "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
}