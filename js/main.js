// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  const lab4Tabs = document.querySelectorAll(".lab4__tab");
  const lab4Contents = document.querySelectorAll(".lab4__content");

  lab4Tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide all Lab4 contents
      lab4Contents.forEach((content) => {
        content.classList.add("hidden");
      });

      // Display the corresponding Lab4 content
      const tabId = this.getAttribute("data-tab");
      const tabContent = document.querySelector(`#${tabId}`);
      tabContent.classList.remove("hidden");
    });
  });
});

