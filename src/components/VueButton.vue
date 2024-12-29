<script setup>
import { useStore } from "@nanostores/vue";
import { count } from "../stores/count.ts";

const $count = useStore(count);
</script>

<template>
	<button
		@click="() => count.set($count - 1)"
		class="px-6 py-3 text-base font-medium text-white bg-button-gradient rounded-lg shadow-sm hover:bg-button-gradient-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 ease-in-out hover:shadow-lg active:shadow-sm mx-2">
		Vue Decrease Counter Button
	</button>
</template>
