/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
PROJECTS.HTML
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
// Select the projects container and individual project elements
const slide = document.querySelector('.projects-container');
let slides = Array.from(document.querySelectorAll('.project'));
let slideIndex = 0; // Start with the first project
let isMoving = false;

// Function to accurately calculate slide width including margin
function getSlideWidth() {
    const slideStyle = getComputedStyle(slides[0]);
    const slideWidth = slides[0].offsetWidth;
    const marginRight = parseFloat(slideStyle.marginRight);
    return slideWidth + marginRight;
}

// Function to update slide positions
function updateSlides() {
    const slideWidth = getSlideWidth();
    const visibleSlides = 3; // Number of slides fully visible in the viewport
    const offset = (window.innerWidth - slideWidth * visibleSlides) / 2; // Center the visible slides
    slide.style.transform = `translateX(${offset - slideIndex * slideWidth}px)`;
}

// Function to move slides left or right
function moveSlides(direction) {
    if (isMoving) return;
    isMoving = true;

    // Adjust slide index based on direction
    if (direction === 'right') {
        if (slideIndex < slides.length - 3) { // Prevent going past the last slide
            slideIndex++;
        }
    } else {
        if (slideIndex > 0) { // Prevent going before the first slide
            slideIndex--;
        }
    }

    // Apply transition for smooth slide movement
    slide.style.transition = 'transform 0.5s ease-in-out';
    updateSlides();

    // Re-enable moving after transition ends
    setTimeout(() => isMoving = false, 500);
}

// Event listeners for carousel controls
document.querySelector('.carousel-control.right').addEventListener('click', () => {
    moveSlides('right');
});

document.querySelector('.carousel-control.left').addEventListener('click', () => {
    moveSlides('left');
});

// Initial positioning of slides
updateSlides();

// Ensure slides are correctly positioned on window resize
window.addEventListener('resize', updateSlides);


/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
GALLERY.HTML
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
