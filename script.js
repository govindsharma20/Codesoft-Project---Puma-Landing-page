function buyNow() {
    alert("Thank you for your purchase!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});