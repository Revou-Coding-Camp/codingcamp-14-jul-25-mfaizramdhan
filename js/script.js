document.addEventListener("DOMContentLoaded", function() {
    const userName = prompt("Please enter your name:", "Guest");
    if (userName) {
        document.getElementById("welcome-name").textContent = userName;
    }
});

function validateForm() {
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    const pesan = document.getElementById("pesan").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (nama === "" || tanggalLahir === "" || jenisKelamin == null || pesan === "") {
        errorMessage.textContent = "⚠️ Semua field wajib diisi!";
        return false;
    }
    
    errorMessage.textContent = "";

    document.getElementById("current-time").textContent = new Date().toLocaleString("id-ID");
    document.getElementById("output-nama").textContent = nama;
    document.getElementById("output-tanggal-lahir").textContent = tanggalLahir;
    document.getElementById("output-jenis-kelamin").textContent = jenisKelamin.value;
    document.getElementById("output-pesan").textContent = pesan;
    
    document.getElementById("message-form").reset();

    return false;
}