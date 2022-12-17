const iconBurger = document.querySelector(".header-menu__icon");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");

iconBurger.addEventListener("click", onOpenMenu);

function onOpenMenu() {
	if (iconBurger) {
		document.body.classList.toggle("_lock");
		iconBurger.classList.toggle("_open");

		header.classList.toggle("_active");
		if (header.classList.contains("_active")) {
			document.body.style.paddingTop = header.offsetHeight + "px";
		} else {
			document.body.style.paddingTop = "unset";
		}

		headerMenu.classList.toggle("_active");

		if (iconBurger.classList.contains("_open")) {
			const menuLinks = document.querySelectorAll(".menu__link");
			if (menuLinks.length > 0) {
				menuLinks.forEach((menuLink) => {
					menuLink.addEventListener("click", onCloseMenu);
				});
			}
		}
	}
}

function onCloseMenu() {
	document.body.classList.remove("_lock");
	iconBurger.classList.remove("_open");
	header.classList.remove("_active");
	document.body.style.paddingTop = "unset";
	headerMenu.classList.remove("_active");
}
