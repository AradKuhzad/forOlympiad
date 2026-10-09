function register() {
    const username = document.getElementById("usernameinput").value;
    const password = document.getElementById("passwordinput").value;
    
        if (username === "" || password === "") {
            window.alert("Please fill in both fields");
            return false;
        }

    console.log(username);
    console.log(password);
    return true
}

  const form = document.getElementById("registerform");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const isValid = register();
        if (isValid) {
            form.reset();
        }
    });