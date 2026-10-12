
const vizeInput = document.getElementById("vize");
const finalInput = document.getElementById("final");
const hesaplaButonu = document.getElementById("hesaplaButonu");
const sonuc = document.getElementById("sonuc");

hesaplaButonu.addEventListener("click", function () {
    const vize = Number(vizeInput.value);
    const finalNotu = Number(finalInput.value);

    // Boş veya geçersiz notları kontrol et
    if (
        vizeInput.value.trim() === "" ||
        finalInput.value.trim() === "" ||
        !Number.isFinite(vize) ||
        !Number.isFinite(finalNotu) ||
        vize < 0 || vize > 100 ||
        finalNotu < 0 || finalNotu > 100
    ) {
        sonuc.textContent = "Lütfen 0 ile 100 arasında geçerli notlar girin.";
        sonuc.className = "basarisiz";
        return;
    }

    // Vize %40, final %60
    const ortalama = vize * 0.4 + finalNotu * 0.6;

    // Örnek geçme sınırı: 50
    if (ortalama >= 50) {
        sonuc.textContent =
            "Ortalaman: " + ortalama.toFixed(2) + " 🎉 Geçtin!";
        sonuc.className = "basarili";
    } else {
        sonuc.textContent =
            "Ortalaman: " + ortalama.toFixed(2) + " ❌ Kaldın!";
        sonuc.className = "basarisiz";
    }
});
