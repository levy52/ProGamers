document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavLink = document.querySelectorAll('.nav-link')
	const navbarCollapse = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavLink.forEach(link => link.addEventListener('click', () => navbarCollapse.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
