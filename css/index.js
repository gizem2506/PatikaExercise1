let kulaniciadi = prompt ("İsminizi Giriniz :") 
let myname = document.querySelector("#myName") 
myname.innerHTML=kulaniciadi 

function zaman ()
{
    let anlık = new Date();  
    // Saat eklendi
    let saat = anlık.getHours(); 
    // Dakika eklendi
    let dakika = anlık.getMinutes(); 
    // Saniye Eklendi
    let saniye = anlık.getSeconds(); 
    var d = new Date(); 
    // Günler Eklendi
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // ID Tanımlandı
    let iceaktarma = document.querySelector("#myClock") 
    //Ekrana yazdırma
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
}
let simdi = setInterval(zaman,100); 
