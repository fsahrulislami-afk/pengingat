document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplikasi Siap!");

    const btnTambah = document.getElementById('btn-tambah');
    
    // CEK APAKAH TOMBOLNYA KETEMU
    if(btnTambah) {
        btnTambah.onclick = function() {
            const nama = document.getElementById('kegiatan-input').value;
            const waktu = document.getElementById('waktu-input').value;

            if (!nama || !waktu) {
                alert("Waduh, isi dulu dong nama & jamnya! ✨");
                return;
            }

            alert("GAS! Pengingat untuk " + nama + " berhasil dipasang! 🔥");
            
            document.getElementById('status-box').classList.remove('hidden');
            document.getElementById('status-text').innerText = `Memantau: ${nama} @ ${waktu}`;
            
            // Mulai hitung mundur
            mulaiCek(nama, waktu);
        };
    } else {
        console.error("Tombol tidak ditemukan! Periksa ID di HTML.");
    }
});

function mulaiCek(nama, target) {
    setInterval(() => {
        const sekarang = new Date();
        const jamSekarang = String(sekarang.getHours()).padStart(2, '0') + ":" + 
                            String(sekarang.getMinutes()).padStart(2, '0');
        
        if (jamSekarang === target) {
            document.getElementById('modal-title').innerText = "WAKTUNYA!";
            document.getElementById('modal-desc').innerText = "Ayo " + nama + " sekarang!";
            document.getElementById('notif-modal').classList.remove('hidden');
        }
    }, 1000);
}

// Tombol Modal
document.getElementById('btn-iya').onclick = () => location.reload();
document.getElementById('btn-tunda').onclick = () => {
    document.getElementById('notif-modal').classList.add('hidden');
    alert("Oke, diingatkan lagi nanti ya!");
};