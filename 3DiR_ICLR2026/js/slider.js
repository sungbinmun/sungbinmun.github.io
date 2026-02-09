(() => {
  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    if (slides.length === 0) {
      return;
    }
    let index = 0;
    const setActive = (nextIndex) => {
      slides[index].classList.remove("is-active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("is-active");
    };
    const buttons = carousel.querySelectorAll(".carousel-arrow");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const dir = button.getAttribute("data-dir");
        setActive(dir === "next" ? index + 1 : index - 1);
      });
    });
  });
})();
