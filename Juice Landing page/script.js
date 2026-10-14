const flavorButtons = document.querySelectorAll('.juice-wrapper');
const juiceImages = document.querySelectorAll('.juice-wheel img');
const showcase = document.querySelector('.showcase');
const title = document.querySelector('#juice-title');
const description = document.querySelector('.juice-info');
const juiceWheel = document.querySelector('.juice-wheel');
const fruitsWheel = document.querySelector('.fruits-wheel');
const juiceText = document.querySelector('.juice-text');
const siteNavigation = document.querySelector('.site-nav');

const flavors = [
	{
		name: 'Orange Juice',
		description: 'Bright, naturally sweet orange juice with a refreshing citrus finish. A sunny favorite made for slow mornings and fresh starts.',
		background: 'linear-gradient(110deg, #8d88cd 0%, #686987 43%, #a6950d 100%)',
	},
	{
		name: 'Plum Juice',
		description: 'A deep, mellow plum flavor with a soft natural sweetness and a refreshing finish. Rich in color and full of character.',
		background: 'linear-gradient(110deg, #263557 0%, #786db5 48%, #a95068 100%)',
	},
	{
		name: 'Kiwi Juice',
		description: 'A bright, tangy kiwi blend with a lively balance of sweet and tart. Fresh, vibrant, and wonderfully refreshing.',
		background: 'linear-gradient(110deg, #17643d 0%, #27a879 50%, #2fb7b8 100%)',
	},
	{
		name: 'Strawberry Juice',
		description: 'A sweet, fragrant strawberry favorite with a little citrus brightness. Smooth, refreshing, and full of berry flavor.',
		background: 'linear-gradient(110deg, #6c202e 0%, #ba3e4f 52%, #eb8650 100%)',
	},
];

function selectFlavor(index) {
	const flavor = flavors[index];
	if (!flavor) return;
	const selectionChanged = flavorButtons[index].getAttribute('aria-pressed') !== 'true';

	showcase.style.background = flavor.background;
	const rotation = -45 - index * 90;
	juiceWheel.style.transform = `rotate(${rotation}deg) scale(var(--carousel-scale))`;
	fruitsWheel.style.transform = `rotate(${rotation}deg) scale(var(--fruit-scale))`;
	title.textContent = flavor.name;
	description.textContent = flavor.description;

	flavorButtons.forEach((button, buttonIndex) => {
		const isSelected = buttonIndex === index;
		button.classList.toggle('activePhoto', isSelected);
		button.setAttribute('aria-pressed', String(isSelected));
	});
	juiceImages.forEach((image, imageIndex) => {
		image.classList.toggle('active-juice', imageIndex === index);
	});

	if (selectionChanged) {
		juiceText.classList.remove('fade-in');
		void juiceText.offsetWidth;
		juiceText.classList.add('fade-in');
	}
}

flavorButtons.forEach((button, index) => {
	button.addEventListener('click', () => selectFlavor(index));
});

siteNavigation.addEventListener('click', (event) => {
	const link = event.target.closest('a[href^="#"]');
	if (!link) return;

	const target = document.querySelector(link.getAttribute('href'));
	if (!target) return;

	event.preventDefault();
	const focusTarget = target.matches('.photos')
		? target.querySelector('[aria-pressed="true"]') || target.querySelector('button')
		: target.matches('.juice-text')
			? title
			: target;

	focusTarget.focus({ preventScroll: true });
	target.scrollIntoView({
		behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
		block: link.hash === '#home' ? 'start' : 'nearest',
	});
});

document.querySelector('.photos').addEventListener('keydown', (event) => {
	if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
	event.preventDefault();
	const selectedIndex = [...flavorButtons].findIndex((button) => button.getAttribute('aria-pressed') === 'true');
	const direction = event.key === 'ArrowRight' ? 1 : -1;
	const nextIndex = (selectedIndex + direction + flavorButtons.length) % flavorButtons.length;
	flavorButtons[nextIndex].focus();
	selectFlavor(nextIndex);
});

selectFlavor(0);
