<template>
	<div class="services-list">
		<h2 class="services-list__title">Сервисы и услуги</h2>
		<div class="services-list__wrapper">
			<ServicesListItem />
			<ServicesListItem />
			<ServicesListItem />
		</div>
	</div>
</template>

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
