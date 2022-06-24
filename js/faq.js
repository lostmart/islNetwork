/*
	esto funciona de la siguiente manera:
	cuando alquien hace click en el boton "ES" o "EN" paso el valor como parametro de la funcion
	evaluo si el argumento es ingles o español y escondo el primer o segundo elemento
	el primer elemento es en español / el segundo en ingles
	cada elemento son cutom html tags importados en el documento

*/

// two arrays of buttons for click listeners
navsEng = document.querySelectorAll("button[data-lang='eng']")
navsSp = document.querySelectorAll("button[data-lang='sp']")

// this listens to the click and changes its tab, Spanish or English
const langChange = (val, indx) => {
	//console.log(val, indx)
	let navBtnEng = document.querySelectorAll("button[data-lang='eng']")[indx]
	let navBtnSp = document.querySelectorAll("button[data-lang='sp']")[indx]
	let tabNav = document.querySelectorAll('.nav-tabs')[indx]
	let answOne = tabNav.nextElementSibling
	let answTwo = tabNav.nextElementSibling.nextElementSibling

	// evaluates the language and show or hides its correspondent element
	if (val === 'eng') {
		answOne.classList.add('animate__fadeOut')
		answTwo.classList.remove('animate__fadeOut')
		setTimeout(() => {
			answOne.classList.add('d-none')
			answTwo.classList.remove('d-none')
			answTwo.classList.add('animate__fadeIn')
		}, 350)
		navBtnEng.classList.add('active')
		navBtnSp.classList.remove('active')
	} else {
		answTwo.classList.add('animate__fadeOut')
		answOne.classList.remove('animate__fadeOut')
		setTimeout(() => {
			answTwo.classList.add('d-none')
			answOne.classList.remove('d-none')
			answOne.classList.add('animate__fadeIn')
		}, 350)
		navBtnSp.classList.add('active')
		navBtnEng.classList.remove('active')
	}
}

// CLICK LISTENERS ON THE LANGUAGE TABS

for (let index = 0; index < navsSp.length; index++) {
	const element = navsSp[index]
	element.addEventListener('click', (e) => {
		 
		langChange(value, index)
	})
}

for (let index = 0; index < navsEng.length; index++) {
	const element = navsEng[index]
	element.addEventListener('click', (e) => {
		let value = e.target.getAttribute('data-lang')
		langChange(value, index)
	})
}
