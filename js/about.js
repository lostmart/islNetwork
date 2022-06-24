// two arrays of buttons for click listeners
navsEng = document.querySelectorAll("button[data-lang='eng']")
navsSp = document.querySelectorAll("button[data-lang='sp']")

let navBtnEng = document.querySelectorAll("button[data-lang='eng']")[0]
let navBtnSp = document.querySelectorAll("button[data-lang='sp']")[0]

// this listens to the click and changes its tab, Spanish or English
const langChange = (val) => {
	// evaluates the language and show or hides its correspondent element
	let spPartOne = document.getElementsByTagName('about-content-es')[0]
	let spPartTwo = document.getElementsByTagName('about-content-es-two')[0]
	let engPartOne = document.getElementsByTagName('about-content-eng')[0]
	let engPartTwo = document.getElementsByTagName('about-content-eng-two')[0]
	if (val === 'eng') {
		console.log('english ')
		spPartOne.classList.add('animate__fadeOut')
		spPartTwo.classList.add('animate__fadeOut')
		setTimeout(() => {
			spPartOne.classList.add('d-none')
			spPartTwo.classList.add('d-none')
			engPartOne.classList.remove('d-none')
			engPartTwo.classList.remove('d-none')
			engPartOne.classList.add('animate__fadeIn')
			engPartTwo.classList.add('animate__fadeIn')
        }, 350)
        navBtnEng.classList.add('active')
        navBtnSp.classList.remove('active')
        engPartOne.classList.remove('animate__fadeOut')
		engPartTwo.classList.remove('animate__fadeOut')
	} else {
		console.log('spanish')
		engPartOne.classList.add('animate__fadeOut')
        engPartTwo.classList.add('animate__fadeOut')
		setTimeout(() => {
			engPartOne.classList.add('d-none')
			engPartTwo.classList.add('d-none')
			spPartOne.classList.remove('d-none')
			spPartTwo.classList.remove('d-none')
			spPartOne.classList.add('animate__fadeIn')
			spPartTwo.classList.add('animate__fadeIn')
        }, 350)
        spPartOne.classList.remove('animate__fadeOut')
		spPartTwo.classList.remove('animate__fadeOut')
        navBtnSp.classList.add('active')
		navBtnEng.classList.remove('active')
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
