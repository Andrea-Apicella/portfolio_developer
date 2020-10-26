const toggleButton = document.querySelector('#toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.nav-link');
toggleButton.addEventListener('click', (e) => {
	e.preventDefault;
	navbarLinks.classList.toggle('active');
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
