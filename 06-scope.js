/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
////// ada 3 jumlah scope. Local, Global
////// variabel yang berada di Local scope hanya bisa di gunakan di dalam scope tersebut, termasuk function scope yang digunakan untuk menjalankan function, sedangkan variabel yang di global scope bisa di panggil di mana saja
////// Local scope     |   {function penambahan(angka1,angka2){}}
////// global scope    |   let angka = 3{}



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
////// mariah
////// karena argumen yang dipanggil function printFirstName dengan nilai Mariah Carey bukan variabel name



const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));