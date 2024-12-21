// Fungsi untuk toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the eye icon
    eyeIcon.src = type === 'password' ? '../Login Page/img login page/show.png' : '../Login Page/img login page/hide.png';
});

// Fungsi untuk mengaktifkan tombol "Masuk" jika email dan password diisi
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.btn-submit');

// Fungsi untuk memeriksa apakah form valid
function checkFormValidity() {
    if (emailInput.value && passwordInput.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Event listeners untuk memeriksa input
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);

// Optional: Mencegah form dari pengiriman default
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Di sini Anda bisa menambahkan logika untuk memeriksa kredensial
    // Misalnya, jika email dan password valid, arahkan ke skillspan.html
    if (emailInput.value && passwordInput.value) {
        // Ganti dengan logika autentikasi yang sesuai
        // Jika autentikasi berhasil:
        window.location.href = '../Main Page/skillspan.html'; // Mengarahkan ke halaman skillspan.html
    } else {
        alert('Email atau password tidak valid!'); // Pesan kesalahan jika kredensial tidak valid
    }
});

// Mengarahkan ke halaman register saat tautan diklik
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default tautan
    window.location.href = '../Registration Page/registrationpage.html'; // Mengarahkan ke halaman registrasi
});