const toggleButton = document.querySelector('#toggle-button-container');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault;
	navbarLinks.classList.toggle('active');
});
