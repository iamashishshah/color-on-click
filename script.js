const input = document.querySelector(".input")
const randomCodeBtn = document.getElementById("random-code-btn")
const createBtn = document.getElementById("create-btn")
const body = document.getElementsByTagName("body")
const btnContainer = document.querySelector(".buttons-container")
const colorCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];



createBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const colorCode = `#${input.value.trim()}`
    console.log(colorCode.length)
    if (colorCode.length <= 7) {
        const btn = document.createElement("button")
        input.value = ""
        btn.style.backgroundColor = colorCode
        btn.textContent = colorCode
        btn.classList.add("button2")
        btnContainer.appendChild(btn)
        btn.addEventListener("click", () => {
            body[0].style.backgroundColor = colorCode
        })
    } else {
        input.value = ""
        alert("Please provide valid hex color code!")
    }

})

randomCodeBtn.addEventListener("click", (e) => {
    console.log("It is working")
    e.preventDefault()
    let generatedColor = ""
    for (let i = 0; i < 6; i++){
        const rn = Math.floor(Math.random() * 15)
        generatedColor += colorCharacter[rn]
    }
    input.value = generatedColor

})
