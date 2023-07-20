function hitungBMI(){
    // mengambil nilai tb dan bb dari user
    let tinggiBadan = document.getElementById('tinggiBadan').value/100;
    let beratBadan = document.getElementById('beratBadan').value;
    let usia = document.getElementById('usia').value;
    let gender = document.querySelectorAll('input[name="gender"]:checked'); //item radio gender

    // rumus hitung BMI
    let hasilBMI = (beratBadan / (tinggiBadan**2)).toFixed(2); //membulatkan dua angka dibelakang koma

    // mengambil document html
    let result = document.getElementById('hasilBMI');
    let hasilKualitas = document.getElementById('kualitasHasil');
    let keteranganHasil = document.getElementById('ketHasil');
    let ketHasilBMI = document.getElementById('ketHasilBMI');
    
    // Mengambil keterangan underWeight dari Html
    let ketUnderWeight = document.getElementById('underWeight');
    let ketUnder = document.getElementById('ketUnder');

    // Mengambil keterangan overWeight dari html
    let ketOverWeight = document.getElementById('overWeight');
    let ketOver = document.getElementById('ketOver');

    // Mengambil keterangan obesitas dari html
    let ketObesitas = document.getElementById('ketObesitas')

    // Mengambil keterangan normalWeight dari html
    let normalWeight = document.getElementById('ketNormal');

    // menampilkan halaman hasil BMI
    let tampilHalaman = document.getElementById('hasilTest');
    
    // menampilkan hasil BMI
    result.innerHTML = hasilBMI;
    
    // Membuat validasi dengan hasil BMI
    if(tinggiBadan != "" && beratBadan != "" && usia != "" && gender.length != 0){
        tampilHalaman.style.display = 'block';
        if(hasilBMI < 18.5){
            hasilKualitas.textContent += 'Berat Badan Kurang';
            keteranganHasil.textContent += "Anda kekurangan berat badan";
            ketUnderWeight.style.display = 'block';
            ketUnder.style.display = 'block';
            ketHasilBMI.textContent +=  'Hasil BMI < 18.5';
        } else if(hasilBMI >= 18.5 && hasilBMI <= 24.9){
            hasilKualitas.innerHTML += 'Normal';
            keteranganHasil.innerHTML += "Anda memiliki berat badan ideal. Good Job!!!"
            normalWeight.style.display= 'block';
            ketHasilBMI.innerHTML += 'Hasil BMI diantara 18.5 dan 24.9'
        } else if(hasilBMI >= 25.0 && hasilBMI <= 29.9){
            hasilKualitas.innerHTML += 'Berat Badan Lebih';
            keteranganHasil.innerHTML += 'Anda memiliki berat badan berlebih';
            ketOverWeight.style.display = 'block';
            ketOver.style.display = 'block';
            ketHasilBMI.innerHTML += 'Hasil BMI diantara 25.0 dan 29.9';
        } else{
            hasilKualitas.innerHTML += 'Obesitas';
            keteranganHasil.innerHTML += 'Anda berada dalam kategori obesitas';
            ketOverWeight.style.display= 'block';
            ketObesitas.style.display = 'block';
            ketHasilBMI.innerHTML += 'Hasil BMI > 25';
        }
    } else{
        alert("Harap masukan input dengan benar");
    }
}

// membuat fungsi untuk mereset input
function reset(){
    window.location.reload()
}