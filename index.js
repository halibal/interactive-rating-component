const ratedNum = document.querySelector(".ratedNum")
const smallContainer1 = document.querySelector(".smallContainer1")
const smallContainer2 = document.querySelector(".smallContainer2")
const submitPoint = document.querySelector("#submitPoint")
const greetingContainer = document.getElementById("greetingContainer")
const containerCircle = document.getElementsByClassName("containerCircle")

let submitValue;

function btnSelected(x) {
    x.style.backgroundColor = 'hsl(217, 12%, 63%)';
}

function greetingDisplay() {
    greetingContainer.classList.remove("d-none");
    smallContainer1.classList.add("d-none");
}

function colorChange(e) {
    e.classList.add("btn-secondary", "border-0")
}

function getValue (e) {
    submitValue = e.innerHTML;
    ratedNum.innerHTML = `You selected ${submitValue} out of 5`
}