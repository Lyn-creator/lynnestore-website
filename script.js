// Loading animation saat halaman dimuat
window.onload = function () {
    document.getElementById("loading").style.display = "none";
};

// Fungsi mengirim pesan ke WhatsApp
function sendWhatsAppMessage(event) {
    event.preventDefault(); // Mencegah submit form biasa

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Semua kolom harus diisi!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return;
    }

    const phoneNumber = '628979928353';
    const text = `Halo, saya ${name}.%0AEmail: ${email}%0APesan:%0A${message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(whatsappURL, '_blank');

    const button = document.querySelector("button");
    button.innerText = "Menghubungkan...";
    button.disabled = true;

    setTimeout(() => {
        button.innerText = "Order Now!";
        button.disabled = false;
    }, 3000);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}