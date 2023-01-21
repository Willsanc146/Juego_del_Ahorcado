import { dibujarLetrasCorrectas } from './letrasCorrectas.js';
import { dibujarLetrasIncorrectas } from './letrasIncorrectas.js';

const juego = JSON.parse(localStorage.getItem('words')) || {};

//Función para obtener una palabra aleatoria del array
function RandomWord(juego) {
	return juego[Math.floor(Math.random() * juego.length)];
}

//Obtener una palabra para jugar
let juega = '';
let palabra = '';
juega = RandomWord(juego);
palabra = juega.value;
export const palabraJuega = palabra.split('');

alert('la palabra tiene: ' + palabraJuega.length + ' letras.');

document.addEventListener('keyup', (event) => {
	let letra = String.fromCharCode(event.keyCode);
	letra = letra.toUpperCase();
	if (palabraJuega.includes(letra)) {
		dibujarLetrasCorrectas(letra);
	} else {
		dibujarLetrasIncorrectas(letra);
	}
});

document.addEventListener('touchend', (event) => {
	let letra = event.target.innerText; // Obtiene el valor de la tecla precionada
	letra = letra.toUpperCase(); // Convierte la letra a mayúsculas
	if (palabraJuega.includes(letra)) {
		dibujarLetrasCorrectas(letra);
	} else {
		dibujarLetrasIncorrectas(letra);
	}
});
