const range = document.getElementById("Rol-KaFInput");
const valueBox = document.getElementById("Rol-KaFValueBox");

range.addEventListener("input", () => {
    valueBox.textContent = range.value;
});


const kvadratas = document.getElementById("Rol-KaGKvadratas");
const kvadratoSpalva = document.getElementById("kvadratoSpalva");
const tekstoSpalva = document.getElementById("tekstoSpalva");

kvadratoSpalva.addEventListener("input", () => {
    kvadratas.style.backgroundColor = kvadratoSpalva.value;
});

tekstoSpalva.addEventListener("input", () => {
    kvadratas.style.color = tekstoSpalva.value;
});