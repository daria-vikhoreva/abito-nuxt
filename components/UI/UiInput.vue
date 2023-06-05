<template>
	<input
		:type="type"
		class="input"
		:class="size"
		:placeholder="$t(text)"
		:value="modelValue"
		@input="
			$emit('update:modelValue', ($event.target as HTMLInputElement).value)
		"
	/>
</template>

<script setup lang="ts">
interface Props {
	text: string;
	size?: 'small' | 'medium';
	type?: string;
	modelValue: string;
}

withDefaults(defineProps<Props>(), {
	size: 'small',
	type: 'text',
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.input {
	background: #ffffff;
	border-radius: 5px;
	width: 100%;
}

.small {
	padding: 12px 24px;
	border: 2px solid #256eeb;
}

.medium {
	border: 3px solid #256eeb;
	padding: 14px 21px;
}
</style>
