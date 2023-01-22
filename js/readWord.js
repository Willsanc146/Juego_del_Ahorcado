import { createWords } from './addWord.js';

export const displayWords = () => {
	const list = document.querySelector('[data-list]');

	const wordList = JSON.parse(localStorage.getItem('words')) || [];
	if (wordList.length === 0) {
		alert(
			'No hay palabras guardadas. Por favor agregue alguna en la página de agregar palabra.'
		);
	}
	const uniqueArr = [];
	wordList.forEach((word) => {
		list.appendChild(createWords(word));
		if (!uniqueArr.includes(word)) {
			uniqueArr.push(word);
		}
	});
};
