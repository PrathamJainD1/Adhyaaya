<script>
</script>

<video src="/events/sample.mp4" autoplay loop muted class="blur-sm"></video>

`<svelte:head>
	<title>Contact Info | Adhyaaya'26</title>
</svelte:head>


<div class="compalinace-content">
	<div class="content-container outer-box">
		<p class="content-head">Contact us</p>
		<div class="content-seprater" />
		<p class="updated-date">Last updated on Feb 11th 2025</p>
		<p class="content-text">You may contact us using the information below :</p>
		<p class="content-text">
			<li class="list-item">Merchant Legal entity name : Adhyaaya'26</li>
			<li class="list-item">Registered Address : Government College of Engineering, Sector-27, Mihan Rehabilitation Colony,Khapri, Nagpur - 441108</li>
		 <li class="list-item">Telephone No : 8793150182</li>	
			<li class="list-item">E-Mail ID : adhyaaya@gcoen.ac.in</li>
		</p>

		<p class="content-text">Please Note Following : 
			<li class="list-item">We do not entertain any refunds or cancellations.</li>
			<li class="list-item">Shipping is not applicable for this business.</li>
		</p>
	</div>
</div>

<style lang="postcss">
	.outer-box{
		padding: 80px;
		border: 1px solid white;
		border-radius: 50px
	}
	.compalinace-content {
		@apply py-40 px-6;
	}
	.content-container {
		@apply mx-auto max-w-4xl;
	}
	.content-head {
		@apply text-4xl;
	}
	.content-seprater {
		width: 195px;
		height: 5px;
		background-color: #213554;
		margin-top: 16px;
	}
	.content-text{
		margin: 20px;
	}
	.updated-date {
		@apply text-sm text-gray-100 mt-4;
	}
	[class*='content-'] {
		font-family: 'Nunito', sans-serif;
	}
	.list-item{
		font-family: 'Nunito', sans-serif;
	}
	video{
position: fixed;
width: 100%;
height: 100%;
scale: 1.5;
object-fit: cover;
z-index: -1;
}
</style>
`
