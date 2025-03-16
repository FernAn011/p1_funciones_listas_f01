

/* Desafío 1 */

//cambia el texto de la etiqueta h1 a "Hora del Desafío"
function cambiarTitulo() {
    document.querySelector("h1").textContent = "Hora del Desafío";
    log("Título cambiado a 'Hora del Desafío'");
}

//muestra en la consola el mensaje "El botón fue clicado"
function mostrarEnConsola() {
    console.log("El botón fue clicado");
    log("Mensaje en consola: 'El botón fue clicado'");
}

//se pregunta el nombre de una ciudad de Brasil y muestra una alerta con el mensaje correspondiente
function preguntarCiudad() {
    let ciudad = prompt("Ingrese el nombre de una ciudad de Brasil:");
    if (ciudad) {
        alert("Estuve en " + ciudad + " y me acordé de ti");
        log("Ciudad ingresada: " + ciudad);
    } else {
        log("No se ingresó ninguna ciudad.");
    }
}

//muestra una alerta con el mensaje "Yo amo JS" y también en el contenedor log
function mostrarAlerta() {
    alert("Yo amo JS");
    log("Alerta mostrada: 'Yo amo JS'");
}

//se ingresan 2 números, se suma y se muestra el resultado en una alerta y aparte en el contenedor log
function sumarNumeros() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let suma = parseFloat(num1) + parseFloat(num2);
    if (!isNaN(suma)) {
        alert("La suma es: " + suma);
        log("Suma: " + num1 + " + " + num2 + " = " + suma);
    } else {
        alert("Por favor, ingrese números válidos.");
        log("Error al sumar, entradas inválidas.");
    }
}

/* Desafío 2 */

//muestra "¡Hola, mundo!" en la consola
function holaMundo() {
    console.log("¡Hola, mundo!");
    log("¡Hola, mundo! impreso en consola.");
}

// función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
function saludarNombre(nombre) {
    console.log("¡Hola, " + nombre + "!");
    log("¡Hola, " + nombre + "!");
}

// Pide un número, calcula su doble y muestra el resultado
function dobleNumero() {
    let num = prompt("Ingrese un número:");
    let n = parseFloat(num);
    if (!isNaN(n)) {
        let doble = n * 2;
        console.log("El doble de " + n + " es " + doble);
        log("Doble: " + n + " * 2 = " + doble);
    } else {
        alert("Por favor, ingrese un número válido.");
        log("Error: entrada no numérica.");
    }
}

//se ingresan tres números, se calcula y muestra su promedio
function promedioTres() {
    let n1 = prompt("Ingrese el primer número:");
    let n2 = prompt("Ingrese el segundo número:");
    let n3 = prompt("Ingrese el tercer número:");
    let a = parseFloat(n1);
    let b = parseFloat(n2);
    let c = parseFloat(n3);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let promedio = (a + b + c) / 3;
        console.log("El promedio es " + promedio);
        log("Promedio de " + a + ", " + b + ", " + c + " es " + promedio);
    } else {
        alert("Por favor, ingrese números válidos.");
        log("Error en promedio, entradas no numéricas.");
    }
}

//calcula el mayor entre dos números
function numeroMayor() {
    let n1 = prompt("Ingrese el primer número:");
    let n2 = prompt("Ingrese el segundo número:");
    let a = parseFloat(n1);
    let b = parseFloat(n2);
    if (!isNaN(a) && !isNaN(b)) {
        let mayor = (a > b) ? a : b;
        console.log("El número mayor es " + mayor);
        log("Entre " + a + " y " + b + ", el mayor es " + mayor);
    } else {
        alert("Por favor, ingrese números válidos.");
        log("Error: entradas no numéricas en comparación.");
    }
}

// para calcular el cuadrádo de un número ingresado
function cuadradoNumero() {
    let num = prompt("Ingrese un número:");
    let n = parseFloat(num);
    if (!isNaN(n)) {
        let cuadrado = n * n;
        console.log("El cuadrado de " + n + " es " + cuadrado);
        log("Cuadrado: " + n + "^2 = " + cuadrado);
    } else {
        alert("Por favor, ingrese un número válido.");
        log("Error: entrada no numérica para cuadrado.");
    }
}

/* Desafío 3 */

//se ingresa el peso y altura, y se calcula el IMC de la persona
function calcularIMC() {
    let peso = prompt("Ingrese su peso en kilogramos:");
    let altura = prompt("Ingrese su altura en metros:");
    let p = parseFloat(peso);
    let a = parseFloat(altura);
    if (!isNaN(p) && !isNaN(a) && a !== 0) {
        let imc = p / (a * a);
        alert("Tu IMC es: " + imc.toFixed(2));
        log("IMC calculado: " + imc.toFixed(2));
    } else {
        alert("Por favor, ingrese valores válidos.");
        log("Error en cálculo de IMC.");
    }
}

//siempre que no sea un número entero no negativo y se calcula su factorial
function calcularFactorial() {
    let num = prompt("Ingrese un número para calcular su factorial:");
    let n = parseInt(num);
    if (!isNaN(n) && n >= 0) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        alert("El factorial de " + n + " es " + fact);
        log("Factorial de " + n + " es " + fact);
    } else {
        alert("Por favor, ingrese un número entero no negativo.");
        log("Error: entrada inválida para factorial.");
    }
}

//convierte dólares a reales utilizando la cotización de R$4,80
function convertirDolares() {
    let dolares = prompt("Ingrese un valor en dólares:");
    let d = parseFloat(dolares);
    if (!isNaN(d)) {
        let reales = d * 4.80;
        alert(d + " dólares equivalen a R$ " + reales.toFixed(2));
        log("Conversión: " + d + " USD = R$ " + reales.toFixed(2));
    } else {
        alert("Por favor, ingrese un número válido.");
        log("Error: entrada no numérica en conversión.");
    }
}

//se ingresan altura y ancho de un rectángulo  y se muestra en pantalla el área y el perímetro de una sala rectangular
function areaPerimetroRect() {
    let altura = prompt("Ingrese la altura del rectángulo:");
    let ancho = prompt("Ingrese el ancho del rectángulo:");
    let a = parseFloat(altura);
    let w = parseFloat(ancho);
    if (!isNaN(a) && !isNaN(w)) {
        let area = a * w;
        let perimetro = 2 * (a + w);
        alert("Área: " + area + " - Perímetro: " + perimetro);
        log("Rectángulo -> Área: " + area + ", Perímetro: " + perimetro);
    } else {
        alert("Por favor, ingrese números válidos.");
        log("Error en cálculo del rectángulo.");
    }
}

//se ingresan radio de un círculo y se muestra en pantalla el área y el perímetro de una sala circular (Pi = 3,14)
function areaPerimetroCirculo() {
    let radio = prompt("Ingrese el radio del círculo:");
    let r = parseFloat(radio);
    if (!isNaN(r)) {
        const pi = 3.14;
        let area = pi * r * r;
        let perimetro = 2 * pi * r;
        alert("Área: " + area.toFixed(2) + " - Perímetro: " + perimetro.toFixed(2));
        log("Círculo -> Área: " + area.toFixed(2) + ", Perímetro: " + perimetro.toFixed(2));
    } else {
        alert("Por favor, ingrese un número válido.");
        log("Error en cálculo del círculo.");
    }
}

//muestra en log la tabla de multiplicar de un número
function tablaMultiplicar() {
    let num = prompt("Ingrese un número para ver su tabla de multiplicar:");
    let n = parseInt(num);
    if (!isNaN(n)) {
        let tabla = "";
        for (let i = 1; i <= 10; i++) {
            tabla += n + " x " + i + " = " + (n * i) + "<br>";
        }
        //aqui el contenedor de la tabla mostrado en el contenedor log
        log("Tabla de multiplicar del " + n + ":<br>" + tabla);
    } else {
        alert("Por favor, ingrese un número válido.");
        log("Error en la tabla de multiplicar.");
    }
}

/* Desafío 4 */

//declaramos de las listas globales
let listaGenerica = [];
let lenguagesDeProgramacion = [];

//se crea la lista vacía "listaGenerica" y la lista "lenguagesDeProgramacion" con los elementos indicados,
// agregando además 'Java', 'Ruby' y 'GoLang'
function crearListas() {
    // Crear lista vacía
    listaGenerica = [];
    log("listaGenerica creada y vacía.");
    
    // Crear lista de lenguajes de programación
    lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
    // Agregar elementos adicionales
    lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    log("lenguagesDeProgramacion creada: " + lenguagesDeProgramacion.join(", "));
}

//muestra en la consola todos los elementos de lenguagesDeProgramacion
function mostrarLista() {
    if(lenguagesDeProgramacion.length > 0) {
        console.log("Lenguajes de Programación: ", lenguagesDeProgramacion);
        log("LenguagesDeProgramacion: " + lenguagesDeProgramacion.join(", "));
    } else {
        log("La lista lenguagesDeProgramacion está vacía. Ejecute 'Crear Listas' primero.");
    }
}

//muestra en la consola todos los elementos de lenguagesDeProgramacion en orden inverso
function mostrarListaInversa() {
    if(lenguagesDeProgramacion.length > 0) {
        let listaInversa = [...lenguagesDeProgramacion].reverse();
        console.log("Lenguajes en orden inverso: ", listaInversa);
        log("LenguagesDeProgramacion (inverso): " + listaInversa.join(", "));
    } else {
        log("La lista lenguagesDeProgramacion está vacía. Ejecute 'Crear Listas' primero.");
    }
}

//se pide una lista de números separados por comas, se calcula y muestra el promedio de todos los numeros
function promedioLista() {
    let input = prompt("Ingrese números separados por comas para saber el promedio de estos números:");
    if(input) {
        let numeros = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if(numeros.length > 0) {
            let suma = numeros.reduce((acc, curr) => acc + curr, 0);
            let promedio = suma / numeros.length;
            console.log("El promedio es: " + promedio);
            log("Promedio: " + promedio);
        } else {
            alert("No se ingresaron números válidos.");
            log("Error: entrada inválida para promedio.");
        }
    } else {
        log("No se ingresaron datos.");
    }
}

//se pide una lista de números y muestra en la consola el número menor y el mayor
function minMaxLista() {
    let input = prompt("Ingrese números separados por comas:");
    if(input) {
        let numeros = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if(numeros.length > 0) {
            let max = Math.max(...numeros);
            let min = Math.min(...numeros);
            console.log("Mínimo: " + min + ", Máximo: " + max);
            log("Mínimo: " + min + ", Máximo: " + max);
        } else {
            alert("No se ingresaron números válidos.");
            log("Error: entrada inválida para min/max.");
        }
    } else {
        log("No se ingresaron datos.");
    }
}


//utiliza los número de una lista de números ingresada y cuánto suma todo
function sumarLista() {
    let input = prompt("Ingrese números separados por comas para sumarlos todos:");
    if(input) {
        let numeros = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if(numeros.length > 0) {
            let suma = numeros.reduce((acc, curr) => acc + curr, 0);
            console.log("La suma de la lista es: " + suma);
            log("Suma de la lista: " + suma);
        } else {
            alert("No se ingresaron números válidos.");
            log("Error: entrada inválida para suma de lista.");
        }
    } else {
        log("No se ingresaron datos.");
    }
}

//se busca un lenguaje en la lista lenguagesDeProgramacion y muestra en qué posición está
function buscarEnLista() {
    if(lenguagesDeProgramacion.length > 0) {
        let elemento = prompt("Ingrese el elemento a buscar en la lista lenguagesDeProgramacion:");
        let indice = lenguagesDeProgramacion.indexOf(elemento);
        console.log("Índice de " + elemento + ": " + indice);
        log("Índice de '" + elemento + "': " + indice);
    } else {
        log("La lista lenguagesDeProgramacion está vacía. Ejecute 'Crear Listas' primero.");
    }
}

//se ingresa dos listas de números del mismo tamaño y se devuelve una nueva con la suma de cada par
function sumarListas() {
    let input1 = prompt("Ingrese la primera lista de números (separados por comas):");
    let input2 = prompt("Ingrese la segunda lista de números (separados por comas):");
    if(input1 && input2) {
        let lista1 = input1.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        let lista2 = input2.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if(lista1.length === lista2.length && lista1.length > 0) {
            let sumaList = lista1.map((num, index) => num + lista2[index]);
            console.log("Suma de listas: ", sumaList);
            log("Suma de listas: " + sumaList.join(", "));
        } else {
            alert("Las listas deben tener el mismo tamaño y contener números válidos.");
            log("Error: Listas de tamaños diferentes o inválidas.");
        }
    } else {
        log("No se ingresaron datos en ambas listas.");
    }
}

//se recibe una lista de números y se devuelve otra lista pero con cada número ingresdo al cuadrado. 
function cuadradoLista() {
    let input = prompt("Ingrese números separados por comas para aplicar potencia cuadrada a cada número:");
    if(input) {
        let numeros = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if(numeros.length > 0) {
            let cuadrados = numeros.map(num => num * num);
            console.log("Cuadrados: ", cuadrados);
            log("Cuadrado de cada número: " + cuadrados.join(", "));
        } else {
            alert("No se ingresaron números válidos.");
            log("Error: entrada inválida para cuadrado de lista.");
        }
    } else {
        log("No se ingresaron datos.");
    }
}
