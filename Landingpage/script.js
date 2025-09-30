
// Jalankan kode ini setelah semua elemen halaman selesai dimuat
    document.addEventListener('DOMContentLoaded', function() {
        // 1. Ambil username yang sudah tersimpan dari localStorage
        const savedUsername = localStorage.getItem('user');

        // 2. Targetkan elemen h1 berdasarkan ID-nya
        const welcomeHeading = document.getElementById('welcome-heading');

        // 3. Cek apakah username-nya ada (tidak null)
        if (savedUsername) {
            // Jika ada, tambahkan nama ke dalam teks h1
            // textContent lebih aman untuk hanya menampilkan teks
            welcomeHeading.textContent += '' + savedUsername;
        } else {
            // Opsional: Jika user langsung ke halaman ini tanpa login
            welcomeHeading.textContent += 'Saudara';
        }
    });