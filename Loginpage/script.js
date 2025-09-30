// Tunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    let currentUser = null;

    // Cek apakah elemen ada
    if (!loginForm || !usernameInput) {
        console.error('Element form atau input tidak ditemukan!');
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameValue = usernameInput.value;
        console.log('Username dari user:', usernameValue);
        
        currentUser = usernameValue;
        localStorage.setItem('user', usernameValue);
        window.location.href = '../Landingpage/index.html';
    });
});

// Export function
export function getUser() {
    return localStorage.getItem('user'); // Ambil dari localStorage
}