class QuestFourEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
				<p class="my-4">
					To implement ISL to its full extent, the teacher has to download the
					videolesson to be watched with the group and follow the
					corresponding lesson plan included in the «Libro del Docente». For
					further details, follow the recommendations in this video:
				</p>

				<div class="d-flex justify-center">
					<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/kXvdcE1zGoE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					></iframe>
				</div>
        `
	}
}

window.customElements.define('quest-four-eng', QuestFourEng)
