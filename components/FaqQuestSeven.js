class QuestSeven extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
					<p class="my-4">
							En este enlace encuentran los libros del docente y las
							tarjetas de vocabulario de Año 1 y 2:
						</p>
						<p class="my-4">
							Uruguay cuenta con 1040 escuelas rurales de las cuales
							alrededor de un 60% no tiene conexión a internet estable o la
							posibilidad de tener un profesor presencial. Esto crea una
							desigualdad entre el medio rural y el urbano que es subsanada
							por las maestras que deciden ser parte de ISL.
						</p>
						<p>
							<a
								href="https://www.dropbox.com/sh/v9xnij77822q1fk/AABMkjlgGXdygoEEFq8XGAwsa?dl=0"
								target="_blank"
							>
								https://www.dropbox.com/</a
							>
						</p>
						<h5>
							Para más detalles de cómo se utilizan estos materiales,
							recomendamos ver el siguiente video:
						</h5>
						<div class="d-flex justify-content-center">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/wb2-Lpg8IpU"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
        `
	}
}

window.customElements.define('quest-seven', QuestSeven)
