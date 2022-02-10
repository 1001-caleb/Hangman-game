let palabras = Array("ALURA", "CHALLENGE", "PROGRAMACION","JAVASCRIPT", "RETO");

let palabraOculta = ""; //la palabra random que se escoge del array
let palabraAdivinando = "" //palabra que va adivinando el user
let vidas = 4;
document.getElementById("boton").addEventListener("click", comprobar);

function comenzarJuego(){
    
    document.getElementById("btn__jugar").addEventListener("click", iniciar);
}
comenzarJuego();

//logica del juego
function iniciar(){
    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)];
    // console.log(palabraOculta);

    for(let i=0; i < palabraOculta.length; i++){
        palabraAdivinando+="_ ";
    }
    document.getElementById("frase").innerHTML=palabraAdivinando;
}

btnAgregar = document.getElementById("palabra__enviar");
btnAgregar.onclick = añadirPalabraArray

function añadirPalabraArray (){
    let palabraNueva = document.getElementById("palabras__insertar").value;
    console.log(palabraNueva);

    palabras.push(palabraNueva);
    console.log(palabras);
}

function comprobar(){
    let letra = document.getElementById("letra").value.toUpperCase();
    // palabraOculta = palabraOculta.toUpperCase();
    let nuevo = "";

    for (let i = 0; i<palabraOculta.length; i++){
        if (letra == palabraOculta[i]){
            nuevo = nuevo + letra + " ";
        }else{
            nuevo = nuevo + palabraAdivinando[i*2] + " ";
        }
    }
    if (nuevo == palabraAdivinando){
        vidas--;
        document.getElementById("vida").innerHTML=`Te quedan ${vidas} vidas`
    }
    palabraAdivinando = nuevo;
    document.getElementById("frase").innerHTML = palabraAdivinando;

    if (vidas == 0){
        Swal.fire({
            icon: 'error',
            title: 'Perdiste :((',
            text: 'No adivinas la palabra oculta',
          })
    }
    if(palabraAdivinando.search("_")== -1){
        Swal.fire({
            title: 'Ganaste! :p',
            text: 'Adivinaste la palabra oculta',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
    document.getElementById("letra").value="";
    document.getElementById("letra").focus();

    dibujar();
}

function dibujar(){
    var canvas = document.getElementById("lienzo");
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        //dibuja la base de la horca
        ctx.beginPath();
        ctx.moveTo(30, 200);
        ctx.lineTo(30, 10);
        ctx.lineTo(150, 10);
        ctx.lineTo(150, 20);
        ctx.stroke();

        if(vidas <=3){
            ctx.beginPath();
            ctx.arc(150, 40, 20, 0, Math.PI*2);
            ctx.stroke();
        }

        if(vidas<=2){
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(150, 100);
            ctx.stroke();
        }

        if(vidas<=1){
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(130, 100);
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(170, 100);
            ctx.stroke();
        }

        if(vidas==0){
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(170, 130);
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(130, 130);
            ctx.stroke();
        }

    }
};


    document.getElementById("btn__nuevo").addEventListener("click", jugarDeNuevo);
    function jugarDeNuevo(){
        document.location.reload();
    }






























































































































































