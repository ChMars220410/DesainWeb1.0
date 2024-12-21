function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok.");
        return false;
    }

    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordCriteria.test(password)) {
        alert("Password harus minimal 6 karakter, dengan 1 huruf besar, 1 huruf kecil, dan 1 angka.");
        return false;
    }

    window.location.href = '../Main Page/skillspan.html';
    return true;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    const passwordToggle = document.querySelectorAll('.eye-icon img');

    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = confirmPasswordInput.type === 'password' ? 'text' : 'password';

    passwordToggle.forEach(icon => {
        icon.src = passwordInput.type === 'password' ? '../Login Page/img login page/show.png' : '../Login Page/img login page/hide.png';
    });
}

function enableSubmitButton() {
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const submitButton = document.getElementById('submit-button');

    submitButton.disabled = !termsCheckbox.checked;
}

document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
document.querySelector('input[name="terms"]').addEventListener('change', enableSubmitButton);
enableSubmitButton();

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '../Login Page/loginpage.html';
});

// Menambahkan event listener untuk tombol submit
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    if (validateForm()) {
        // Jika validasi berhasil, lakukan pengiriman form atau aksi lain
        // Misalnya, Anda bisa menggunakan AJAX untuk mengirim data ke server
    }
});