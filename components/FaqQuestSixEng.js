class QuestSixEng extends HTMLElement {
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
								Once a week (or at least twice a month) for synchronous or
								asynchronous communication with the teacher and the group.
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-1 d-flex align-items-center">
								<i class="far fa-check-circle text-success"></i>
							</div>
							<div class="col-11">
								One hour a week for recording and sending short videos,
                    			readings, tours, among others.
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-1 d-flex align-items-center">
								<i class="far fa-check-circle text-success"></i>
							</div>
							<div class="col-11">
								Availability to answer teacher’s questions about English
                    			usage in real contexts.
							</div>
						</div>
					</li>
				</ul>
				<p class="mt-2 text-secondary">
					* Minimum suggested time
				</p>
								
        `
	}
}

window.customElements.define('quest-six-eng', QuestSixEng)
