export const botonReinicio = document.createElement('button');
botonReinicio.classList.add('botonReinicio');
botonReinicio.innerHTML = 'Juego Nuevo';
botonReinicio.addEventListener('click', function () {
	location.reload();
});

export const botonSalir = document.createElement('button');
botonSalir.classList.add('botonSalir');
botonSalir.innerHTML = 'Salir';
botonSalir.addEventListener('click', function () {
	location.href = '/index.html';
});
