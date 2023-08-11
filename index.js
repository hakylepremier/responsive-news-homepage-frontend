/** @format */

const openbtn = document.getElementById("open")
const closebtn = document.getElementById("close")
const nav = document.querySelector(".nav-container")

openbtn.addEventListener("click", () => {
	nav.classList.add("open")
})

closebtn.addEventListener("click", () => {
	nav.classList.remove("open")
})
