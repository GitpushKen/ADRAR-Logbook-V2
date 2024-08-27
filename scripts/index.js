const clickerR = document.getElementById("clicker-right");
const clickerL = document.getElementById("clicker-left");
const aRight = document.querySelector(".aside-right");
const aLeft = document.querySelector(".aside-left");


clickerL.addEventListener("click", () => {
    aLeft.classList.toggle("clicked")
})
clickerR.addEventListener("click", () => {
    aRight.classList.toggle("clicked")
})