const ratedNum = document.getElementsByClassName("ratedNum")
const smallContainer1 = document.querySelector(".smallContainer1")
const smallContainer2 = document.querySelector(".smallContainer2")
const submitPoint = document.querySelector("#submitPoint")
const greetingContainer = document.getElementById("greetingContainer")
const containerCircle = document.querySelectorAll(".containerCircle")
// function makeOrange(x) {
//     x.style.backgroundColor = 'rgb(252, 124, 5)';
// }

// function backToNormal(x) {
//     x.style.backgroundColor = 'hsl(215, 17%, 22%)';
// }

// function submitHover(x) {
//     x.style.backgroundColor = 'hsl(0, 0%, 100%)';
//     x.style.
// }

// function submitNormal(x) {
//     x.style.backgroundColor = 'rgb(252, 124, 5)';
//   }

// for (let i = 0; i < points.length; i++) {
//     points[i].addEventListener("click", function() {
//         let selectedBtn = document.querySelector(".selectedBtn");
//         if (selectedBtn) {
//             selectedBtn.classList.remove("selectedBtn");
//         }
//         this.classList.add("selectedBtn");
//     }, false)
// }


function btnSelected(x) {
    x.style.backgroundColor = 'hsl(217, 12%, 63%)';
}



function greetingNum() {
    ratedNum.innerHTML = `You selected ${rating} out of 5`
}

function greetingDisplay() {
    greetingContainer.classList.remove("d-none");
    smallContainer1.classList.add("d-none")
}
