let listaGenerica = [];
let LenguajesDeProgramacion = ['javascript', 'C', 'kotlin', 'python']
let listaNumeros = [10,24,35,43,51,62,70,88,97]

LenguajesDeProgramacion.push ('java');
LenguajesDeProgramacion.push ('rubi');
LenguajesDeProgramacion.push ('golang');

function lenguajes (){

 console.log (LenguajesDeProgramacion);
}

function lenguajeReverse(){

    LenguajesDeProgramacion.reverse();
    console.log(LenguajesDeProgramacion);

}

function promedioNumeros(){

    valorInicial = 0;
    sumaInicial = (listaNumeros.reduce((accumulator, currentValue) => accumulator + currentValue,
    valorInicial,)/listaNumeros.length
    );

    console.log(sumaInicial);
}

function mayorymenor (){
    mayor = 0;
    for(let numero of listaNumeros){
        console.log (numero); 
        if (mayor<numero)
            mayor=numero;
        
    }
    console.log (mayor);
}
lenguajes();
lenguajeReverse();
promedioNumeros();
mayorymenor();