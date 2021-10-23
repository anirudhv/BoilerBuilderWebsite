let active = false;

const hamburgerClick = () => {
	active = !active;
	const navbar = document.getElementsByClassName('navbar')[0];
	if(active) {
		navbar.setAttribute('display', 'inline-block');
	}
	else {
		navbar.setAttribute('display', 'none');
	}
}