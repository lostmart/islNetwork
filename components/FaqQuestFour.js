class QuestFour extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
					<p class="my-4">
						Para implementar ISL al 100% la maestra debe descargar el
						video para ver junto al grupo y seguir el plan de clase
						correspondiente que está incluido en el «Libro del Docente».
						Para más detalles, recomendamos ver el siguiente video:
					</p>
					<div class="d-flex justify-content-center">
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

window.customElements.define('quest-four', QuestFour)
