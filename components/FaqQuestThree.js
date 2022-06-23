class QuestThree extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
							<p class="ty-4">
									ISL es un programa basado en videolecciones acompañadas de una
									secuencia de actividades. Las secuencias se organizan en
									unidades temáticas que van desde el entorno inmediato de niños
									y niñas, expandiéndose hacia la comunidad y luego a temáticas
									más globales. Para implementar ISL es necesario descargar el
									video para ver junto al grupo y seguir el plan de clase
									correspondiente que está incluido en el «Libro del Docente».
							</p>
							<p class="ty-4">
								Las clases de ISL mantienen una estructura preestablecida,
								explicada en el siguiente video:
							</p>
							<div class="d-flex justify-content-center">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/ymMtiSa4DkQ"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
        `
	}
}

window.customElements.define('quest-three', QuestThree)
