<template>
	<div class="like">
		<img
			v-if="active"
			src="~/assets/favorite_active.svg"
			alt="favorite-active"
		/>
		<img
			v-else
			src="~/assets/favorite_disabled.svg"
			alt="favorite-disabled"
		/>
	</div>
</template>

<script setup>
const Props = defineProps({
	active: Boolean,
});
</script>

<style scoped>
.like {
	cursor: pointer;
}
</style>
