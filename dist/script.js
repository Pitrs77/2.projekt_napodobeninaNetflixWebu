// Zobrazení/skrytí tlačítka při scrollování

const scrollToTopBtn = document.querySelector(".fa-regular.fa-circle-up.icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Návrat na začátek stránky (po kliknutí na tlačítko)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
