let amigos = [];  


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para agregar un nombre a la lista  
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value; // Obtener el valor del input  

    // Validar si el nombre no está vacío y no está repetido  
    if (nombreAmigo !== '' && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo); // Agregar el nombre al array  
        actualizarListaAmigos(); // Actualizar la lista en la página  
        limpiarCaja(); // Limpiar el campo de entrada  
    } else {
        alert('Por favor, ingresa un nombre válido y que no esté repetido.');
    }
}

// Función para actualizar la lista de amigos en el HTML  
function actualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpiar la lista antes de actualizar  

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li'); // Crear un nuevo elemento <li>  
        listItem.textContent = amigo; // Asignar el nombre al elemento  
        listaElement.appendChild(listItem); // Añadir el <li> a la lista  
    });
}

// Función para sortear un amigo secreto  
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, añade nombres antes de sortear.'); // Validar que haya nombres en la lista  
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio  
    const amigoSeleccionado = amigos[indiceAleatorio]; // Seleccionar un amigo aleatorio  
    asignarTextoElemento('#resultado', `Tu amigo secreto es: <strong>${amigoSeleccionado}</strong>`); // Mostrar el resultado  
}

// Función para limpiar el campo de entrada  
function limpiarCaja() {
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada del amigo  
}

// Función para inicializar el juego  
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del amigo secreto'); // Título  
    asignarTextoElemento('#resultado', 'Añade nombres y sortea tu amigo secreto.'); // Mensaje inicial  
}

// Inicializar el juego al cargar  
condicionesIniciales();  