class QuestTwo extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			<p class="my-4">
									Es un proyecto subsidiario a la implementación de ISL que
									brinda oportunidades de interacción promoviendo la
									interculturalidad y el plurilingüismo.
								</p>
								<h4 class="my-4">
									Presentación del proyecto edición 2020:
								</h4>
								<div class="d-flex justify-content-center">
									<iframe
										width="560"
										height="315"
										src="https://www.youtube.com/embed/EwHdUF1SA4o"
										title="Presentation of the 2020 edition of the project"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
        `
	}
}

window.customElements.define('quest-two', QuestTwo)
