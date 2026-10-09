async function register() {
    const username = document.getElementById("usernameinput").value;
    const password = document.getElementById("passwordinput").value;
    
        if (username === "" || password === "") {
            window.alert("Please fill in both fields");
            return false;
        }

        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
          if (response.ok === false) {
                window.alert("error")
                return false
         } 
    
    return true
}

  const form = document.getElementById("registerform");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const isValid = await register();
        if (isValid) {
            form.reset();
        }
    });