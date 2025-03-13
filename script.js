document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".pimg1, .pimg2, .pimg3");
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Keskikohta
  
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        
    });
// Get modal, buttons, and images
const modal = document.getElementById("imageModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const imageSlider = document.getElementById("imageSlider");
const images = document.querySelectorAll(".image-item");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

let currentIndex = 0;

// Function to update the displayed image
function updateSliderPosition() {
    // Hide all images
    images.forEach(image => image.classList.remove("active"));

    // Show the image at the current index
    images[currentIndex].classList.add("active");
}

// Modal open/close
openModalBtn.onclick = function() {
    modal.style.display = "block";
    updateSliderPosition(); // Show the first image initially
};

closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

// Image Slider Logic
prevButton.onclick = function() {
    // Move to the previous image, or loop back to the last one
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSliderPosition();
};

nextButton.onclick = function() {
    // Move to the next image, or loop back to the first one
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
};

// Close modal when clicking anywhere outside the modal content (background)
modal.addEventListener('click', function(event) {
    // Check if the click target is the modal (background) and not inside the modal content
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Prevent closing the modal if you click inside the modal content (image slider or buttons)
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from propagating to the modal background
});
    
});