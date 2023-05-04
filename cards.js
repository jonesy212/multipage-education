window.addEventListener("scroll", () => {
  document
    .querySelector("nav .nav-container")
    .classList.toggle("window-scroll", window.scrollY > 20);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});
