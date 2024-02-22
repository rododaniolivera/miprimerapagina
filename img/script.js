//alert("Hola este es mi Javascript");
//let nombre = "Rodolfo";

//console.log(nombre);

const Acerca_de_mi = document.querySelector('.acercatitulo');

//console.log (Acerca_de_mi.innerHTML);

let titulo = Acerca_de_mi.innerText;

//console.log (titulo);

if(titulo == "Acerca de mí"){
    Acerca_de_mi.innerHTML = "Acerca de Rodo";
}

let parrafo = document.querySelector(".parrafo2");

//console.log(parrafo);

function cambiarParrafo(nombre, barrio, gusto){
    let contenido = `Me llamo ${nombre}, Vivo en ${barrio} y tengo 25 años. Me gusta entrenar, salir con amigos, escuchar musica, etc. 
    Me gusta mucho la tecnologia y los ${gusto}. Me gustaría formar mi empresa de servicios IT.`

    return contenido;
}

parrafo.innerText = cambiarParrafo("Rodolfo Daniel", "La Blanqueada", "gatos");