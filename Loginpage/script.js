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
         // TAMPILKAN SWEETALERT DI SINI
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil!',
            text: 'Selamat datang, ' + usernameValue,
            timer: 5000, // Notifikasi hilang setelah 2 detik
            showConfirmButton: true,
            background: '#000',
            color: '#fff'
        }).then(() => {
            // PINDAHKAN KODE PINDAH HALAMAN KE DALAM .then()
            window.location.href = '../Landingpage/index.html';
        });
    });
});

// Export function di tingkat atas
export function getUser() {
    return localStorage.getItem('user'); // Ambil dari localStorage
}