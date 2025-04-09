document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        let total = 0;
        document.querySelectorAll("input[type='checkbox']:checked").forEach(item => {
            total += parseInt(item.value);
        });
        document.getElementById("totalPrice").textContent = total;
    });
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
    window.open("https://wa.me/0630016857", "_blank");
});

// Update total price when checkboxes are selected
document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        let total = 0;
        document.querySelectorAll("input[type='checkbox']:checked").forEach(item => {
            total += parseInt(item.value);
        });
        document.getElementById("totalPrice").textContent = total;
    });
});

// Send total price to WhatsApp
function sendToWhatsApp() {
    let total = document.getElementById("totalPrice").textContent;
    let message = encodeURIComponent(`Hello, I want to place an order. My total is R${total}.`);
    window.open(`https://wa.me/+27630016857?text=${message}`, "_blank");
}

// Button Click Events
document.getElementById("whatsappBtn").addEventListener("click", sendToWhatsApp);
document.getElementById("whatsappFloat").addEventListener("click", sendToWhatsApp);
