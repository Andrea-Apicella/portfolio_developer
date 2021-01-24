const toggleButton = document.querySelector('#toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggler = document.querySelector('#dark-mode-toggler');
const simonsTrashCard = document.querySelector('#simons-trash-card');
const goUpIcon = document.querySelector('.go-up-icon');

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

function goToSimons() {
	window.location = 'dedicated_pages/simons_trash.html';
}

function goToFall() {
	window.location = 'dedicated_pages/fall_detection.html';
}

function goToCreative() {
	window.location = 'dedicated_pages/creative_computing.html';
}

document.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		goUpIcon.style.visibility = 'visible';
		goUpIcon.style.opacity = '100';
	} else {
		goUpIcon.style.visibility = 'inital';
		goUpIcon.style.opacity = '0';
	}
});

function goUp() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
}
