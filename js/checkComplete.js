const checkComplete = (id) => {
	const i = document.createElement('i');
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', (event) => completeTask(event, id));
	return i;
};

const completeTask = (event, id) => {
	const element = event.target;
	element.classList.toggle('fas');
	element.classList.toggle('completeIcon');
	element.classList.toggle('far');
	const words = JSON.parse(localStorage.getItem('words'));
	const index = words.findIndex((item) => item.id == id);
	words[index]['complete'] = !words[index]['complete'];
	localStorage.setItem('words', JSON.stringify(words));
};

export default checkComplete;
