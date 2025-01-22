/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
CONTACT.HTML
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
// document.getElementById('sendMessage').addEventListener('click', async () => {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const response = await fetch('https://your-backend-api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, message })
//     });

//     if (response.ok) {
//         alert('Message sent successfully!');
//     } else {
//         alert('Failed to send message. Please try again.');
//     }
// });




/* 
--------------------------------------------------------------------------------------------------------------------------------------------- 
VARIOUS PROJECTS
--------------------------------------------------------------------------------------------------------------------------------------------- 
*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
