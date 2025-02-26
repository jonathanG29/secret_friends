// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {

    let amigoAñadido = document.querySelector('#amigo').value

    // Validar que el campo no esté vacío y que el amigo no haya sido agregado
    if (amigoAñadido === '') {
        alert('Debes ingresar el nombre de tu amigo')
        return
    }else if (friends.includes(amigoAñadido)) {
        alert('El amigo ya fue agregado')
        limpiarCaja()
        return
    }

    friends.push(amigoAñadido)
    console.log(friends)
    
    limpiarCaja()
}

// funcion para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#amigo').value = ''
}


