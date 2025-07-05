function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Nama tidak boleh kosong!");
    return;
  }
  localStorage.setItem("nama_user", name);
  window.location.href = "pages/home.html";
}
setInterval(() => {
  const now = new Date();
  const waktu = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Makassar' });
  document.getElementById("realtime-clock").textContent = `WITA | ${waktu}`;
}, 1000);
