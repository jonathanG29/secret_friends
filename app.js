// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigoAñadido = (document.querySelector('#amigo').value)

    if(!esNombreValido(amigoAñadido)) {
        limpiarCaja();
        return;
    }

    friends.push(amigoAñadido)
    limpiarCaja();
    mostrarAmigos();
}


// funcion para validar el nombre del amigo
function esNombreValido(nombre) {
    // Validar que el campo no esté vacío y que el amigo no haya sido agregado
    if (nombre === '') {
        alert('Debes ingresar el nombre de tu amigo');
        return false;
    } else if (nombre.length <= 2) {
        alert('El nombre del amigo debe ser mayor a 2 caracteres');
        return false;
    } else if (friends.includes(nombre)) {
        alert('El amigo ya fue agregado');
        return false;
    } else if (!isNaN(nombre)) {
        alert('El nombre del amigo no puede ser un número');
        return false;
    } else if (friends.length >= 5) {
        alert('No puedes agregar más de 5 amigos');
        return false;
    }
    return true;
}



// funcion para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}


// Función para mostrar la lista de amigos en el DOM
function mostrarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    for (let amigo of friends) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// funcion para seleciionar un amigo aleatorio

function sortearAmigo() {

    if (friends.length === 0) {
        alert('Debes agregar amigos para poder seleccionar uno')
        return
    }


    
    let amigoAleatorio = friends[Math.floor(Math.random() * friends.length)]
    let resultado = document.querySelector('#resultado')
    resultado.textContent = `El amigo seleccionado es: ${amigoAleatorio}`
}

document.querySelector('button-draw').addEventListener('click', seleccionarAmigo);

// funcion para reiniciar el juego

function reiniciarJuego(){
    friends = []
    mostrarAmigos()
    document.querySelector('#resultado').textContent = ''
}