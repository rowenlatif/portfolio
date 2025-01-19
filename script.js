/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
PROJECTS.HTML
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
// // Select the projects container and individual project elements
// const slide = document.querySelector('.projects-container');
// let slides = Array.from(document.querySelectorAll('.project'));
// let slideIndex = 0; // Start with the first project
// let isMoving = false;

// // Function to accurately calculate slide width including margin
// function getSlideWidth() {
//     const slideStyle = getComputedStyle(slides[0]);
//     const slideWidth = slides[0].offsetWidth;
//     const marginRight = parseFloat(slideStyle.marginRight);
//     return slideWidth + marginRight;
// }

// // Function to update slide positions
// function updateSlides() {
//     const slideWidth = getSlideWidth();
//     const visibleSlides = 3; // Number of slides fully visible in the viewport
//     const offset = (window.innerWidth - slideWidth * visibleSlides) / 2; // Center the visible slides
//     slide.style.transform = `translateX(${offset - slideIndex * slideWidth}px)`;
// }

// // Function to move slides left or right
// function moveSlides(direction) {
//     if (isMoving) return;
//     isMoving = true;

//     // Adjust slide index based on direction
//     if (direction === 'right') {
//         if (slideIndex < slides.length - 3) { // Prevent going past the last slide
//             slideIndex++;
//         }
//     } else {
//         if (slideIndex > 0) { // Prevent going before the first slide
//             slideIndex--;
//         }
//     }

//     // Apply transition for smooth slide movement
//     slide.style.transition = 'transform 0.5s ease-in-out';
//     updateSlides();

//     // Re-enable moving after transition ends
//     setTimeout(() => isMoving = false, 500);
// }

// // Event listeners for carousel controls
// document.querySelector('.carousel-control.right').addEventListener('click', () => {
//     moveSlides('right');
// });

// document.querySelector('.carousel-control.left').addEventListener('click', () => {
//     moveSlides('left');
// });

// // Initial positioning of slides
// updateSlides();

// // Ensure slides are correctly positioned on window resize
// window.addEventListener('resize', updateSlides);


/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
CONTACT.HTML
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
document.getElementById('sendMessage').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('https://your-backend-api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
        alert('Message sent successfully!');
    } else {
        alert('Failed to send message. Please try again.');
    }
});




/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
VARIOUS PROJECTS
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideshow = document.querySelector('.slideshow');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
        showSlide(currentSlide);
    }

    function handleSlideClick(event) {
        const clickX = event.clientX; // X-coordinate of the click
        const slideshowRect = slideshow.getBoundingClientRect(); // Get slideshow bounds
        const slideWidth = slideshowRect.width; // Width of the slideshow container

        if (clickX < slideshowRect.left + slideWidth / 2) {
            // Left half clicked
            prevSlide();
        } else {
            // Right half clicked
            nextSlide();
        }
    }

    // Attach click event listener to the slideshow container
    slideshow.addEventListener('click', handleSlideClick);

    // Initialize the slideshow
    showSlide(currentSlide);
});
