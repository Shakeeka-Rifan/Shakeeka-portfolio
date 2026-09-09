/* =========================================================
   SHAKEEKA PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================================================
   THEME TOGGLE
   ========================================================= */

(() => {

  const root = document.documentElement;

  const button =
    document.getElementById("themeToggle");


  if (!button) {
    return;
  }


  /*
   * Get saved theme
   */

  const savedTheme =
    localStorage.getItem("theme");


  /*
   * Apply saved theme
   */

  if (
    savedTheme === "dark" ||
    savedTheme === "light"
  ) {

    root.setAttribute(
      "data-theme",
      savedTheme
    );

  }


  /*
   * Update icon and accessibility label
   */

  const updateThemeButton = () => {

    const currentTheme =
      root.getAttribute("data-theme") ||
      "light";


    if (currentTheme === "dark") {

      button.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

      button.setAttribute(
        "aria-label",
        "Switch to light mode"
      );

      button.setAttribute(
        "title",
        "Switch to light mode"
      );

    } else {

      button.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

      button.setAttribute(
        "aria-label",
        "Switch to dark mode"
      );

      button.setAttribute(
        "title",
        "Switch to dark mode"
      );

    }

  };


  /*
   * Initial icon
   */

  updateThemeButton();


  /*
   * Toggle theme
   */

  button.addEventListener(
    "click",
    () => {

      const currentTheme =
        root.getAttribute("data-theme") ||
        "light";


      const nextTheme =
        currentTheme === "dark"
          ? "light"
          : "dark";


      root.setAttribute(
        "data-theme",
        nextTheme
      );


      localStorage.setItem(
        "theme",
        nextTheme
      );


      updateThemeButton();

    }
  );

})();



/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        /*
         * Ignore empty "#"
         */

        if (
          !targetId ||
          targetId === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        /*
         * If target does not exist,
         * allow normal browser behaviour.
         */

        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll(
    `
      .section-title,
      .section > .wrap > p,
      .quick-links,
      .t-card,
      .card,
      .p-card,
      .contact
    `
  );


/*
 * Check whether browser supports
 * IntersectionObserver.
 */

if (
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "on"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  /*
   * Observe every reveal element
   */

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "reveal"
      );

      observer.observe(
        element
      );

    }
  );


} else {

  /*
   * Fallback for older browsers
   */

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "on"
      );

    }
  );

}



/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      /*
       * Get fields
       */

      const name =
        contactForm
          .querySelector(
            '[name="name"]'
          )
          ?.value
          .trim();


      const email =
        contactForm
          .querySelector(
            '[name="email"]'
          )
          ?.value
          .trim();


      const message =
        contactForm
          .querySelector(
            '[name="message"]'
          )
          ?.value
          .trim();


      /*
       * Validate
       */

      if (
        !name ||
        !email ||
        !message
      ) {

        alert(
          "Please complete all fields before sending."
        );

        return;

      }


      /*
       * Basic email validation
       */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailPattern.test(email)
      ) {

        alert(
          "Please enter a valid email address."
        );

        return;

      }


      /*
       * Demo message
       *
       * The form is currently frontend-only.
       */

      alert(
        "Thank you for reaching out, " +
        name +
        "! Your message has been received."
      );


      /*
       * Clear form
       */

      contactForm.reset();

    }
  );

}



/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
