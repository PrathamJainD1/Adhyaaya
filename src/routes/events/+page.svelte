<script>
	import { goto } from '$app/navigation';

	import { EVENTS } from '$lib/data/events';
	import { openModal } from 'svelte-modals';

	import EventInfoModal from '../../lib/components/events/EventInfoModal.svelte';
	function getEventByName(name) {
		return EVENTS.find((event) => event.name.toLowerCase() === name.toLowerCase());
	}
	function getEventById(id) {
		return EVENTS.find((event) => event.id === id);
	}
</script>

<video src="/events/sample.mp4" autoplay loop muted />

<body>
	<!-- <video src="events/sample-2_t7opGXnA.mp4" autoplay loop muted></video> -->
	<main>
		<section class="all-event">
			<section class="heading">Events</section>
			<!-- <svg width="500" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 ,100 Q150 ,-50,300,100,T500,100" fill="none" stroke="white"  stroke-width="30" stroke-linecap="round"></path>
  <text x="50" y="110" font-size="40px" font-weight="bold" fill="white" font-family="arial">Brush Text</text>
</svg> -->
			<section class="main-event">
				<a href="#tech">
					<div class="tech-event-main glow">
						<h1>Technical</h1>
						<span>Events</span>
						<img src="/events/icons/tech.png" alt="" style="height:250px" />
					</div>
				</a>
				<a href="#non-tech">
					<div class="non-tech-event-main glow">
						<h1>Non-Technical</h1>
						<span>Events</span>
						<img src="/events/icons/nontech.png" alt="" style="height:250px" />
					</div>
				</a>
				<a href="#workshop">
					<div class="workshop-event-main glow">
						<h1>Workshops</h1>
						<img src="/events/icons/workshops copy.png" alt="" style="height:250px" />
					</div>
				</a>
			</section>
		</section>

		<section class="all-tech-events">
			<section class="heading" id="tech">
				<a href="#check1" id="check1">Technical Events</a>
			</section>
			<section class="tech-event tech-part1">
				<button
					on:click={async () => {
						const event = getEventById('circuit-quests');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/codeventures.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Circuit Quest</h1>
							</div>
						</div>
					</div></button
				>
				<button
					on:click={async () => {
						const event = getEventByName('avishkar');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img src="/events/icons/avishkar.png" alt="" style="height: 200px;" />
								<h1>Avishkar</h1>
							</div>
						</div>
					</div></button
				>

				<button
					on:click={async () => {
						const event = getEventByName('virtual placement');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/vp.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Virtual Placement</h1>
							</div>
						</div>
					</div>
				</button>
			</section>
			<section class="tech-event tech-part1">
				<button
					on:click={async () => {
						const event = getEventById('codeventure');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/codeventures.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>CodeVenture</h1>
							</div>
						</div>
					</div>
				</button>
				<button
					on:click={async () => {
						const event = getEventByName('roborace');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/roborace.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>RoboRace</h1>
							</div>
						</div>
					</div>
				</button>
				<button
					on:click={async () => {
						const event = getEventByName('Bridge-O-Craft');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/bridge.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Bridge-O-Craft</h1>
							</div>
						</div>
					</div>
				</button>
			</section>
		</section>

		<!-- non technical events -->
		<section class="all-nontech-events">
			<section class="heading" id="non-tech">
				<a href="#check2" id="check2">Non-Technical Events</a>
			</section>
			<section class="non-tech-event non-tech-event-part1">
				<button
					on:click={async () => {
						const event = getEventById('vv-debate');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/youth.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>VV</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventById('ff-tournament');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img src="/events/icons/valorant1.png" alt="" style="height: 200px;" />
								<h1>FF</h1>
							</div>
						</div>
					</div>
				</button>
				<button
					on:click={async () => {
						const event = getEventByName('valorant');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img src="/events/icons/valorant1.png" alt="" style="height: 200px;" />
								<h1>Valorant</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventById('cc-tournament');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/respawn.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>CC</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventById('cricbash');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/cricbash.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>CB</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventById('jigyasa-outreach');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/jigyasa.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Jigyasa</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventByName('born-psychos');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/born.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Born-Psychos</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventByName('food-o-holic');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/salad.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Food-O-Holic</h1>
							</div>
						</div>
					</div>
				</button>
			</section>
		</section>
		<section class="all-workshop">
			<section class="heading" id="workshop"><a href="#check3" id="check3">Workshop</a></section>
			<section class="workshop workshop-part1">
				<button
					on:click={async () => {
						const event = getEventById('thelounge');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/lounge.jpg"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>Lounge</h1>
							</div>
						</div>
					</div>
				</button>

				<button
					on:click={async () => {
						const event = getEventByName('stargaze');
						if (event) {
							await goto(`/events?view=${event.id}`);
							openModal(EventInfoModal, { event });
						}
					}}
					><div class="maincontainer">
						<div class="thecard">
							<div class="thefront">
								<img
									src="/events/icons/stargazer1.png"
									alt=""
									style="height: 175px; margin-top: 15px; margin-bottom: 15px; "
								/>
								<h1>StarGaze</h1>
							</div>
						</div>
					</div></button
				>
			</section>
			<section class="workshop workshop-part2" />
		</section>
	</main>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

	body {
		/* background:url(${bg}); */
		background-size: cover;
		padding: 0;
		margin: 0;
	}

	main {
		width: 100%;
		height: 100%;
		backdrop-filter: blur(9px);
	}

	html {
		scroll-behavior: smooth;
	}

	.tech-event,
	.non-tech-event,
	.workshop {
		width: 90%;
		margin: auto;
		display: flex;
	}

	.tech-part1,
	.non-tech-event-part1,
	.workshop-part1 {
		justify-content: space-evenly;
		gap: 10px;
		flex-wrap: wrap;
		margin-top: 25px;
	}
	.tech-part2,
	.non-tech-event-part2,
	.workshop-part2 {
		width: 60%;
		justify-content: space-around;
		gap: 10px;
		margin-top: 30px;
		flex-wrap: wrap;
	}
	.heading {
		text-align: center;
		margin: 20px;
		margin-bottom: 80px;
		padding: 30px 30px;
		font-size: 45px;
		font-family: 'Chakra Petch', Verdana, Geneva, Tahoma, sans-serif;
		color: white;
		transition: all 1s linear;
		text-shadow: 0px 0px 10px rgb(255, 0, 0);
	}

	.main-event {
		width: 90%;
		margin: auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 50px;
		font-family: 'Chakra Petch', Verdana, Geneva, Tahoma, sans-serif;
		padding: 20px;
		margin-bottom: 50px;
	}
	/* #tech,#non-tech,#workshop{
  border: 2px solid rgba(255, 255, 255, 0.512);
  border-radius: 10px;  
} */
	.tech-event-main,
	.non-tech-event-main,
	.workshop-event-main {
		height: 380px;
		width: 300px;
		border: white;
		border: 10px solid rgba(255, 255, 255, 0.512);
		border-radius: 10px;
		/* background-color: #535353; */
	}

	.main-event img {
		height: 300px;
	}

	a {
		text-decoration: none;
		color: white;
		text-shadow: 0px 0px 10px rgb(255, 0, 0);
	}

	.all-tech-events,
	.all-nontech-events,
	.all-workshop {
		padding-top: 50px;
		padding-bottom: 50px;
		margin-top: 100px;
	}

	.all-workshop {
		padding-bottom: 100px;
	}

	.all-event {
		border-radius: 20px;
		backdrop-filter: blur(10px);
		padding-top: 100px;
		padding-bottom: 50px;
		margin-bottom: 50px;
	}

	video {
		position: fixed;
		width: 100%;
		height: 100%;
		scale: 1.5;
		object-fit: cover;
		z-index: -1;
	}
	.maincontainer {
		width: 270px;
		height: 260px;
		margin-top: 10px;
		background: none;
	}

	.thecard {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		transform-style: preserve-3d;
		border-radius: 10px;
		border-radius: 20px;
		transition: all 0.8s linear;
		text-align: center;
	}

	/* .thecard:hover{
transform: rotateY(180deg);
} */

	.thefront {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		backface-visibility: hidden;
		overflow: hidden;
		border: 2px solid rgba(255, 255, 255, 0.512);
		color: #ffffff;
		letter-spacing: 2px;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.theback {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		backface-visibility: hidden;
		overflow: hidden;
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.685);
		text-align: center;
		transform: rotateY(180deg);
		backdrop-filter: blur(10px);
	}

	.thefront h1 {
		font-family: 'Playfair Display', sans-serif;
		margin-top: -10px;
		font-weight: 500;
		font-size: 20px;
		text-align: center;
	}

	.theback p {
		font-family: 'Poppins', Verdana, Geneva, Tahoma, sans-serif;
		padding: 10px;
		font-weight: normal;
		font-size: 12px;
		text-align: center;
	}
	.thefront img {
		margin-bottom: 5px;
	}
	.theback button {
		padding: 10px;
		width: 100px;
		color: white;
		background: transparent;
		border: 1px solid white;
	}
	.glow {
		padding: 10px 40px;
		border: none;
		outline: none;
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
		border: 2px solid #fff;
		backdrop-filter: blur(1000px);
	}
	.glow::after {
		content: '';
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		border-radius: 10px;
	}

	@keyframes glowing {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	/* hover */
	.glow:hover::before {
		opacity: 1;
	}

	.glow:active {
		color: #000;
		font-weight: bold;
	}
</style>
