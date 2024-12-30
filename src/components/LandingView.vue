<script setup lang="ts">
import astroLogo from "../assets/astro.svg";
</script>

<template>
	<div class="min-h-screen font-sans">
		<main
			class="container mx-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col items-center justify-center gap-8 p-4">
				<section class="text-center space-y-6">
					<img
						:src="astroLogo.src"
						width="115"
						height="48"
						alt="Astro Homepage"
						class="mx-auto" />
					<div class="space-y-4">
						<h1 class="text-3xl font-medium">
							A simple example of using Astro with Vue and React.
						</h1>
						<p class="text-lg text-gray-500">
							Click the buttons below to see the count increment.
						</p>
					</div>
				</section>
				<slot />
			</div>
		</main>
	</div>
</template>
