const likes = document.querySelectorAll('.like')
likes.forEach(like => {
	const plus = like.querySelector('.plus')
	const minus = like.querySelector('.minus')
	const counter_element = like.querySelector('.counter')
	let counter = 0;
	plus.addEventListener('click', () => {
		render(++counter, counter_element)
	});
	minus.addEventListener('click', () => {
		render(--counter, counter_element)
	});
});

const render = (counter, counter_element) => counter_element.innerText = counter;