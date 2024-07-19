function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}


function lighttodark(button) {
  if (button.innerText === "Light") {
      button.innerText = "Dark";
  } else {
      button.innerText = "Light";
  }
}
document.getElementById("l-d").addEventListener("click", function() {
  lighttodark(this);
});

document.getElementById("l-d-s").addEventListener("click", function() {
  lighttodark(this);
});

// Show more card

function showMoreProjects() {
    const hiddenCards = document.querySelectorAll('.hidden-card');

    // Select the show more/less button
    const showMoreButton = document.querySelector('.show-more-btn');
  
    // Check the current state and toggle visibility
    if (hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '') {
      // Show hidden cards
      hiddenCards.forEach(card => {
        card.style.display = 'block';
      });
      // Change button text to "Show Less"
      showMoreButton.textContent = 'Show Less';
    } else {
      // Hide the cards
      hiddenCards.forEach(card => {
        card.style.display = 'none';
      });
      // Change button text to "Show More"
      showMoreButton.textContent = 'Show More';
    }
  }
  
  

