

const btnConoceme = document.querySelector("#btn1")
function goToCards() {
    const sectionCards = document.querySelector("#cards")

    sectionCards.scrollIntoView({ behavior: "smooth" })
}
btnConoceme.addEventListener("click", goToCards)


const btnSiguiente = document.querySelector("#btnSiguiente")
function goToContacto() {
    const sectionContacto = document.querySelector("#contacto")

    sectionContacto.scrollIntoView({ behavior: "smooth" })
}
btnSiguiente.addEventListener("click", goToContacto)

const btnProyectos = document.querySelector("#btnProyectos");
function goToProyectos() {
    const sectionProyectos = document.querySelector("#proyectos")

    sectionProyectos.scrollIntoView({ behavior: "smooth" })
}
btnProyectos.addEventListener("click", goToProyectos);