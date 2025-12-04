// Wait for the document to be fully loaded before running any scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    // Check if both elements exist
    if (menuIcon && navbar) {
      
      // Add a click event listener to the menu icon
      menuIcon.addEventListener("click", () => {
        
        // Toggle the 'active' class on the navbar (to show/hide)
        navbar.classList.toggle("active");
        
        // Toggle the 'active' class on the menu icon itself (for "X" animation)
        menuIcon.classList.toggle("active");

        // Update the aria-expanded attribute for accessibility
        const isExpanded = menuIcon.getAttribute("aria-expanded") === "true";
        menuIcon.setAttribute("aria-expanded", !isExpanded);
      });
    }

    // --- Smooth Scroll for "Explore Products" Button ---
    const exploreBtn = document.getElementById("explore-btn");

    // Check if the button exists
    if (exploreBtn) {
      exploreBtn.addEventListener("click", function () {
        const productsSection = document.getElementById("products-services");
        if (productsSection) {
          productsSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    }

    // --- Smooth Scroll for other same-page anchor links (e.g., Services, Clients) ---
    document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // Check if we are on index.html
            const onIndexPage = window.location.pathname.endsWith('index.html') || 
                                window.location.pathname === '/' || 
                                window.location.pathname.endsWith('/index.html/'); // Check for common variations

            if (onIndexPage) {
                e.preventDefault(); // Prevent the default jump
                
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If not on index.html, the default link behavior will take over
            // and the browser will navigate to index.html and jump to the hash.
        });
    });

});