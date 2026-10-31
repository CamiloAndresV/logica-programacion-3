let boton = document.getElementById("boton") // boton de calcular
let numero = document.getElementById("result") // contenedor del resultado

function calcular() {
    numero.innerHTML = "" // limpiar el contenedor del resultado
    const numeroEntrada = Number(document.getElementById("input").value)
    if (isNaN(numeroEntrada) || numeroEntrada < 0) {
        alert("Error: ingresa un numero válido")
        return
    }
    let resultado = 1

    for (let i = numeroEntrada; i > 1; i--) {
        resultado *= i
    }

    // Cambiar a notación científica si el número es muy grande (ej. mayor a 100,000,000)
    if (resultado >= 100000000) {
        // El número 8 indica cuántos decimales quieres mostrar
        numero.textContent = resultado.toExponential(8) 
    } else {
        numero.textContent = resultado.toLocaleString()
    }
    numero.classList.add("resultado")
}

boton.addEventListener("click", calcular)
