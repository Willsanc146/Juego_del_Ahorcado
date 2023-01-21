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

const teclas = document.querySelectorAll('.tecla');

// Agrega un evento touchstart a cada tecla
teclas.forEach((tecla) => {
	tecla.addEventListener('touchstart', (event) => {
		// Obtiene el valor de la tecla precionada
		let letra = event.target.innerText;

		// Convierte la letra a mayúsculas
		letra = letra.toUpperCase();

		// Comprueba si la letra precionada está en la palabra a adivinar
		if (palabraJuega.includes(letra)) {
			dibujarLetrasCorrectas(letra);
		} else {
			dibujarLetrasIncorrectas(letra);
		}
	});
});
