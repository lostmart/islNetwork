class QuestOneEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			 <p class="my-4">
                Inglés Sin Límites (ISL) is an innovative Uruguayan program
                which has been created in order to respond to a need children
                from rural areas used to have. Its main aim is to develop a
                basic communicative competence in English. The program has two
                main components, with lessons being delivered in a blended way:
                a video lesson, recorded by EFL teachers which provides the
                linguistic input, and the Spanish teacher who mediates between
                the video lessons, the lesson plans and the learning processes.
              </p>
              <p class="my-4">
                Uruguay has 1040 rural schools, about 60% of them do not have
                internet connection or the possibility of having a face to face
                teacher. This creates a contextual inequality, which is reduced
                by primary school teachers volunteering for ISL.
              </p>
        `
	}
}

window.customElements.define('quest-oneeng', QuestOneEng)
