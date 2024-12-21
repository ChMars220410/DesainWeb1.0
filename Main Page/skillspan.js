// Menu SIDE BAR
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdowns, .dropdown");

  // Menyembunyikan semua dropdown saat halaman dimuat
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = "none";
  });

  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  dropdownParents.forEach((parent) => {
    const link = parent.querySelector("a");
    const dropdown = parent.querySelector(".dropdowns, .dropdown");

    // Hover event
    parent.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    parent.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });

    // Klik toggle dropdown
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = dropdown.style.display === "flex";
      closeAllDropdowns();
      dropdown.style.display = isVisible ? "none" : "flex";
    });
  });

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Menutup semua dropdown
   */
  /******  4b52ce4f-53fb-4031-b901-7f4e6d957143  *******/
  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  }

  // Klik di luar dropdown untuk menutup semua dropdown
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-parent")) {
      closeAllDropdowns();
    }
  });
});
