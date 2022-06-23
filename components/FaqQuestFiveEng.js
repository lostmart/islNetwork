class QuestFiveEng extends HTMLElement {
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
												Fosters the development of children's communicative and
												linguistic competences with the teacher’s mediation
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">
												Provides the teacher and the students with a linguistic model.
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">
												Coordinates his/her support with the teachers, following the implementation of the program.
											</div>
										</div>
									</li>
									<li class="list-group-item">
										<div class="row">
											<div class="col-1 d-flex align-items-center">
												<i class="far fa-check-circle text-success"></i>
											</div>
											<div class="col-11">Supports the rural community.</div>
										</div>
									</li>
								</ul>
        `
	}
}

window.customElements.define('quest-five-eng', QuestFiveEng)
