const siswa = {
    nama: "Ahmad",
    kelas: "11A",
    nilai: [75, 80, 65, 90, 70]
};

function prosesNilai(siswa) {

    // 1. Tampilkan identitas
    console.log("===== HASIL PENILAIAN =====");
    console.log("Nama       :", siswa.nama);
    console.log("Kelas      :", siswa.kelas);
    console.log("");

    // 2. Update nilai berdasarkan index
    siswa.nilai[2] = 70; // UTS
    siswa.nilai[4] = 85; // Project

    // 3. Hitung total tanpa looping
    const total = siswa.nilai[0] +
                  siswa.nilai[1] +
                  siswa.nilai[2] +
                  siswa.nilai[3] +
                  siswa.nilai[4];

    // 4. Hitung rata-rata
    const rataRata = total / siswa.nilai.length;

    // 5. Tentukan predikat
    let predikat;

    if (rataRata >= 90) {
        predikat = "A";
    } else if (rataRata >= 80) {
        predikat = "B";
    } else if (rataRata >= 70) {
        predikat = "C";
    } else if (rataRata >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    // 6. Tentukan status menggunakan ternary
    const status = rataRata >= 75 &&
                   siswa.nilai[2] >= 60 &&
                   siswa.nilai[3] >= 60
                   ? "LULUS"
                   : "TIDAK LULUS";

    // 7. Tentukan keterangan menggunakan ternary
    const keterangan =
        predikat === "A" ? "Sangat Baik" :
        predikat === "B" ? "Baik" :
        predikat === "C" ? "Cukup" :
        "Perlu Perbaikan";

    // 8. Tampilkan hasil akhir
    console.log("Tugas      :", siswa.nilai[0]);
    console.log("Quiz       :", siswa.nilai[1]);
    console.log("UTS        :", siswa.nilai[2]);
    console.log("UAS        :", siswa.nilai[3]);
    console.log("Project    :", siswa.nilai[4]);
    console.log("");
    console.log("Total      :", total);
    console.log("Rata-rata  :", rataRata);
    console.log("Predikat   :", predikat);    
    console.log("Status     :", status);
    console.log("Keterangan :", keterangan);
}

prosesNilai(siswa);