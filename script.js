import { addWords } from './js/addWord.js';
import { displayWords } from './js/readWord.js';

const btn = document.querySelector('[data-submit]');

//Arrow functions o funciones anónimas
btn.addEventListener('click', addWords);

displayWords();
