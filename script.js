const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
	const box = document.createElement('div');
	box.classList.add('box');
	container.append(box);
});
