//vamos hacer un carrusel de imagenes

window.onload = () => {

    //quiero una coleccion de imagenes 
    const imagenes = [
        "imagen1", //url
        "imagen2",
        "imagen3",
        "imagen4"
    ];

    /*
    Con la api dom podemos acceder al documento de HTML, para esto necesitamos buscar, 
    que nodos (elementos, por id, class, name) vamos a ocupar 
    
    para ello podemos hacer uso de los siguientes metodos
    */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.querySelector("#mensajes");
    const colorValores = document.getElementById("colorValor");

    let imagenActual = 0;

    const imagenAnterior = () => {
        //accedemos a la imagen dentro del arreglo para realizar el recorrido
        if(imagenActual > 0){
            imagenActual--;
        }else{
            imagenActual = imagenes.length-1;
        }
        display.src = imagenes[imagenActual];
    };

    const imagenSiguiente = () => {
        //accedemos a la imagen dentro del arreglo para realizar el recorrido
        if(imagenActual < imagenes.length -1){
            imagenActual++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };

    //para la visualizacion en pantalla completa
    const pantallaCompleta = () => {
        display.requestFullscreen;
    }

    ////ver todos los mensajes que se agreguen
    const mostrarMensaje = () => {
        mensajes.innerHTML += `${campoMensaje.value}<br>/`;
        campoMensaje.value = "";
        /*
        Si queremos manipular los elementos recien añadidos
        usamos:
        createElement -> crear 
        por ejemplo
        const lista = document.createElement("ul");
        const elementolista = document.createElement("li");
        elementolista.onclick = pantallaCompleta;
        elementolista.innerHTML = `${campoMensaje.value}/`;
        para agrearlo
        lista.append(elementolista);
        mensajes.append(lista);
        */
    };

    const cambiarColor = () =>{
        colorValores.click();
    };

    const inicializar = () => {
        //vamos a programar los botones
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        //vamos a poder manipular cualquier atributo
        colorValores.onchange = () =>{
            mensajes.style.colorValores.value;
        };

        display.src = imagenes[0];
    };

    inicializar();

};