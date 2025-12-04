document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    
    // Hamburger Menu Toggle
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Sub-dropdown toggle functionality
    const dropdownLinks = document.querySelectorAll('.dropdown > a, .sub-dropdown > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const parentLi = this.parentElement;

            // Check if it's a link to another page (and not a dropdown toggle)
            const isDropdownLink = this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-content');

            if (isDropdownLink) {
                // If it's a dropdown, toggle the visibility
                e.preventDefault(); // Prevent default only for dropdown toggles
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle('active');
            } else {
                // Allow link navigation for regular links
                window.location.href = this.href; // Redirect to the link
            }
        });
    });
});

// Video control buttons
document.getElementById('play-btn').addEventListener('click', function() {
    document.getElementById('product-video').play();
});

document.getElementById('pause-btn').addEventListener('click', function() {
    document.getElementById('product-video').pause();
});
