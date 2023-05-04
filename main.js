window.addEventListener("scroll", () => {
  document
    .querySelector("nav .nav-container")
    .classList.toggle("window-scroll", window.scrollY > 20);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon class
    const icon = faq.querySelector(".faq-icon i");

    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
