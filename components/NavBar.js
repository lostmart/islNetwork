class NavBar extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
				<div class="container-fluid">
					<a class="navbar-brand text-white" href="/">
						<img src="./favicon-32x32.png" alt="padrinos sin limites" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a
									class="nav-link text-white"
									aria-current="page"
									href="/"
									>INICIO</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="./about.html">QUIÉNES SOMOS</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="./faq.html">PREGUNTAS</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">CONTACTO</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        `
	}
}

window.customElements.define('nav-bar', NavBar)
