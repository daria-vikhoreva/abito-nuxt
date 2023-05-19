<template>
	<div class="service">
		<div class="service__img">
			<DeliveryImg />
			<div class="service__title">Доставка</div>
			<div class="service__descr">
				Проверка при получении и возможность бесплатно вернуть товар
			</div>
		</div>
	</div>
</template>

<script setup>
import DeliveryImg from '~/assets/delivery.svg';
</script>

<style scoped>
.service__title {
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
}
</style>
