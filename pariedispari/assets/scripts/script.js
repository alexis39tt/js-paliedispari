// FUNCTIONS

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

// MAIN VARIABLES AND CONSTANTS

const container = [document.getElementById("container1"), document.getElementById("container2"), document.getElementById("container3"), document.getElementById("container4")];
const pari = document.getElementById("even");
const dispari = document.getElementById("odd");
let type;

// EVENT LISTENERS

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