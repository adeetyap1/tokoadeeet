window.onload = function () {
  const nama = localStorage.getItem("nama_user");
  const greetEl = document.getElementById("greeting");
  if (nama && greetEl) {
    greetEl.textContent = `Halo, ${nama}!`;
  }

  setInterval(() => {
    const now = new Date();
    const waktu = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Makassar' });
    const el = document.getElementById("realtime-clock");
    if (el) el.textContent = `WITA | ${waktu}`;
  }, 1000);
};

function order(layanan, opsi, harga) {
  const nama = localStorage.getItem("nama_user") || "User";
  const pesan = `Halo, saya ${nama}. Saya ingin memesan layanan: ${layanan} (${opsi}) (Rp ${harga.toLocaleString("id-ID")}).`;
  const nomorWa = "6289523760788";
  const waUrl = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
  window.open(waUrl, "_blank");
}
