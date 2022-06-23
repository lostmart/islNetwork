class QuestOne extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			<p class="my-4">
				Inglés Sin Límites (ISL) es un programa uruguayo innovador
				creado para dar respuesta a una necesidad que tenían las
				escuelas rurales. Su principal objetivo es desarrollar una
				competencia comunicativa básica en inglés. El programa tiene
				dos componentes principales y las clases se imparten de manera
				combinada: una videolección, grabada por profesores de inglés,
				que proporciona la exposición a la lengua meta, y la maestra
				que media entre las videolecciones, los planes de clase y los
				procesos de aprendizaje.
			</p>
			<p class="my-4">
				Uruguay cuenta con 1040 escuelas rurales de las cuales
				alrededor de un 60% no tiene conexión a internet estable o la
				posibilidad de tener un profesor presencial. Esto crea una
				desigualdad entre el medio rural y el urbano que es subsanada
				por las maestras que deciden ser parte de ISL.
			</p>
        `
	}
}

window.customElements.define('quest-one', QuestOne)
