const aumentarFonte = document.getElementById("aumentar-fonte")
const body = document.body;
let fontSize = 16;

aumentarFonte.addEventListener("click", ()=>{
    fontSize += 2;
    body.style.fontSize = fontSize + "px"; 
})
const diminuirFonte = document.getElementById("diminuir-fonte")
diminuirFonte.addEventListener("click", ()=>{
    fontSize -= 16;
    body.style.fontSize = fontSize + "px"; 
})
const botaModoEscuro = document.getElementById("modo-escuro")
botaModoEscuro.addEventListener("click", ()=>{
    body.classList.toggle("dark-mode");
})

