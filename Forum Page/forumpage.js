document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const dropdowns = document.querySelectorAll(".dropdowns, .dropdown");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");
  const topicForm = document.getElementById('topic-form');
  const topicList = document.getElementById('topic-list');

  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle("active");
  };

  dropdowns.forEach(dropdown => {
    dropdown.style.display = "none";
  });

  dropdownParents.forEach(parent => {
    const link = parent.querySelector("a");
    const dropdown = parent.querySelector(".dropdowns, .dropdown");

    parent.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    parent.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = dropdown.style.display === "flex";
      closeAllDropdowns();
      dropdown.style.display = isVisible ? "none" : "flex";
    });
  });

  function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
      dropdown.style.display = "none";
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-parent")) {
      closeAllDropdowns();
    }
  });

  topicForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('topic-title').value;
    const content = document.getElementById('topic-content').value;

    if (title && content) {
      const topicDiv = document.createElement('div');
      topicDiv.classList.add('topic');
      topicDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
      topicList.appendChild(topicDiv);

      topicForm.reset();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeAllDropdowns();
      navbarNav.classList.remove("active");
    }
  });
});