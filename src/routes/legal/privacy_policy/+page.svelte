<script>
  import mp4Video from "/src/routes/events/sample.mp4"; // Correct path!
</script><svelte:head>
	<title>Privacy Policy | Adhyaaya'26</title>
</svelte:head>
<video src={mp4Video} autoplay loop muted class="blur-sm"></video>

<!-- <div class="container mx-auto text-2xl pt-32 px-4">Privacy Policy</div>
<div class="container mx-auto pt-10 px-4 nunu">
	You have given Adhyaaya, the permission to do the following:<br />
	1. By using our website, you hereby consent to our privacy policy and agree to its terms.<br />
	2. Store and process the participants data (such as E-mail ID, photograph, contact number etc.) at
	each and every possible point for legitimate interests of Adhyaaya.<br />
	3. Like any other website, Adhyaaya’22 uses ‘cookies’. These cookies are used to store information
	including visitors’ preferences, and the pages on the website that the visitor accessed or visited.
	The information is used to optimize the users’ experience by customizing our web page content based
	on visitors’ browser type and/or other information.<br />
	4. Adhyaaya has no access to control over the cookies that are used by the third-party advertisers.<br
	/>
	5. Adhyaaya will retain your personal information as long as it is necessary to do so for our legal
	obligations, resolve disputes, and enforce our policies.<br />
	6. To send you promotional emails at any point of time within the working hours.<br />
	7. In case of any mishaps, disputes and third party issues Adhyaaya will not be responsible for the
	same.<br />
</div> -->

<div class="compalinace-content ">
	<div class="content-container prose nunu outer-box">
		<p class="content-head">Privacy Policy</p>
		<div class="content-seprater"/>
		<p class="updated-date">Last updated on 11th Feb 2025</p>
		<p class="content-text">
			This privacy policy sets out how Adhyaaya'26 uses and protects any information that you give
			Adhyaaya'26 when you use this website.
		</p>
		<p class="content-text">
			Adhyaaya'26 is committed to ensuring that your privacy is protected. Should we ask you to
			provide certain information by which you can be identified when using this website, and then
			you can be assured that it will only be used in accordance with this privacy statement.
		</p>
		<p class="content-text">
			Adhyaaya'26 may change this policy from time to time by updating this page. You should check
			this page from time to time to ensure that you are happy with any changes.
		</p>
		<p class="content-text"><strong>We may collect the following information:</strong></p>
		<ul class="unorder-list">
			<li class="list-item">
				<p class="content-text list-text">Name and Contact information </p>
			</li>
			<li class="list-item">
				<p class="content-text list-text">
					Demographic information
				</p>
			</li>
		</ul>
		<p class="content-text"><strong>What we do with the information we gather</strong></p>
		<p class="content-text">
			We require this information to understand your needs and provide you with a better service,
			and in particular for the following reasons:
		</p>
		<ul class="unorder-list">
			<li class="list-item">
				<p class="content-text list-text">Record keeping.</p>
			</li>
			<li class="list-item">
				<p class="content-text list-text">
					to improve our products and services.
				</p>
			</li>
		</ul>
		<p class="content-text">
			We are committed to ensuring that your information is secure. In order to prevent unauthorised
			access or disclosure we have put in suitable measures.
		</p>
		<p class="content-text"><strong>How we use cookies</strong></p>
		<p class="content-text">
			Cookies are small files placed on your computer that analyze web traffic and personalize your experience on websites.
		</p>
		<p class="content-text">
			We use traffic log cookies to identify which pages are being used. This helps us analyses data
			about webpage traffic and improve our website in order to tailor it to customer needs.
		</p>
		<p class="content-text"><strong>Controlling your personal information</strong></p>
		<p class="content-text">
			You may choose to restrict the collection or use of your personal information in the following
			ways:
		</p>
		<ul class="unorder-list">
			<!-- <li class="list-item">
				<p class="content-text list-text">
					whenever you are asked to fill in a form on the website, look for the box that you can
					click to indicate that you do not want the information to be used by anybody for direct
					marketing purposes
				</p>
			</li> -->
			<li class="list-item">
				<p class="content-text list-text">
					if you have previously agreed to us using your personal information for direct marketing
					purposes, you may change your mind at any time by writing to or emailing us at
					adhyaaya@gcoen.ac.in
				</p>
			</li>
		</ul>
		<p class="content-text">
			 We may use your personal information to
			send you promotional information about third parties which we think you may find interesting
			if you tell us that you wish this to happen.
		</p>
		<p class="content-text">
			If you believe that any information we are holding on you is incorrect or incomplete, please
			write to or email us as soon as possible, at the above address. We will promptly correct any
			information found to be incorrect.
		</p>
	</div>
</div>

<style lang="postcss">
	video{
position: fixed;
width: 100%;
height: 100%;
scale: 1.5;
object-fit: cover;
z-index: -1;
}

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
		width: 205px;
		height: 5px;
		background-color: #213554;
		margin-top: 16px;
	}
	.updated-date {
		@apply text-sm text-gray-500 mt-4;
	}
	[class*='content-'] {
		font-family: 'Nunito', sans-serif;
	}
	strong {
		font-family: 'Nunito', sans-serif;
	}
</style>
