// Simple interactivity for project details
function showDetails(message) {
  alert(message);
}

// Contact form submission (basic demo)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
  this.reset();
});
