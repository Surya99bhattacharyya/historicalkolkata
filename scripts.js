
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Reset to first slide
    slides[slideIndex - 1].classList.add("show"); // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n; // Change slide index
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {slideIndex = 1} // Reset to first slide
    if (slideIndex < 1) {slideIndex = slides.length} // Reset to last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); // Hide all slides
    }
    slides[slideIndex - 1].classList.add("show"); // Show the current slide
}



