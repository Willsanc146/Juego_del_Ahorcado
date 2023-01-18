import { displayWords } from './readWord.js';

const deleteIcon = (id) => {
	const i = document.createElement('i');
	i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
	i.addEventListener('click', () => deleteWord(id));
	return i;
};

const deleteWord = (id) => {
	const li = document.querySelector('[data-list]');
	const words = JSON.parse(localStorage.getItem('words'));
	const index = words.findIndex((item) => item.id == id);
	words.splice(index, 1);
	li.innerHTML = '';
	localStorage.setItem('words', JSON.stringify(words));
	displayWords();
};

export default deleteIcon;
