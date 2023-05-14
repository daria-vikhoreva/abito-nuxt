<template>
	<button
		class="button"
		:class="[size, color]"
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
	color?: 'blue' | 'sea-blue';
}

withDefaults(defineProps<Props>(), {
	size: 'large',
	color: 'blue',
});
</script>

<style scoped>
.button {
	border-radius: 5px;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
	border: 0;
}

.blue {
	background: #256eeb;
}

.sea-blue {
	background: #14b4be;
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
