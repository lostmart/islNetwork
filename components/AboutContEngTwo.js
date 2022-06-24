class AboutContTwoEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
            <div class="card mt-4">
					<div class="card-body">
						<h5 class="card-title">COORDINACIÓN</h5>
						<p class="card-text">Prof. Laura Motta</p>
					</div>
				</div>
				<div class="card mt-4">
					<div class="card-body">
						<p class="card-text">
							Los referentes son docentes de inglés como lengua extranjera de
							diversas procedencias y formaciones que conocen el contexto en el
							que se desarrolla el Proyecto Godparents.
						</p>
						<p class="card-text">
							Trabajan voluntariamente con grupos de padrinos cuyas escuelas se
							encuentran en un mismo territorio o departamento.
						</p>
						<h4 class="mb-n2">Ellos son:</h4>
						<div class="row padrinos-voluntarios">
							<!--  loop to fill this  -->
						</div>
					</div>
				</div>
				<div class="card mt-4 mx-auto">
					<div class="card-body">
						<h5 class="card-title">Equipo de enlace ISL</h5>
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="row">
									<div class="col col-sm-12">
										<div class="alert alert-secondary" role="alert">
											<p class="mb-1">
												<strong>Dr. Aldo Rodriguez</strong>
												<a
													href="https://www.linkedin.com/in/aldo-rodriguez-45515937"
													target="_blank"
												>
													<i class="fab fa-linkedin"></i>
												</a>
											</p>
										</div>
									</div>
									<div class="col col-sm-12">
										<div class="alert alert-secondary" role="alert">
											<p class="mb-1">
												<strong>Prof. Florencia Perez</strong>
												<a
													href="https://www.linkedin.com/in/mar%C3%ADa-florencia-p%C3%A9rez-784134216/"
													target="_blank"
												>
													<i class="fab fa-linkedin"></i>
												</a>
											</p>
										</div>
									</div>
									<div class="col col-sm-12">
										<div class="alert alert-secondary" role="alert">
											<p class="mb-1">
												<strong>Mta. Valentina Alpuin</strong>
												<a
													href="https://www.linkedin.com/in/valentina-alpu%C3%ADn-martirena-9263b1215/"
													target="_blank"
												>
													<i class="fab fa-linkedin"></i>
												</a>
											</p>
										</div>
									</div>
									<div class="col col-sm-12">
										<div class="alert alert-secondary" role="alert">
											<p class="mb-1">
												<strong>Prof. Valentina Dubini</strong>
												<a
													href="https://www.linkedin.com/in/valentinadubini/"
													target="_blank"
												>
													<i class="fab fa-linkedin"></i>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6">
								<img src="./asstes/img/isl 20.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
        `
	}
}

window.customElements.define('about-content-eng-two', AboutContTwoEng)
