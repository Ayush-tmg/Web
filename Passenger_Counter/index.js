let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}


function save(){
    let saved = count + " - "
    saveEl.textContent += saved;
    countEl.innerText = 0;
    count = 0;
}