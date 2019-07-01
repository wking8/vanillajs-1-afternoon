console.log(`The house always wins, Honky!`)

const inputId = document.getElementById('inputId')
const colorId = document.getElementById('colorId')

console.log(inputId);
console.log(colorId);

function setCard() {
    const card = document.getElementById(inputId.value)
    card.style.color = colorId.value
}