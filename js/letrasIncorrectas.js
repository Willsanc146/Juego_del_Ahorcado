import { dibujarAhorcado } from '../js/dibujarAhorcado.js';
import { palabraJuega } from './juegoNuevo.js';
import { botonReinicio } from './botonesJuegoNuevo.js';
import { botonSalir } from './botonesJuegoNuevo.js';

let letrasIncorrectas = []; //Variable para almacenar las letras  incorrectas
//Función para dibujar las letras incorrectas

export function dibujarLetrasIncorrectas(letra) {
	// Obtener el canvas y el contexto del canvas
	const canvas = document.getElementById('letrasIncorrectas');
	const contexto = canvas.getContext('2d');

	// Establecer la fuente y el tamaño del texto
	contexto.font = '24px Arial';

	const palabraJuegaUnida = palabraJuega.join('');
	if (letra.length > 1) {
		alert('seleccionaste ' + letra + ' y es una tecla invalida.');
	} else if (
		!palabraJuega.includes(letra) &&
		!letrasIncorrectas.includes(letra)
	) {
		letrasIncorrectas.push(letra);
		contexto.fillText(letra, 10 + (letrasIncorrectas.length - 1) * 30, 30);

		for (let i = 1; i <= letrasIncorrectas.length; i++) {
			dibujarAhorcado(i);
			if (letrasIncorrectas.length > 6) {
				const perdiste = document.createElement('div');
				perdiste.classList.add('avisoPerdiste');
				perdiste.innerHTML =
					'<span class="textoGrande">Perdiste!</span> <br> <span class="textoMediano">La palabra correcta era ' +
					palabraJuegaUnida +
					'</span>';

				//Agrega botones a la const 'perdiste'
				perdiste.appendChild(botonReinicio);
				perdiste.appendChild(botonSalir);

				document.getElementById('menu').appendChild(perdiste);
				break;
			}
		}
	} else {
		alert('La letra ' + letra + ' ya fue digitada');
	}
	let intentosRestantes = 7 - letrasIncorrectas.length;
	document.getElementById('intentos').innerHTML =
		'Te quedan ' + intentosRestantes + ' intentos restantes';
}
