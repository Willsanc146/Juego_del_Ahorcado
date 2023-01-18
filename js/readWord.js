import { createWords } from './addWord.js';

export const displayWords = () => {
	const list = document.querySelector('[data-list]');

	const wordList = JSON.parse(localStorage.getItem('words')) || [];
	const uniqueArr = [];
	wordList.forEach((word) => {
		list.appendChild(createWords(word));
		if (!uniqueArr.includes(word)) {
			uniqueArr.push(word);
		}
	});
};
