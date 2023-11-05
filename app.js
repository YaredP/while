const multiplo = prompt("Dame un número");

if (multiplo % 5 == 0) {
  alert(multiplo + " es multiplo");
} else if (multiplo % 5 > 0) {
  alert(multiplo + " no es multiplo");
}

const loteria = prompt("Escribe un número del 1 al 50");

/*let numeros = [1, 2,3, 4, 50]; */

if (loteria <= 50) {
  alert("¡lotería!");
} else if (loteria >= 50) {
  alert("sigue participando");
}

let numero;
let numeros = [];

do {
  numero = parseInt(prompt("Ingrese un número"));

  if (typeof numero === "number") {
    if (numero !== 0) {
      numeros.push(numero);
    }
  }
} while (numero !== 0);

alert(`Los numeros capturados son: ${numeros}`);

let palabraLetra = null;
let match = "";
let palabras = "";
let letras = "";

const digitos = {
  palabra: /^[a-zA-Z]{2,16}$/,
  letra: /^[a-zA-Z]$/,
};

do {
  palabraLetra = prompt("Ingrese una palabra/letra");

  if (digitos.palabra.test(palabraLetra)) {
    palabras += palabraLetra;
  } else if (digitos.letra.test(palabraLetra)) {
    letras += palabraLetra;
  } else {
    alert(`Fin del programa`);
    palabraLetra = null;
  }
} while (palabraLetra !== null);

alert(`Palabras: ${palabras}, Letras: ${letras}`);


let dias = [
  "lunes",
  "martes",
  "miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];
let dia = null;
let ingresoDia = null;

function diaSemana(dia) {
  if (dia < 0 || dia > 7) {
    throw new Error("Error, Fuera de rango");
  }

  return dias[dia - 1];
}

do {
  ingresoDia = parseInt(
    prompt(
      "¡Bienvenido!" +
        "\n Seleccione una opción:" +
        "\n 1. Lunes" +
        "\n 2. Martes" +
        "\n 3. Miercoles" +
        "\n 4. Jueves" +
        "\n 5. Viernes" +
        "\n 6. Sabado" +
        "\n 7. Domingo"
    )
  );

  if (typeof ingresoDia !== "number") {
    throw new Error("Error, Opción Invalida");
  } else {
    dia = diaSemana(ingresoDia);

    switch (dia) {
      case "Lunes":
        alert(`${dia}, ¡Ten un bonito inicio de semana!`);
        break;
      case "Martes":
        alert(`${dia}, ¡Feliz Martes!`);
        break;
      case "Miercoles":
        alert(`${dia}, ¡Hey!. Ya es mitad se semana`);
        break;
      case "Jueves":
        alert(`${dia}, ¡Uff ya es Jueves!`);
        break;
      case "Viernes":
        alert(`${dia}, ¡Al fin es Viernes!`);
        break;
      case "Sabado":
        alert(`${dia}, ¡Diviértete! es fin de semana`);
        break;
      default:
        alert(`!Hey!Ve a descansar`);
        break;
    }
  }
} while (dia !== "Domingo");

