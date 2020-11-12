
const toggleButton = document.querySelector('#toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggler = document.querySelector('#dark-mode-toggler');
const creativeToggler = document.querySelector('#creative-toggler');
// toggler navbar
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
	toggleButton.classList.toggle('clicked');
});

// change active item on click: removes active class from items who have it and adds active class to the clicked item.
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((link) => {
			if (link.classList.contains('active')) {
				link.classList.remove('active');
			}
		});
		link.classList.add('active');
	});
});

//toggle dark-mode
darkModeToggler.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('dark-mode-on');
});

creativeToggler.addEventListener('click', () => {
	creativeCards = document.querySelectorAll('.creative');
	creativeCards.forEach((card) => {
		card.classList.toggle('filtered');
	});
});
