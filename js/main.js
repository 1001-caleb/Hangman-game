const PALABRAS = [
    "ALURA",
    "CHALLENGE",
    "ORACLE",
    "JAVASCRIPT",
    "PROGRAMACION",
    "CSS",
    "HTML"
]

var vidas = 7;
var fallos = 0;

//agregar palabras al array y elegir palabra random de el
let elegirPalabraRandom = () =>{
    var palabrasInsertar = document.getElementById("palabras__insertar");
    // console.log(palabrasInsertar);
    var palabraInsertada = palabrasInsertar.value;
    PALABRAS.push(palabraInsertada);
    console.log(PALABRAS);

    //elegir palabra random del array
    var Random = Math.floor(Math.random()*PALABRAS.length);
    var palabraRandom = PALABRAS[Random];
    palabrasInsertar.value = "";
    console.log(`la palabra random es: ${palabraRandom}`);

    //escribimos la palabra random con guiones
    convertirPalabraAguiones(palabraRandom);
    
}
var pushPalabraArray = document.getElementById("palabra__enviar"); //boton para enviar palabras al array
pushPalabraArray.onclick = elegirPalabraRandom;


//tomamos la letra ingresada y 
var letraIngresada = () =>{
    var letra = document.getElementById("campo__letra").value;
    console.log(`la letra ingresada es: ${letra}`);
}
var btnProbarLetra = document.getElementById("probar__letra");
btnProbarLetra.onclick = letraIngresada;

//convertir la palabra random a guiones
var convertirPalabraAguiones = (palabraRandom) =>{
    var palabraConGuiones = palabraRandom.replace(/./g, "_ ");
   
    console.log(palabraConGuiones);
}