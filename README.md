# Amigo Secreto

## Descripción
Este proyecto es una aplicación web para organizar un juego de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos, mostrar la lista de amigos agregados, seleccionar un amigo al azar y reiniciar el juego.

[https://friendssecret.netlify.app/]

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/secret_friends.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd secret_friends
    ```

3. Abre el archivo [index.html](http://_vscodecontentref_/1) en tu navegador para ver la aplicación en funcionamiento.

## Uso
### Agregar Amigos
1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón "Añadir" para agregar el nombre a la lista.
3. El nombre debe ser único, no puede ser un número, y debe tener más de 2 caracteres. Además, no puedes agregar más de 5 amigos.

### Mostrar Lista de Amigos
La lista de amigos se muestra automáticamente en la sección debajo del campo de entrada después de agregar un amigo.

### Seleccionar Amigo al Azar
1. Haz clic en el botón "Sortear amigo".
2. Se seleccionará un amigo al azar de la lista y se mostrará en la sección de resultados.

### Reiniciar el Juego
1. Haz clic en el botón "Reiniciar juego".
2. La lista de amigos y el resultado se limpiarán, permitiéndote comenzar de nuevo.

## Estructura del Proyecto
- [index.html](http://_vscodecontentref_/2): Contiene la estructura HTML de la aplicación.
- [style.css](http://_vscodecontentref_/3): Contiene los estilos CSS para la aplicación.
- [app.js](http://_vscodecontentref_/4): Contiene la lógica JavaScript para agregar amigos, validar nombres, mostrar la lista de amigos, seleccionar un amigo al azar y reiniciar el juego.

## Código Principal
### HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagen representativa de amigo secreto">
        </header>
        <section class="input-section">
            <h2 class="section-title">Digite el nombre de sus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
                <button class="button-add" onclick="agregarAmigo()">Añadir</button>
            </div>
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>
            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                    Sortear amigo
                </button>
                <button class="button-reset" onclick="reiniciarJuego()" aria-label="Reiniciar juego">
                    <img src="assets/restart.png" alt="Ícono para reiniciar">
                    Reiniciar juego
                </button>
            </div>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>
