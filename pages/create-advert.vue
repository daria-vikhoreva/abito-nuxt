<template>
	<div>
		<AdvertCreateForm />
	</div>
</template>

<script setup>
definePageMeta({
	middleware: ['auth'],
});
</script>
