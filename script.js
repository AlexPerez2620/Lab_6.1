// =====================================================
// LABORATORIO 6.1
// Práctica de JavaScript
// =====================================================


// -----------------------------------------------------
// VARIABLES Y DIFERENTES TIPOS DE DATOS
// -----------------------------------------------------

let nombreCurso = "Programación Web";
let numeroModulo = 6;
let laboratorioActivo = true;

console.log("Nombre del curso:", nombreCurso);
console.log("Número del módulo:", numeroModulo);
console.log("Laboratorio activo:", laboratorioActivo);


// -----------------------------------------------------
// ARREGLO
// -----------------------------------------------------

let tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
];

console.log("Arreglo de tecnologías:", tecnologias);


// -----------------------------------------------------
// OBJETO
// -----------------------------------------------------

let estudiante = {
    nombre: "Estudiante",
    curso: "Programación Web",
    modulo: 6
};

console.log("Objeto estudiante:", estudiante);


// -----------------------------------------------------
// FUNCIÓN PRINCIPAL
// IF / ELSE IF / ELSE
// -----------------------------------------------------

function evaluarEstudiante() {

    let nombre = document.getElementById("nombre").value;

    let nota = Number(
        document.getElementById("nota").value
    );

    let salida = document.getElementById("salida");


    if (nombre === "") {

        salida.innerHTML =
            "Debes escribir tu nombre.";

        console.log(
            "Prueba realizada: nombre vacío."
        );

        return;
    }


    if (nota < 0 || nota > 100) {

        salida.innerHTML =
            "La nota debe estar entre 0 y 100.";

        console.log(
            "Prueba realizada: nota fuera del rango."
        );

    } else if (nota >= 90) {

        salida.innerHTML =
            nombre +
            ", obtuviste una calificación excelente.";

        console.log(
            nombre + " obtuvo A."
        );

    } else if (nota >= 80) {

        salida.innerHTML =
            nombre +
            ", obtuviste una calificación buena.";

        console.log(
            nombre + " obtuvo B."
        );

    } else if (nota >= 70) {

        salida.innerHTML =
            nombre +
            ", aprobaste satisfactoriamente.";

        console.log(
            nombre + " obtuvo C."
        );

    } else {

        salida.innerHTML =
            nombre +
            ", debes continuar practicando.";

        console.log(
            nombre + " no obtuvo una nota aprobatoria."
        );
    }
}


// -----------------------------------------------------
// BUCLE FOR
// -----------------------------------------------------

function mostrarArreglo() {

    let texto = "<strong>Tecnologías utilizadas:</strong><br>";

    for (let i = 0; i < tecnologias.length; i++) {

        texto +=
            (i + 1) +
            ". " +
            tecnologias[i] +
            "<br>";

        console.log(
            "FOR:",
            tecnologias[i]
        );
    }

    document.getElementById("salida").innerHTML =
        texto;
}


// -----------------------------------------------------
// BUCLE WHILE
// -----------------------------------------------------

let contadorWhile = 1;

while (contadorWhile <= 3) {

    console.log(
        "WHILE - Repetición:",
        contadorWhile
    );

    contadorWhile++;
}


// -----------------------------------------------------
// BUCLE DO...WHILE
// -----------------------------------------------------

let contadorDoWhile = 1;

do {

    console.log(
        "DO...WHILE - Repetición:",
        contadorDoWhile
    );

    contadorDoWhile++;

} while (contadorDoWhile <= 3);


// -----------------------------------------------------
// ALCANCE DE VARIABLES
// -----------------------------------------------------

let variableGlobal =
    "Soy una variable global";


function demostrarAlcance() {

    let variableLocal =
        "Soy una variable local";

    console.log(variableGlobal);

    console.log(variableLocal);
}


demostrarAlcance();


// La siguiente variable solamente existe
// dentro de la función demostrarAlcance().

// console.log(variableLocal);


// -----------------------------------------------------
// CLOSURE
// -----------------------------------------------------

function crearContador() {

    let contador = 0;


    return function () {

        contador++;

        return contador;
    };
}


// La función interna mantiene acceso
// a la variable contador.

const contadorClosure =
    crearContador();


function probarContador() {

    let resultado =
        contadorClosure();

    document.getElementById("salida").innerHTML =
        "El contador del closure está en: " +
        resultado;

    console.log(
        "Closure ejecutado. Contador:",
        resultado
    );
}


// -----------------------------------------------------
// FUNCIÓN ADICIONAL
// -----------------------------------------------------

function sumar(numero1, numero2) {

    return numero1 + numero2;
}


let resultadoSuma = sumar(10, 5);

console.log(
    "Resultado de la función sumar:",
    resultadoSuma
);


// -----------------------------------------------------
// PRUEBAS CON DIFERENTES VALORES
// -----------------------------------------------------

console.log(
    "Prueba 1:",
    sumar(5, 5)
);

console.log(
    "Prueba 2:",
    sumar(20, 15)
);

console.log(
    "Prueba 3:",
    sumar(-5, 10)
);