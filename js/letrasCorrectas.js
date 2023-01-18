import { palabraJuega } from './juegoNuevo.js';
import { botonReinicio } from './botonesJuegoNuevo.js';
import { botonSalir } from './botonesJuegoNuevo.js';

let letrasCorrectas = []; //Variable para almacenar las letras correctas
//Función para dibujar las letras correctas
export function dibujarLetrasCorrectas(letra) {
	// Obtener el canvas y el contexto del canvas
	const canvas = document.getElementById('letrasCorrectas');
	const contexto = canvas.getContext('2d');

	// Establecer la fuente y el tamaño del texto
	contexto.font = '24px Arial';

	for (let i = 0; i < palabraJuega.length; i++) {
		contexto.fillText('_', 10 + i * 30, 30);
	}

	// Recorrer cada letra de la palabra y dibujar solo las que están en el array de letras correctas
	if (!letrasCorrectas.includes(letra)) {
		for (let i = 0; i < palabraJuega.length; i++) {
			if (palabraJuega[i] === letra) {
				contexto.fillText(letra, 10 + i * 30, 30);
				letrasCorrectas.push(letra);
				if (letrasCorrectas.length === palabraJuega.length) {
					const ganaste = document.createElement('div');
					ganaste.classList.add('avisoGanaste');
					ganaste.innerHTML =
						'<span class="textoGrandeG">¡Ganaste!</span> <br> <span class="textoMediano">Felicitaciones, adivinaste la palabra.</span>';

					//Agrega botones a la const 'perdiste'
					ganaste.appendChild(botonReinicio);
					ganaste.appendChild(botonSalir);

					document.getElementById('menu').appendChild(ganaste);
					break;
				}
			}
		}
	} else {
		alert('La letra ' + letra + ' ya fue digitada');
	}
}
