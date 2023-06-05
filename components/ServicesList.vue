<template>
	<div class="services-list">
		<h2 class="services-list__title">{{ $t('Сервисы и услуги') }}</h2>
		<div class="services-list__wrapper">
			<ServicesListItem
				v-for="service in services"
				:key="service.id"
				:service="service"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IServices } from '~/types/services';

interface Props {
	services: IServices;
}

defineProps<Props>();
</script>

<style scoped>
.services-list__wrapper {
	margin-top: 29px;
	display: flex;
	flex-direction: column;
	gap: 25px;
}
.services-list__title {
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
}
</style>
