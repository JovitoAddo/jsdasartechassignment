/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for(i = 2; i <= 100 ; i++){
    let n = true;
    for( j = 2 ; j < i ; j++){
        if(i % j == 0){
            n = false;
            break;
        }
    }
    if(n){
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE

while (oddCounter<100) {
    if (oddCounter % 2 != 0)
        console.log(oddCounter);
    oddCounter ++;
    fiftiethOdd = "99";
}
console.log(fiftiethOdd);