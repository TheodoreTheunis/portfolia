
/* =========================================
   PORTFOLIA JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const currentYear = document.getElementById("current-year");

  // Update the copyright year automatically.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    };

    const openMenu = () => {
      navLinks.classList.add("active");
      menuToggle.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Close navigation menu");
    };

    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu after a navigation link is selected.
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu when Escape is pressed.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Restore the normal navigation state on wider screens.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  // Report a missing screenshot clearly in the browser console.
  const monevoScreenshot = document.querySelector(".monevo-screenshot");

  if (monevoScreenshot) {
    monevoScreenshot.addEventListener("error", () => {
      console.error(
        "Monevo screenshot not found. Ensure monevo-dashboard.png " +
        "is in the same folder as index.html and the filename matches."
      );
    });
  }
});
