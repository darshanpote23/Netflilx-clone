let accordions = document.querySelectorAll(".FAQ__title");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Toggle icons
    let icon = this.querySelector("i");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.replace("fa-plus", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-plus");
    }

    // Toggle content
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.setAttribute("aria-expanded", "false");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.setAttribute("aria-expanded", "true");
    }
  });
});
