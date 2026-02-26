// Scroll to about section when "Learn More" clicked
document.getElementById("learnMore").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});