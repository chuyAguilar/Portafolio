// alert("Funciona!")


function contador() {
    let numero = parseInt(localStorage.getItem("contador")) || 0

    const badge = document.querySelector("#badge")
    const btnAccion = document.querySelector("#accion")


    function sumar() {
        numero = numero + 1
        localStorage.setItem("contador", numero)
        render()
        badge.classList.add("pulse")
        setTimeout(() => {
            badge.classList.remove("pulse")
        }, 150);
    }

    function render() {
        badge.textContent = numero
    }

    render()

    btnAccion.addEventListener("click", sumar)
}

const cont = contador()

const btnConoceme = document.querySelector("#btn1")

function goToCards(){
const sectionCards = document.querySelector("#cards")

sectionCards.scrollIntoView({ behavior: "smooth" })
}

btnConoceme.addEventListener("click",goToCards)


const btnSiguiente = document.querySelector("#btnSiguiente")

function goToContacto(){
    const sectionContacto = document.querySelector("#contacto")

    sectionContacto.scrollIntoView({behavior: "smooth"})
}

btnSiguiente.addEventListener("click",goToContacto)