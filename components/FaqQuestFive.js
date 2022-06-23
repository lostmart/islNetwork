class QuestFive extends HTMLElement {
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
												Coopera en el desarrollo de las competencias
												comunicativas y lingüísticas de niños y niñas mediado
												por la maestra.
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">
												Acompaña a la maestra y estudiantes como referente
												lingüístico.
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">
												Trabaja en forma coordinada con la maestra en la
												implementación del programa.
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">Acompaña a la comunidad.</div>
										</div>
									</li>
								</ul>
        `
	}
}

window.customElements.define('quest-five', QuestFive)
