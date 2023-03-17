// ISIM
let userName = document.onload = prompt("Enter your name!");
let greeting = document.querySelector(".greeting");
greeting.innerHTML = `
Merhaba, <strong>${userName}</strong>! Hosgeldin!
`


// TARIH ZAMAN FUNCTION
function tarihSaat() {
    let options = { weekday: 'long' }
    let date = new Date().toLocaleDateString("tr-TR", options);
    let time = new Date().toLocaleTimeString();
    
    // TARIH
    let tarih = document.querySelector(".tarih");
    tarih.innerHTML = `
Bugün günlerden ${date}
`

    // ZAMAN
    let saat = document.querySelector(".saat");
    saat.innerHTML = `
Saat: ${time} ve 
`
}

setInterval(tarihSaat, 1000);