// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function RandomNumber(){
    let x = Math.ceil(Math.random()*5);
    container[0].innerHTML = `<p>Il numero del CPU è ${x}</p>`;
    return x;
}

function UserNum(){
    let y = Number(document.getElementById("num").value);
    container[1].innerHTML = `<p>Il tuo numero è ${y}</p>`;
    return y;
}

function Sum(num, rnum){
    let z = Number(num)+Number(rnum);
    container[2].innerHTML = `<p>La somma dei numeri è ${z}</p>`
    return z;
}

function Buttons(type, sum){
    if (sum % 2 == 0){
        if(type == "pari"){
            container[3].innerHTML = `<span class="v">La somma è pari. Hai vinto!</span>`
        }
        else{
            container[3].innerHTML = `<span class="p">La somma è dispari. Hai perso!</span>`
        }
    }
    else{
        if(type == "dispari"){
            container[3].innerHTML = `<span class="v">La somma è dispari. Hai vinto!</span>`
        }
        else{
            container[3].innerHTML = `<span class="p">La somma è pari. Hai perso!</span>`
        }
    }
}

const container = [document.getElementById("container1"), document.getElementById("container2"), document.getElementById("container3"), document.getElementById("container4")];
let type;
let pari = document.getElementById("even");
let dispari = document.getElementById("odd");

pari.addEventListener("click", () => {
    let num = UserNum();
    let rnum = RandomNumber();
    let sum = Sum(num, rnum);
    Buttons("pari", sum);
})

dispari.addEventListener("click", () => {
    let num = UserNum();
    let rnum = RandomNumber();
    let sum = Sum(num, rnum);
    Buttons("dispari", sum);
})