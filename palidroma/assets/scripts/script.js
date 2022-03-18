function CheckPalindrome(word){
    let w = word.value;
    let wl = word.value.length;
    for (let i = 0; i < wl; i++){
        wl -= 1;
        if (w[i] != w[wl]){
            container.innerHTML = `<p>La parola non è palindroma</p>`;
            return false;
        }
    }
    container.innerHTML = `<p><span>La parola è palindroma</span></p>`;
    return true;
}

let container = document.getElementById("container");
let word = document.getElementById("input");
let palindrome = CheckPalindrome(word);

word.addEventListener("input", () => {
    CheckPalindrome(word);
})