class AboutCont extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
            <h2 class="card-title mt-4">Quiénes somos</h2>
						<p class="card-text">
							Somos una <strong>red</strong> de padrinos y madrinas
							<strong>voluntarios</strong> que desde diferentes países del mundo
							colaboramos con las <strong>escuelas rurales</strong> de Uruguay.
						</p>

						<p class="card-text">
							Los padrinos y madrinas tienen
							<strong>diferentes recorridos personales y laborales</strong>
							educadores, científicos, cientistas sociales, pilotos,
							emprendedores, periodistas, cineastas, estudiantes de posgrado,
							etc. Algunos nos encontramos retirados, otros en actividad, todos
							<strong
								>compartimos la vocación solidaria y el compromiso de colaborar
								con los niños y sus maestras.</strong
							>
						</p>

						<h2 class="ma-4">Nuestros inicios</h2>
						<p class="card-text">
							En el año 2018 el programa
							<a
								target="_blank"
								href="https://www.anep.edu.uy/codicen/politicas-linguisticas/focus-on-first"
								>Inglés sin Límites</a
							>
							comienza a brindar enseñanza de inglés de calidad a
							<a
								target="_blank"
								href="https://www.dgeip.edu.uy/departamentos/rural/"
								>escuelas rurales de Uruguay</a
							>
							a las cuales no es posible llegar ni con la
							<a
								target="_blank"
								href="https://www.dgeip.edu.uy/departamentos/lenguas/"
								>presencialidad</a
							>
							ni la modalidad
							<a target="_blank" href="https://ingles.ceibal.edu.uy/">remota</a>
							por videoconferencia.
						</p>
						<p class="mt-4">
							En diversos encuentros durante el 2019 las maestras manifestaron
							los desafíos que les presentaba el uso de la lengua meta, en tal
							sentido solicitaron y demostraron predisposición al aprendizaje.
						</p>

						<p class="mt-4">
							Ya existían algunas experiencias de voluntariado de profesores de
							inglés jubilados en escuelas con las cuales tenían vínculo directo
							en la enseñanza de inglés como lengua extranjera.
						</p>

						<p class="mt-4">
							En el segundo semestre de 2019 se realiza un piloto del proyecto
							Godparents en 25 escuelas, resultando una experiencia muy positiva
							que se extendió en el 2020 a 250 escuelas.
						</p>
						<p class="mt-4">
							Hoy contamos con 550 escuelas en el Proyecto godparents y 500
							padrinos y madrinas
						</p>
						<p class="my-4">
							Inglés Sin Límites (ISL) se basa en el análisis de la función
							docente desde dos perspectivas:
						</p>
						<ol>
							<li>La organización y facilitación del aprendizaje</li>
							<li>
								La experticia en el objeto de aprendizaje: la lengua inglesa.
							</li>
						</ol>
						<p class="my-4">
							Las maestras rurales no poseen, en general, el conocimiento del
							idioma inglés como objeto y medio de enseñanza pero si tienen
							profunda formación en el manejo de clase y una visión de la
							organización del aprendizaje, no solo en la lengua meta sino en
							todos los demás aspectos del currículo.
						</p>
						<p class="my-4">
							El programa desarrolla materiales específicos basado en
							videolecciones que son entregados a la maestra conjuntamente con
							una guía pormenorizada. Esta es la base del modelo de lengua a
							enseñar. La maestra trabaja con sus alumnos siguiendo la pauta que
							se encuentra en la guía y armoniza los contenidos, habilidades y
							destrezas con las enseñadas durante el resto de la jornada
							escolar.
						</p>
						<p class="my-4">
							El programa ha demostrado en los cuatros años de desarrollo que
							los niños de las escuelas rurales aprenden una lengua extranjera
							con un material de muy buena calidad y docentes profesionales
							motivados y motivadores.
						</p>
        `
	}
}

window.customElements.define('about-content', AboutCont)
