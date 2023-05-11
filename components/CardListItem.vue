<template>
	<div class="item">
		<div class="item__img">
			<img
				src="~/assets/item.jpg"
				alt="img"
			/>
		</div>
		<div class="item__wrapper">
			<div class="item__title">Заголовок карточки</div>
			<UiLike
				class="item__like"
				:active="isLiked"
				@click="clickLike"
			/>
		</div>
		<div class="item__price">10 000 P</div>
		<div class="item__info">
			<div class="item__location">Локация</div>
			<div class="item__date">Дата публикации</div>
		</div>
	</div>
</template>

<script setup>
const isLiked = ref(false);
const clickLike = () => {
	isLiked.value = !isLiked.value;
};
</script>

<style scoped>
.item {
	max-width: 264px;
	width: 100%;
}
.item__wrapper {
	margin-top: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.item__title {
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #256eeb;
}
.item__like {
	display: flex;
	align-items: center;
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
