let numemeroSecreto = 0;
let intentos = 0;
let numerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numemeroSecreto);
    console.log(intentos);
    if (numemeroSecreto===numeroUsuario){

    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' :'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroUsuario<numemeroSecreto){
            asignarTextoElemento('p','el numero es mayor');
        } else{
            asignarTextoElemento('p','el numero es menor');

        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNUmeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log (numeroGenerado);
    console.log(numerosSorteado);

if (numerosSorteado.length===numeroMaximo){
    console.log('hola');
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
} else { 

    if(numerosSorteado.includes(numeroGenerado)){
        return generarNUmeroSecreto();
    }
    else {
        numerosSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    
    }
}

function mensajesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `escriba un numero del 1 al ${numeroMaximo}`);
    numemeroSecreto = generarNUmeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){

    limpiarCaja();
    mensajesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');      

}
generarNUmeroSecreto(numemeroSecreto);
mensajesIniciales();
