const contenedor = document.createElement("div");
contenedor.id = "contenedor";
document.body.appendChild(contenedor);

const titulo = document.createElement("h1");
titulo.textContent = "LOTERÍA PRIMITIVA";
contenedor.appendChild(titulo);

const contnumeros = document.createElement("div");
contnumeros.id = "numeros";
contenedor.appendChild(contnumeros);

// creo la tabla de numeros
for (let i = 1; i <= 49; i++) {

    // cada numero sera un div clicable
    const num = document.createElement("div");

    // clase para los botones
    num.classList.add("botonnumero");

    // numeros visibles, si no no se muestan en cada boton
    num.textContent = i;

    contnumeros.appendChild(num);
}

// boton sorteo
const boton = document.createElement("button");
boton.textContent = "Realizar sorteo";
contenedor.appendChild(boton);

// elemento donde se mostrará el número de aciertos
const resultado = document.createElement("p");
contenedor.appendChild(resultado);

// se espera al evento click en el contenedor padre, en lugar de añadir un listener a cada numero
contnumeros.addEventListener("click", (e) => {

    // no se hace nada si el elemento clicado no es un numero
    if (!e.target.classList.contains("botonnumero")) return;

    // obtengo todos los numeros seleccionados
    const seleccionados = document.querySelectorAll(".seleccionado");

    // si el numero ya estaba seleccionado, lo desmarcamos, ya que permite seleccionar y deseleccionar numero
    if (e.target.classList.contains("seleccionado")) {
        e.target.classList.remove("seleccionado");
        return;
    }

    // solo seleccionar 6
    if (seleccionados.length < 6) {e.target.classList.add("seleccionado");}
});

// funcion del boton sorteo
boton.addEventListener("click", () => {

    // se obtiene los numeros seleccionados
    const seleccionados = document.querySelectorAll(".seleccionado");

    // saltar eror si no se elige 6 numeros
    if (seleccionados.length !== 6) {
        resultado.textContent = "Tienes que seleccionar 6 numeros.";
        return;
    }

    // Convierto los elementos seleccionados en un array de numeros
    const numerosUsuario = Array.from(seleccionados).map(n => Number(n.textContent));

    // array que guardar los 6 numeros del sorteo
    const sorteo = [];

    // Genero los numeros aleatorios hasta tener 6 distintos
    while (sorteo.length < 6) {
        const num = Math.floor(Math.random() * 49) + 1;

        // evito numeros repetidos en el sorteo
        if (!sorteo.includes(num)) {sorteo.push(num);}
    }

    // Comparo los numeros seleccionados con los del sorteo
    const aciertos = numerosUsuario.filter(n => sorteo.includes(n)).length;

    // mostrar resultados
    resultado.textContent = `
    ${sorteo.join(", ")}. 
    Has tenido ${aciertos} aciertos.`;
});