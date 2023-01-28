var sayi = document.getElementById("sayi");
var arttir = document.querySelector(".arttir");
var azalt = document.querySelector(".azalt");
var sifirla = document.querySelector(".sifirla")


var sayi = 0;


azalt.addEventListener("click", () => {
    sayi--;
    updateDisplay();
    if(sayi < 0){
        sifir.style.color = "red"
    } 
    if (sayi === 0) {
        sifir.style.color = "black"
    }
});

sifirla.addEventListener("click", () => {
    sayi = 0;
    updateDisplay();
    if(sayi === 0){
        sifir.style.color = "black"
    }
});

arttir.addEventListener("click", () => {
    sayi++;
    updateDisplay();
    if(sayi > 0){
        sifir.style.color = "green"
    }

    if (sayi === 0) {
        sifir.style.color = "black"
    }
});

function updateDisplay() {
    sifir.innerHTML = sayi;
};