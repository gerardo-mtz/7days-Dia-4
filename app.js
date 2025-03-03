// Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10
// para el número que vas a adivinar (por ejemplo, el 7).

let numeroSorteado = Math.floor(Math.random() * 11);
console.log(numeroSorteado);

let intentos = 3;
let numeroIngresado;

// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará.
// Si te equivocas, te dará 2 intentos más.

while (intentos > 0) {
  numeroIngresado = parseInt(prompt("Adivina el numero del 0 al 10"));
  if (numeroIngresado > 10 || numeroIngresado < 0 || isNaN(numeroIngresado)) {
    alert("El numero debe estar entre 0 y 10");
  } else if (numeroIngresado === numeroSorteado) {
    alert("Felicidades, adivinaste el numero");
    break;
  } else {
    intentos--;
    if (intentos > 0) {
      alert(
        "Incorrecto. Intenta de nuevo. Te quedan " + intentos + " intentos"
      );
    }
  }
}

if (intentos === 0) {
  alert("Se agotaron los intentos. El numero era " + numeroSorteado);
}

// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

// Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
