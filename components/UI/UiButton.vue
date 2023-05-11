<template>
	<button class="button">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
	text: String,
});
</script>

<style scoped>
.button {
	padding: 10px 15px;
	background: #256eeb;
	border-radius: 5px;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
}
</style>
