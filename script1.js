// cracion del div que contendra el contenedor
const contenedor = document.createElement("div");
contenedor.id = "contenedor";
document.body.appendChild(contenedor);

// display input donde se mostrara la clave pero oculta
const display = document.createElement("input");
display.id = "display";

// oculta los caracteres
display.type = "password";

// el usuario no puede escribir
display.disabled = true;

contenedor.appendChild(display);

// botones de los numeros donde se guardaran los botones del 1 al 9
const contBotones = document.createElement("div");
contBotones.className = "botones";
contenedor.appendChild(contBotones);

// variable donde se va guardando la clave introducida
let clave = "";

// funcion para mostrar de forma aleatoria los botones usando randomizador 
function mezclar(array) {return array.sort(() => Math.random() - 0.5);}

// array con los numeros del 1 al 9
let numeros = mezclar([1,2,3,4,5,6,7,8,9]);

// se crea un boton por cada numero del array
numeros.forEach(num => {
    const boton = document.createElement("button");
    boton.textContent = num;

    // al pulsar el boton se añade el numero a la clave y solo permitir 4 caracteres
    boton.onclick = () => {
        if (clave.length < 4) {
            clave += num;
            display.value = clave;
        }
    };

    contBotones.appendChild(boton);
});

// botones c y validar
const acciones = document.createElement("div");
acciones.id = "acciones";
contenedor.appendChild(acciones);

const botonc = document.createElement("button");
botonc.textContent = "C";
botonc.onclick = () => {

    // uso slice para eliminar el ultimo caracter de la cadena
    clave = clave.slice(0, -1);

    display.value = clave;

    // y limpio el mensaje
    mensaje.textContent = "";
};

const botonvalidar = document.createElement("button");
botonvalidar.textContent = "VALIDAR";
botonvalidar.onclick = () => {

    // compruebo que la clave tenga 4 caracteres
    if (clave.length !== 4) {
        mensaje.textContent = "La clave es diferente de 4 caracteres";
    } else {
        // utilizo expresion para comprobar si la contraseña es correcta
        const regex = /^9999$/;

        if (regex.test(clave)) {
            mensaje.textContent = "Clave correcta";
        } else {
            mensaje.textContent = "Clave incorrecta";
        }
    }
};

acciones.appendChild(botonc);
acciones.appendChild(botonvalidar);

// creascion del mensaje
const mensaje = document.createElement("div");
mensaje.id = "mensaje";
contenedor.appendChild(mensaje);