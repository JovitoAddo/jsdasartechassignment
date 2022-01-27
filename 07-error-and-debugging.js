/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
////// type error terjadi ketika value yang di operasikan tidak sesuai tipe nya dengan yang di tentukan
////// reference error terjadi saat variabel yang di operasikan tidak ada di dalam local scope atau di isi setelah dioperasikan
////// range error terjadi saat operasi function di isi dengan argumen yang tidak sesuai dengan parameter
////// syntax error terjadi saat typo terjadi dan tidak javascript tidak bisa menjalankan code

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
///// undefined, reference error, karena operasi console.log di panggil sebelum variabel di isi.




console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;