export function dibujarAhorcado(parte) {
	const canvas = document.getElementById('ahorcado');
	const orca = canvas.getContext('2d');

	orca.beginPath();

	switch (parte) {
		case 1:
			orca.fillRect(110, 200, 200, 10); //base piso
			break;
		case 2:
			orca.fillRect(120, 40, 5, 160); // base lateral
			break;
		case 3:
			orca.fillRect(120, 40, 88, 5); // base superior
			orca.fillRect(197, 40, 4, 15); // base superior
			orca.moveTo(199, 40); //base cuerda
			orca.lineTo(199, 62); //base cuerda
			break;
		case 4:
			orca.moveTo(199, 62); //Cabello
			orca.quadraticCurveTo(168, 85, 207, 64); //Cabello
			orca.arc(200, 78, 16, 0, 2 * Math.PI); // Cabeza
			break;
		case 5:
			orca.moveTo(196, 94); //Cuello
			orca.quadraticCurveTo(200, 115, 205, 94); //Cuello
			orca.moveTo(196, 98); //Hombro Derecho
			orca.quadraticCurveTo(185, 95, 175, 130); //Brazo Derecho
			orca.moveTo(175, 130); //parte baja Tronco
			orca.lineTo(220, 130); //parte baja Tronco
			orca.moveTo(190, 108); //parte linea brazo Derecho
			orca.lineTo(185, 130); //parte linea brazo Derecho
			orca.quadraticCurveTo(200, 95, 210, 99); //Brazo Izquierdo
			orca.lineTo(220, 130); //Brazo Izquierdo
			orca.moveTo(208, 108); //parte linea brazo Izquierdo
			orca.lineTo(213, 130); //parte linea Brazo Izquierdo
			break;
		case 6:
			orca.strokeRect(186, 130, 23, 25); //Entorno Piernas
			orca.moveTo(198, 130); //Linea piernas
			orca.lineTo(198, 155); //Linea piernas
			orca.moveTo(198, 155); //pie derecho
			orca.quadraticCurveTo(215, 165, 186, 165); //pie derecho
			orca.moveTo(186, 155); //Linea pie derecho
			orca.lineTo(186, 165); //Linea pie derecho
			orca.moveTo(210, 155); //pie Izquierdo
			orca.quadraticCurveTo(225, 165, 198, 165); //pie Izquierdo
			break;
	}
	orca.stroke();
}
