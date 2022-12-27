// Seleccionamos el total de la cuenta

let bill = document.querySelector(".inputs-section__bill-input")
let billValue = 100

bill.addEventListener("input", (event) => {
	billValue = event.target.value
	calcularResultado(billValue, amountPeople, tipPercent)

})


// Seleccionamos el porcentaje de propina con los botones

let buttons = document.querySelectorAll(".btns__btn")
let tipPercent = 5

buttons.forEach((btn) => {
	btn.addEventListener("click", (event) =>  {
		tipPercent = Number(event.target.innerText.slice(0, -1))

		buttons.forEach((btn) => btn.classList.remove("btns__btn--active"))
		btn.classList.add("btns__btn--active")
		calcularResultado(billValue, amountPeople, tipPercent)

	})
})


// Seleccionamos la propina personalizada

let custom = document.querySelector(".btns__custom")

custom.addEventListener("input", (event) => {
	tipPercent = event.target.value

	buttons.forEach((btn) => btn.classList.remove("btns__btn--active"))
	calcularResultado(billValue, amountPeople, tipPercent)

})

// Seleccionamos la cantidad de personas

let people = document.querySelector(".inputs-section__people-input")
let amountPeople = 5


let alert = document.querySelector("#alert")

people.addEventListener("input", (event) => {
	amountPeople = event.target.value

	if(amountPeople <= 0) {
		people.style.borderColor = "red"
		alert.classList.add("error")
	} else {
		people.style.border = "2px solid hsl(172, 67%, 45%)"
		alert.classList.remove("error")

		calcularResultado(billValue, amountPeople, tipPercent)
	}
})



let reset = document.querySelector(".result-section__reset")
reset.addEventListener("click", (event) => {
	calcularResultado(0, 1, 1)
})


function calcularResultado(valorFactura, cantPersonas, porcentPropina) {
	let propinaPerPersona = document.querySelector(".results__tip-value")
	let propinaTotal = document.querySelector(".results__total-value")

	let totalPropina = valorFactura * porcentPropina / 100

	propinaTotal.innerHTML = totalPropina
	propinaPerPersona.innerHTML = (totalPropina / cantPersonas).toFixed(2)
}



