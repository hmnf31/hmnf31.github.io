document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengupdate waktu setiap detik
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        document.getElementById('time').textContent = timeString;
    }

    // Panggil updateClock setiap detik
    setInterval(updateClock, 1000);

    // Panggil sekali untuk menampilkan waktu saat halaman pertama kali dimuat
    updateClock();
});
