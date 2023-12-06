document.addEventListener("DOMContentLoaded", function () {
	const ham = document.querySelector(".ham");
	const cross = document.querySelector(".cross");
	const menu = document.querySelector(".menu");
	const menuLinks = document.querySelectorAll(".menu-item-link");

	ham.addEventListener("click", function () {
		menu.style.left = "0";
		ham.style.display = "none";
		cross.style.display = "block";
	});

	cross.addEventListener("click", function () {
		menu.style.left = "-256px"; // Corrected to -256px as mentioned
		cross.style.display = "none";
		ham.style.display = "block";
	});

	// Close menu when clicking outside
	document.addEventListener("click", function (event) {
		if (
			menu.style.left === "0" &&
			!menu.contains(event.target) &&
			!ham.contains(event.target)
		) {
			menu.style.left = "-256px";
			cross.style.display = "none";
			ham.style.display = "block";
		}
	});

	// Close menu when a link is clicked
	menuLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			menu.style.left = "-256px";
			cross.style.display = "none";
			ham.style.display = "block";
		});
	});
});
