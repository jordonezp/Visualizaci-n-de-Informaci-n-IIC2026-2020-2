// Se crean las constantes que capturan los elementos del documento html
const button = document.getElementById("send")
const input = document.getElementById("title")
const list = document.getElementById("list")

// Se intercepta el click
button.addEventListener("click", () => {
    const p = document.createElement("p")
    p.textContent = input.value
    list.append(p)
})

