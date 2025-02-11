document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("registrationForm").reset();
    }, 3000);
});