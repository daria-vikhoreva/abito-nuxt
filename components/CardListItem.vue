<template>
	<div class="item">
		<img
			v-if="card.photo"
			:src="card.photo"
			:alt="card.title"
			class="item__img"
		/>
		<img
			v-else
			src="~/assets/item.jpg"
			:alt="card.title"
			class="item__img"
		/>
		<div class="item__wrapper">
			<div class="item__title">{{ card.title }}</div>
			<UiLike
				class="item__like"
				:active="isLiked"
				@click="clickLike"
			/>
		</div>
		<div class="item__price">
			{{ card.price ? `${getPrice(card.price)} ₽` : 'Цена не указана' }}
		</div>
		<div class="item__info">
			<div class="item__location">
				{{ card.location || 'Локация не указана' }}
			</div>
			<div class="item__date">{{ getDate(card.date) }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ICard {
	date: string;
	id: string;
	location: string;
	photo: string;
	price: number;
	title: string;
}

interface Props {
	card: ICard;
}

defineProps<Props>();

const isLiked = ref(false);
const clickLike = () => {
	isLiked.value = !isLiked.value;
};

const getDate = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	return new Date(Date.parse(date)).toLocaleString('ru', options);
};

const getPrice = (value: number) => {
	return value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
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

.item__img {
	max-width: 264px;
	width: 100%;
	max-height: 178px;
	height: 100%;
}
</style>
