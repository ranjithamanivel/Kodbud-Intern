const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const position = document.getElementById("position");
    const experience = document.getElementById("experience");
    const resume = document.getElementById("resume");
    const message = document.getElementById("message");

    const errors = document.querySelectorAll(".error");
    errors.forEach(e => e.textContent = "");

    if (name.value === "") {
        errors[0].textContent = "Name required";
        valid = false;
    }

    if (!email.value.includes("@")) {
        errors[1].textContent = "Invalid email";
        valid = false;
    }

    if (phone.value.length !== 10 || isNaN(phone.value)) {
        errors[2].textContent = "Invalid phone";
        valid = false;
    }

    if (dob.value === "") {
        errors[3].textContent = "Select DOB";
        valid = false;
    }

    if (gender.value === "") {
        errors[4].textContent = "Select gender";
        valid = false;
    }

    if (position.value === "") {
        errors[5].textContent = "Select position";
        valid = false;
    }

    if (experience.value === "") {
        errors[6].textContent = "Enter experience";
        valid = false;
    }

    if (resume.value === "") {
        errors[7].textContent = "Upload resume";
        valid = false;
    }

    if (message.value === "") {
        errors[8].textContent = "Enter message";
        valid = false;
    }

    if (valid) {
        alert("Application submitted successfully!");
        form.reset();
    }
});