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
	let letra = event.key;
	letra = letra.toUpperCase();
	if (palabraJuega.includes(letra)) {
		dibujarLetrasCorrectas(letra);
	} else {
		dibujarLetrasIncorrectas(letra);
	}
});

const miInput = document.querySelector('#miInput');
miInput.addEventListener('input', (event) => {
	let letra = event.target.value;
	letra = letra.toUpperCase();
	// Compara la letra con las letras de la palabra a adivinar
	if (palabraJuega.includes(letra)) {
		dibujarLetrasCorrectas(letra);
	} else {
		dibujarLetrasIncorrectas(letra);
	}
	// Limpia el valor del input para poder ingresar otra letra
	event.target.value = '';
});
