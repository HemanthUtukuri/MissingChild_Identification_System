alert("welcome to Missing Child Report Portal press OK to continue");
let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Show the next slide
    currentSlide++;
    if (currentSlide > slides.length) {
        currentSlide = 1; // Restart from the first slide
    }
    slides[currentSlide - 1].style.display = "block";

    // Automatically switch every 3 seconds
    setTimeout(showSlides, 3000);
}

// Initialize Slideshow
showSlides();

function cap() {
    var alpha = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var a = alpha[Math.floor(Math.random() * 62)];
    var b = alpha[Math.floor(Math.random() * 62)];
    var c = alpha[Math.floor(Math.random() * 62)];
    var d = alpha[Math.floor(Math.random() * 62)];
    var e = alpha[Math.floor(Math.random() * 62)];
    var f = alpha[Math.floor(Math.random() * 62)];

    var sum = a + b + c + d + e + f;

    document.getElementById("capt").value = sum;
}

function validcap() {
    var string1 = document.getElementById('capt').value;
    var string2 = document.getElementById('textinput').value;
    if (string1 === string2) {
        alert("Form is validated successfully!");

        return true;
    } else {
        alert("Please enter a valid CAPTCHA.");
        return false;
    }
}


