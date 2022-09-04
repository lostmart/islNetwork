class AboutContEng extends HTMLElement {
	constructor() {
		super()
		this.innerHTML = `
            <h2 class="card-title mt-4">About us</h2>
						<p class="card-text">
							We are a <strong>network of volunteer</strong> godparents from
							different countries of the world who
							<strong>collaborate with rural schools</strong> in Uruguay.
						</p>

						<p class="card-text">
							Godparents have different personal and work paths: educators,
							scientists, social scientists, pilots, entrepreneurs,
							journalists, filmmakers, graduate students, etc. Some are
							retired, others are active, we all share the spirit of
							solidarity and commitment to work with children and their
							teachers.
							>
						</p>
						<p>
							The tutors are teachers of English as a foreign language from
							various backgrounds who know the context in which the Godparents
							Project is developed.
						</p>
						<p>
							They work voluntarily with groups of godparents whose schools
							are in the same territory or province
						</p>

						<h2 class="ma-4">Our beginnings ...</h2>
						<p class="card-text">
							In 2018 Inglés Sin Límites’ program started bringing English
							instruction to rural schools where neither face to face English
							teachers nor remote videoconference lessons are available
							because of both geographical location and/or weak internet
							connection.
						</p>
						<p class="mt-4">
							In 2019 during some meetings, teachers mentioned the challenging
							situation regarding the use of the target language when
							implementing Inglés Sin Límites in their schools. Teachers also
							showed themselves open and predisposed to learning the foreign
							language.
						</p>

						<p class="mt-4">
							Other volunteering experiences of retired English teachers took
                			place in a few rural schools.
						</p>

						<p class="mt-4">
							During the second semester of 2019 a Godparents’ pilot Project
							was implemented in 25 rural schools with positive results, after
							which the project extended to 250 schools in 2020.
						</p>
						<p class="mt-4">
							Today, 550 schools are participating in the Godparents’ project
                			with 500 godparents as active members.
						</p>
						<p class="my-4">
							<i>Inglés Sin Límites </i>(ISL) is rooted in two different
                			aspects of the teacher’s role:
						</p>
						<ol>
							<li>Organization and learning facilitation.</li>
                			<li>Lack of expertise in the target language.</li>
						</ol>
						<p class="my-4">
							Despite not having a deep understanding of English language to
							be taught, rural teachers’ training regarding classroom
							management and learning processes, planning and organization in
							other contents of the national curriculum gives them tools and
							strategies to implement Inglés Sin Límites in their schools.
						</p>
						<p class="my-4">
							The program is delivered through video-lessons where language
							functions, exponents and vocabulary are presented. A guided
							lesson plan is provided to the school teacher with detailed
							information about classroom management and specific English
							teaching strategies.
						</p>
						<p class="my-4">
							In four years of implementation, Inglés Sin Límites has shown
							that children from rural schools learn a foreign language with
							<strong> professional, active and motivated teachers.</strong>
						</p>
        `
	}
}

window.customElements.define('about-content-eng', AboutContEng)
