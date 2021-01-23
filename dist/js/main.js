const toggleButton = document.querySelector('#toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggler = document.querySelector('#dark-mode-toggler');
const simonsTrashCard = document.querySelector('#simons-trash-card');
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
		navbarLinks.classList.toggle('active');
		toggleButton.classList.toggle('clicked'); //animates back the burger
	});
});

//toggle dark-mode
darkModeToggler.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('dark-mode-on');
});

function goToSimons() {
	window.location = '../dist/dedicated_pages/simons_trash.html';
}

function goToFall() {
	window.location = '../dist/dedicated_pages/fall_detection.html';
}
