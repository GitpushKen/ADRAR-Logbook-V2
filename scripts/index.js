const clickerR = document.getElementById("clicker-right");
const clickerL = document.getElementById("clicker-left");
const aRight = document.getElementById("aside-right");
const aLeft = document.getElementById("aside-left");


clickerL.addEventListener("click", () => {
    aLeft.classList.toggle("clicked")
})
clickerR.addEventListener("click", () => {
    aRight.classList.toggle("clicked")
})