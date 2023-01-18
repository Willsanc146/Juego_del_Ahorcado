import { displayWords } from './readWord.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

let wordList = [];

export const addWords = (event) => {
	event.preventDefault();

	const list = document.querySelector('[data-list]');
	const input = document.querySelector('[data-input]');

	const value = input.value.toUpperCase();

	if (value == '') {
		return;
	}

	if (value.length > 10 || value.length <= 3) {
		alert('La palabra debe contener mas de 3 letras y menos de 10 letras');
		return;
	}

	input.value = '';

	const complete = false;

	const wordObj = {
		value,
		complete,
		id: uuid.v4(),
	};

	list.innerHTML = '';
	wordList = JSON.parse(localStorage.getItem('words')) || [];
	wordList.push(wordObj);
	localStorage.setItem('words', JSON.stringify(wordList));
	displayWords();
};

export const createWords = ({ value, complete, id }) => {
	const word = document.createElement('li');
	word.classList.add('card');

	const taskContent = document.createElement('div');

	const check = checkComplete(id);

	if (complete) {
		check.classList.toggle('fas');
		check.classList.toggle('completeIcon');
		check.classList.toggle('far');
	}

	const titleWord = document.createElement('span');
	titleWord.classList.add('word');
	titleWord.innerText = value;
	taskContent.appendChild(check);
	taskContent.appendChild(titleWord);
	word.appendChild(taskContent);
	word.appendChild(deleteIcon(id));

	return word;
};

function checkIfWordExists(word) {
	const currentWords = JSON.parse(localStorage.getItem('words')) || [];
	for (let i = 0; i < currentWords.length; i++) {
		if (currentWords[i].value === word) {
			return true;
		}
	}
	return false;
}
