class QuestSix extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			<ul class="list-group mt-2">
					<li class="list-group-item" aria-current="true">
						<div class="row">
							<div class="col-1 d-flex align-items-center">
								<i class="far fa-check-circle text-success"></i>
							</div>
							<div class="col-11">
								Una hora semanal para realización y envío frecuente de
								videos cortos, grabado de lecturas, tours u otros.
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-1 d-flex align-items-center">
								<i class="far fa-check-circle text-success"></i>
							</div>
							<div class="col-11">
								Disponibilidad para responder eventuales preguntas del
								docente sobre el uso del inglés en contextos reales.
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-1 d-flex align-items-center">
								<i class="far fa-check-circle text-success"></i>
							</div>
							<div class="col-11">
								Un día a la semana (o al menos 2 veces al mes) para
								comunicación sincrónica o asincrónica con el/la docente
								y el grupo.
							</div>
						</div>
					</li>
				</ul>
				<p class="mt-2 text-secondary">
					* Sugerencia de tiempos mínimos.
				</p>
								
        `
	}
}

window.customElements.define('quest-six', QuestSix)
