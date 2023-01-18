function checkLocalStorage() {
	if (!localStorage.getItem('words')) {
		const alert = document.createElement('div');
		alert.classList.add('alert');
		alert.innerHTML = 'No hay palabras en la lista';
		document.querySelector('[data-list]').appendChild(alert);
	}
}
