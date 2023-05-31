<template>
	<div class="loader">
		<IconLoader class="loader__icon" />
	</div>
</template>

<script setup lang="ts">
import IconLoader from '~/assets/loader.svg';
</script>

<style scoped>
@keyframes loading {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.loader__icon {
	animation: 1s linear infinite loading;
}

.loader {
	width: 100%;
	display: flex;
	justify-content: center;
}
</style>
