class QuestSevenEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
					<p class="my-4">
					In the following link you will be able to find the teachers' book and the vocabulary cards for the 1st and 2nd year							
					</p>
					<p class="my-4">

						Uruguay has 1,040 rural schools, 60% of which
						do not have a stable internet connection or the
						possibility of having a face-to-face teacher. This creates a
						inequality between rural and urban areas that is remedied
						for the teachers who decide to be part of ISL.
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
							For more details on how these materials are used,
							We recommend watching the following video:
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

window.customElements.define('quest-seven-eng', QuestSevenEng)
