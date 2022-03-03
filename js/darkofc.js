const themeToggleofc = document.querySelector("#theme-toggle-ofc");

themeToggleofc.addEventListener("click", () => {
	document.body.classList.contains("light-theme") ? enableDarkMode() : enableLightMode();
});

function enableDarkMode() {
	document.body.classList.remove("light-theme");
	document.body.classList.add("dark-theme");
	themeToggleofc.setAttribute("aria-label", "Switch to light theme");
}

function enableLightMode() {
	document.body.classList.remove("dark-theme");
	document.body.classList.add("light-theme");
	themeToggleofc.setAttribute("aria-label", "Switch to dark theme");
}

function setThemePreference() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		enableDarkMode();
		return;
	}
	enableLightMode();
}

document.onload = setThemePreference();