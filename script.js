alert("The website is under development.");

function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

function lighttodark(button) {
	button.style.display = "none";
	document.querySelector(".switch").style.display = "block";

	setTimeout(function () {
		button.style.display = "block";
		document.querySelector(".switch").style.display = "none";

		if (button.innerText === "Light") {
			button.innerText = "Dark";
		} else {
			button.innerText = "Light";
		}
	}, 900);
}

document.getElementById("l-d").addEventListener("click", function () {
	lighttodark(this);

	setTimeout(function () {
		var themeSwitcher = document.getElementById("themeSwitcher");
		themeSwitcher.click();
	}, 200);
});

document.getElementById("l-d-s").addEventListener("click", function () {
	lighttodark(this);
	setTimeout(function () {
		var sthemeSwitcher = document.getElementById("sthemeSwitcher");
		sthemeSwitcher.click();
	}, 200);
});

// Show more card

function showMoreProjects() {
	const hiddenCards = document.querySelectorAll(".hidden-card");

	// Select the show more/less button
	const showMoreButton = document.querySelector(".show-more-btn");

	// Check the current state and toggle visibility
	if (
		hiddenCards[0].style.display === "none" ||
		hiddenCards[0].style.display === ""
	) {
		// Show hidden cards
		hiddenCards.forEach((card) => {
			card.style.display = "block";
		});
		// Change button text to "Show Less"
		showMoreButton.textContent = "Show Less";
	} else {
		// Hide the cards
		hiddenCards.forEach((card) => {
			card.style.display = "none";
		});
		// Change button text to "Show More"
		showMoreButton.textContent = "Show More";
	}
}

// animation for the card
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("cardshow");
		} else {
			entry.target.classList.remove("cardshow");
		}
	});
});

const hiddenElements=document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));
