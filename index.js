let isOriginal = true;

let heading1 = document.getElementById("heading1")
let heading2 = document.getElementById("heading2")
let heading3 = document.getElementById("heading3")

function switchContent(){
    if (isOriginal){
        heading1.textContent = 19.99
        heading2.textContent = 24.99
        heading3.textContent = 39.99
    } else { 
       heading1.innerHTML = 199.99
       heading2.innerHTML = 249.99
       heading3.innerHTML = 399.99
    }
    isOriginal = !isOriginal;
}