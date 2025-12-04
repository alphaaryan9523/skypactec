document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const videoModal = document.getElementById("videoModal");
    const productVideo = document.getElementById("productVideo");

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

    // Video control functions
    function playVideo() {
        videoModal.style.display = "flex"; // Show the modal
        productVideo.play(); // Start playing the video
    }

    function closeVideo() {
        videoModal.style.display = "none"; // Hide the modal
        productVideo.pause(); // Pause the video
        productVideo.currentTime = 0; // Reset video to start
    }

    // Optional: Close the video modal when clicking outside the video
    window.onclick = function (event) {
        if (event.target === videoModal) {
            closeVideo();
        }
    };

    // Attach play button click event
    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', playVideo);

    // Attach close button event
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeVideo);
});
