// alert("The website is under development.");

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

// footer one 
document.getElementById("l-d-f").addEventListener("click", function () {
	lighttodark(this);

	setTimeout(function () {
		var themeSwitcher = document.getElementById("fthemeSwitcher");
		themeSwitcher.click();
	}, 200);
});

// Show more card

function showMoreProjects() {
	const hiddenCards = document.querySelectorAll(".hidden-card");
	const showMoreButton = document.querySelector(".show-more-btn");

	if (hiddenCards[0].classList.contains("show-card")) {
		// Hide the cards with smooth transition
		hiddenCards.forEach((card) => {
			card.classList.remove("show-card");
			setTimeout(() => {
				card.style.display = "none"; // Set display: none after transition
			}, 400); // Wait for the transition duration (0.4s)
		});
		showMoreButton.textContent = "Show More";
	} else {
		// Show the cards with smooth transition
		hiddenCards.forEach((card) => {
			card.style.display = "block"; // Make the card visible
			setTimeout(() => {
				card.classList.add("show-card"); // Trigger transition
			}, 10); // Small delay to trigger transition smoothly
		});
		showMoreButton.textContent = "Show Less";
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
