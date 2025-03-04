// Video Playing Effect
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");

  if (video) {
    video.addEventListener("play", () => {
      video.classList.add("playing");
    });

    video.addEventListener("pause", () => {
      video.classList.remove("playing");
    });
  }
});

// Search
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let found = false;

    cards.forEach((card) => {
      const cardTitle = card
        .querySelector(".card_title")
        .textContent.toLowerCase();
      const cardDate = card
        .querySelector(".card_second_title")
        .textContent.toLowerCase();
      const cardDescription = card
        .querySelector(".card_description")
        .textContent.toLowerCase();

      if (
        cardTitle.includes(searchText) ||
        cardDate.includes(searchText) ||
        cardDescription.includes(searchText)
      ) {
        card.style.display = "flex";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      cards.forEach((card) => (card.style.display = "none"));
    }
  });
});

// Nav Menu

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
