const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    // Get input values
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
    } else {
        alert("Message sent successfully!");
        form.reset(); // clear form
    }
});