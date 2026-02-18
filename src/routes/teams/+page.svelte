<script>
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	// Import AOS styles
	// @ts-ignore
	import AOS from 'aos';
	import { teams } from '$lib/team';
	// Import AOS library

	import bg from '$lib/assets/backgrounds/register-1.jpg';
	import { AdditiveAnimationBlendMode } from 'three';
	onMount(() => {
		AOS.init({
			duration: 3500,
			once: false
		});
	});
</script>

<div class="bg" style:background-image="url({bg})" />
<div
	class="bg-cover bg-black/10 !scroll-smooth flex flex-col justify-center items-center font-sans"
>
	<div class="backdrop-blur-sm bg-black/30">
		{#each teams as team}
			<div class="w-full flex flex-col gap-3 p-10 gap-20">
				<div class="text-4xl md:text-6xl w-full text-center text-white py-5">{team.name}</div>
				<div class="w-full flex flex-wrap gap-4 p-4 justify-center items-center">
					{#each team.members as member}
						<div
							data-aos="fade-up"
							data-aos-duration="800"
							class="flex w-[190px] h-full bg-gray-900 flex-col items-center justify-center hover:shadow-[0_0_28px_purple] transition-3s rounded-2xl text-white"
						>
							<div class="card-wrapper w-[190px] h-full">
								<div class="card-content flex items-center justify-center text-xs">
									<div
										class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl p-4"
									>
										<div
											class="imagecir relative w-[155px] h-[155px] rounded-full overflow-hidden mx-auto"
										>
											<img
												src={member.photoUrl}
												alt="Person"
												class="w-[150px] h-[150px] border-4 border-gray-700 rounded-full"
											/>
										</div>
										<p class="name text-white text-xl text-center mt-3">{member.name}</p>
										<div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2" />
										<p class="post text-gray-400 text-sm mt-2">{member.postContent}</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.bg {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
