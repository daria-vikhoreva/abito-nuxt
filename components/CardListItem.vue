<template>
	<div class="item">
		<div class="item__img">
			<img
				src="~/assets/item.jpg"
				alt="img"
			/>
		</div>
		<div class="item__title">Заголовок карточки</div>
		<div class="item__price">10 000 P</div>
		<div class="item__info">
			<div class="item__location">Локация</div>
			<div class="item__date">Дата публикации</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
	max-width: 264px;
	width: 100%;
}
.item__title {
	margin-top: 12px;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #256eeb;
}
.item__price {
	margin-top: 5px;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
}
.item__info {
	margin-top: 10px;
	font-size: 14px;
	line-height: 16px;
	color: #c4c4c4;
}
</style>
