class QuestTwoEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			<p class="my-4">
                It is a subsidiary project to the implementation of ISL which
                provides opportunities of interaction promoting interculturality
                and plurilingualism.
              </p>
			  <h4 class="my-4">
									Presentation of the 2020 edition of the project:
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

window.customElements.define('quest-twoeng', QuestTwoEng)
