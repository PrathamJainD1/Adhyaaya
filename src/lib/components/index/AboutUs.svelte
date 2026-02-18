<script>
	import logo from '$lib/assets/logo/adhyaaya26_logo.png';
	import gcoen from '$lib/assets/logo/gcoen-knockout-resize.webp';
	import { onMount } from 'svelte';
	onMount(() => {
		// import('lite-youtube-embed');
		import('lite-youtube-embed/src/lite-yt-embed.css');
	});
</script>

<div
	class="about-us-container md:w-5/6 flex flex-col items-center justify-evenly md:py-10 mx-auto px-2 bg-green-500"
>
	<div class="title h-1/6 pb-10">
		<span class="text-4xl lg:text-6xl text-white opacity-90">About Us</span>
	</div>
	<div class="content flex flex-col w-full h-4/6 gap-20" style="z-index:1">
		<div class="h-full w-full px-4 md:px-0 md:w-4/5 mx-auto flex flex-col items-center gap-7">
			<img loading="lazy" src={logo} class="h-28" height="112" width="202" alt="" />
			<p
				class="p-4 backdrop-blur-sm bg-black/50 rounded-2xl text-xl md:text-2xl nunu text-center border"
			>
				Adhyaaya is a premier technical festival, hosting a variety of events for students and
				professionals to showcase their talents in technology and the sciences. The annual
				symposium, organized by the Government College of Engineering in Nagpur, features lectures
				from renowned experts and attracts participants from across the region. Join us at Adhyaaya
				for a journey of innovation and creativity.
			</p>
			<a
				data-sveltekit-reload
				href="/teams"
				class="team-button bg-black/20 backdrop-blur-sm relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8"
				>Meet The Team <iconify-icon icon="mdi:arrow-right" /></a
			>
		</div>
		<div class="h-full w-full px-4 md:px-0 md:w-4/5 mx-auto flex flex-col items-center gap-7">
			<img loading="lazy" src={gcoen} class="h-28" height="112" width="355" alt="" />
			<p
				class="p-4 backdrop-blur-sm bg-black/50 rounded-2xl text-xl md:text-2xl nunu text-center border"
			>
				Government College of Engineering, Nagpur is a premier engineering institute established in
				2016, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and mentored by
				Visvesvaraya National Institute of Technology. The campus is situated at New Khapri, Nagpur,
				providing a top-notch engineering education to its students.
			</p>
			<a
				data-sveltekit-reload
				href="https://gcoen.ac.in/"
				target="_blank"
				rel="noreferrer"
				class="team-button font-bold bg-black/20 backdrop-blur-sm relative text-white text-3xl text-3xl border border-solid border-white rounded-lg hover:scale-110 hover:bg-white hover:text-black py-3 px-5 rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-4 mt-4"
				>Our College <iconify-icon icon="mdi:arrow-right" /></a
			>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center pt-10 z-10">
		<iframe
			width="500"
			height="500"
			src="https://www.youtube.com/embed/38e0mguWcQ8?si=J132oJFb_h7nwbl-"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		/>
	</div>

	<div
		class="gallery-button flex flex-col items-center justify-evenly text-justify pt-8"
		style="z-index:1"
	>
		<a
			data-sveltekit-reload
			href="/gallery"
			class="gallery-button bg-black/20 backdrop-blur-sm relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8"
		>
			Image Gallery <iconify-icon icon="mdi:arrow-right" />
		</a>
	</div>
</div>

<style>
	.team-button::before {
		content: '';
		z-index: -1;
	}
</style>
