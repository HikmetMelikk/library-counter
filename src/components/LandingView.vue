<script setup lang="ts">
import astroLogo from "../assets/astro.svg?url";
</script>

<template>
	<div class="min-h-screen font-sans">
		<main
			class="container mx-auto min-h-screen flex items-center justify-center">
			<div
				class="relative border-2 border-blue-400 rounded-lg p-8 w-full max-w-4xl">
				<span
					class="absolute -top-3 right-4 bg-white px-2 text-blue-500 font-semibold"
					>Vue</span
				>
				<div class="flex flex-col items-center justify-center gap-8">
					<section class="text-center space-y-6">
						<img
							:src="astroLogo"
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
			</div>
		</main>
	</div>
</template>
