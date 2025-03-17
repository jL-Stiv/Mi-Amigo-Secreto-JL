// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// lista vacia para ingresar a los amigos
let listaAmigos = [];


function agregarAmigo() {
    // el campo de entrada para escribir a los Amigos 
    let misAmigos = document.getElementById("amigo").value;
    // slerta si no encribe nada en el campo de entrada
    if (misAmigos === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    //console.log(misAmigos); // para ver a los amigos que se menciona

    // para mostrar la lista de amigos
    listaAmigos.push(misAmigos);  

    //console.log(listaAmigos);  // para mostrar la lista de amigos   

    // para darle funcion a la siguiente accion 
    actualizarLista();

    // Limpiar el campo de entrada escrita a los amigos anteriormente
    document.getElementById("amigo").value = "";


}



function actualizarLista() {
    //la funcion que va a mostrar a los Amigos en la lista
    let listaAmigosElemento = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizar
    listaAmigosElemento.innerHTML = "";

    // capturar en la pantalla a los listaAmigos y crear un <lista> para cada amigo ingresado
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");       // Creamos un <lista> para cada amigo
        li.textContent = listaAmigos[i];             // hace una declaracion del nombre Asignamos
        listaAmigosElemento.appendChild(li);         // muestra en la pantalla a los amigos agregados a la lista
    }

    //console.log("Lista visual actualizada.", listaAmigos); // muestra a los amigos ingresados a la lista
}




function sortearAmigo() {
    // hace la pregunta al campo de entrada si no escribe nigun nombre:
    if (listaAmigos.length === 0) {
        
        alert("No hay amigos. tienes que poner al menos un amigo, para poder Sortear !!");
        return;
    }
    //console.log("Lista de amigos disponible para el sorteo.", listaAmigos); // si esta todo correcto manda este mensaje !!


    // reconoce cuantos amigos a ingresasdo y hace un sorteo aleatorio
    let scogerAmigo = Math.floor(Math.random()*listaAmigos.length);

    //console.log("amigo generado oleatoriamente", scogerAmigo);

    // confirma tu amigo elegido
    let amigoElegido = listaAmigos[scogerAmigo];

    //console.log("tu amigo elegido es :" , amigoElegido)

    // muestra tu amigo elegido en la pantalla
    document.getElementById("resultado").innerHTML= `<li> ${amigoElegido} es tu amigo Secreto </li>`;

    //console.log("ya tienes tu amigo secreto !!" , listaAmigos)

    // // enconde la lista visualmente sin borrar lo que se escribio en la lista.
    document.getElementById("listaAmigos").innerHTML = "";

    // esta funcion es extra :
    // Deshabilitar el botón de sorteo para que no se pueda volver a usar
    // Deshabilitar la lista para que no se pueda volver a usar tambien 
    document.querySelector(".button-draw").disabled = true;    // boton
    document.getElementById("amigo").disabled = true;   //lista

    // Deshabilitar el botón Añadir para que no se pueda volver a usar
    document.querySelector(".button-add").disabled = true;
}



function reiniciarJuego() {
    // hace un Limpiado a la lista de amigos ingresados
    listaAmigos = [];

    // Limpia la lista visualmente o esconde 
    document.getElementById("listaAmigos").innerHTML = "";

    // Limpia el resultado del amigo secreto
    document.getElementById("resultado").innerHTML = "";

    // Habilitar el botón de sorteo, lista, Añadir nuevamente para volver a elegir 
    document.getElementById("amigo").disabled = false;
    document.querySelector(".button-add").disabled = false; 
    document.querySelector(".button-draw").disabled = false;
}













    
