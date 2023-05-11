<template>
	<a
		:href="link.href"
		class="link"
		>{{ link.name }}</a
	>
</template>

<script setup>
const props = defineProps({
	link: Object,
});
</script>

<style scoped>
.link {
	text-decoration: none;
	color: #0a143a;
	font-size: 14px;
	line-height: 16px;
}
</style>
