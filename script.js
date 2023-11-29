let total = ""
let currentTotal = document.getElementById("header").textContent

function num1el(clickedValue) {
    if(clickedValue === "=") {
        total = eval(total)
        document.getElementById("header2").textContent = total
        document.getElementById("header").textContent = "CALCULATOR"
        total = ""
    }
    else {
        total+=clickedValue;
        document.getElementById("header").textContent = total
    }
}
    

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const buttonElement = document.getElementById(`button${key}`);

    if (key.match(/[0-9\.+\-*/]/) || buttonElement) {
        // Allow only valid keys (0-9, ., +, -, *, /) or button elements
        num1el(key);
        if (buttonElement) {
            // Add a class to visually indicate the pressed button
            buttonElement.classList.add("pressed");
            setTimeout(() => {
                buttonElement.classList.remove("pressed");
            }, 100);
        }
    } else if (key === "Enter" || key === "=") {
        // Treat Enter key or "=" key as equals sign
        num1el("=");
    }
});
