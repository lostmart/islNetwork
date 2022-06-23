class QuestThreeEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
			<p class="ty-4">
				ISL is a program based on videolessons and a sequence of activities.
				Those sequences are organized in thematic units ranging from the
				students’ immediate context, expanding first to their communities
				and then to more global issues. In order to implement ISL it is
				necessary to download the videolesson to be watched with the group
				and follow the corresponding lesson plan included in the «Libro del
				Docente».
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

window.customElements.define('quest-three-eng', QuestThreeEng)
