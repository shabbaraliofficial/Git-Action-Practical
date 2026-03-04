function showMessage() {
    alert("Hello Bhai! JavaScript is working 🚀");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    error.innerText = "Form submitted successfully!";
    error.style.color = "green";
    return false; 
}