// two arrays of buttons for click listeners
navsEng = document.querySelectorAll("button[data-lang='eng']")
navsSp = document.querySelectorAll("button[data-lang='sp']")

// this listens to the click and changes its tab, Spanish or English
const langChange = (val) => {
	// evaluates the language and show or hides its correspondent element
	if (val === 'eng') {
		console.log('english ')
	} else {
		console.log('spanish')
	}
}

for (let index = 0; index < navsEng.length; index++) {
	const element = navsEng[index]
	element.addEventListener('click', (e) => {
		let value = e.target.getAttribute('data-lang')
		// console.log(value, index)
        langChange(value)
	})
}

for (let index = 0; index < navsSp.length; index++) {
	const element = navsSp[index]
	element.addEventListener('click', (e) => {
		let value = e.target.getAttribute('data-lang')
		// console.log(value, index)
        langChange(value)
	})
}
