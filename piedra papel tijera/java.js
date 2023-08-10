const jugadorText = document.querySelector("#jugadorText");
const pcText = document.querySelector("#pcText");
const resultadoText = document.querySelector("#resultadoText");
const btnPiedra = document.getElementById("#btnPiedra");
const btnTijera = document.getElementById("#btnTijera");
const btnPapel = document.getElementById("#btnPapel");
let resultado;
let opcionJugador;
let opcionPc;


function textCambio(){
    if (opcionJugador == "Piedra"){
        jugadorText.innerHTML = "Piedra"
    } else if(opcionJugador == "Tijeras"){
        jugadorText.innerHTML = "Tijeras"
    } else if(opcionJugador == "Papel"){
        jugadorText.innerHTML = "Papel"
    }
}

function textoCambio(){
    if (opcionPc == "Piedra"){
        pcText.innerHTML = "Piedra"
    } else if(opcionPc == "Tijeras"){
        pcText.innerHTML = "Tijeras"
    } else if(opcionPc == "Papel"){
        pcText.innerHTML = "Papel"
    }
}



btnPiedra.addEventListener("click",function(){
    opcionJugador ="Piedra";
    textCambio()
    opPc();
})

btnTijera.addEventListener("click",function(){
    opcionJugador ="Tijeras";
    textCambio()
    opPc();
})
btnPapel.addEventListener("click",function(){
    opcionJugador ="Papel";
    textCambio()
    opPc();
});

function opPc(){
    var aleatorio = nAleatorio();
    
    if (aleatorio == 0){
        opcionPc = "Piedra";
    } else if
        (aleatorio == 1){
            opcionPc = "Tijera";
    } else if
        (aleatorio == 2){
            opcionPc = "Papel";
    };
    batalla();
    textoCambio()
};
    


function nAleatorio(){
    let n = Math.floor(Math.random()*3);
    return n;
}

function  batalla(){
    if(opcionJugador == opcionPc){
        resultadoText.innerHTML = "Empate"
    } else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        resultadoText.innerHTML = "Ganaste!";
    } else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        resultadoText.innerHTML = "Ganaste!";
    } else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        resultadoText.innerHTML = "Ganaste!";
    } else{
        resultadoText.innerHTML = "Perdiste!";
    };
};

