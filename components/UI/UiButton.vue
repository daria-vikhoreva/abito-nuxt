<template>
	<button
		class="button"
		:class="size"
	>
		<slot name="left" />
		{{ text }}
		<slot name="right" />
	</button>
</template>

<script setup lang="ts">
interface Props {
	text: string;
	size?: 'small' | 'medium' | 'large';
}

withDefaults(defineProps<Props>(), {
	size: 'large',
});
</script>

<style scoped>
.button {
	background: #256eeb;
	border-radius: 5px;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
	border: 0;
}

.small {
	padding: 10px 15px;
}

.medium {
	padding: 16px 20px 17px 20px;
}

.large {
	padding: 19px 62px;
}
</style>
