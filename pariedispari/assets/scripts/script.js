// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function Random(num, type){
    let cpu = Math.ceil(Math.random()*5);
    console.log(num);
    console.log(cpu);
    if(type == "even"){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

let num = Number(document.getElementById("num").value);
let even = document.getElementById("even");
let odd = document.getElementById("odd");

even.addEventListener("click", () => {
    Random(num, "even");
})

odd.addEventListener("click", () => {
    Random(num, "odd");
})