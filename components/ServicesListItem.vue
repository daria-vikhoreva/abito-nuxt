<template>
	<div class="service">
		<img
			:src="service.icon"
			alt="icon"
			class="service__img"
		/>
		<div class="service__title">{{ service.title }}</div>
		<div class="service__descr">
			{{ service.description }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { IService } from '~/types/services';

interface Props {
	service: IService;
}

defineProps<Props>();
</script>

<style scoped>
.service__img {
	width: 34px;
}
.service__title {
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
}
</style>
