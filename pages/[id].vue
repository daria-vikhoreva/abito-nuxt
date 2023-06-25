<template>
	<div class="detail-page">
		<UiLoader v-if="loading" />
		<div
			v-else
			class="wrapper"
		>
			<div class="detail-card">
				<div class="detail-card__left-col">
					<div class="detail-card__title">{{ data.title }}</div>
					<img
						:src="data.photos[0]"
						alt="kugoo"
						class="detail-card__img"
					/>

					<div class="detail-card__descr">
						{{ data.description }}
					</div>
				</div>

				<div class="detail-card__right-col">
					<div class="detail-card__price">{{ getPrice(data.price) }} ₽</div>
					<div class="detail-card__author author">
						<div class="author__info">
							<div class="author__name">
								{{ data.user.firstName }} {{ data.user.lastName }}
							</div>
							<div class="author__rating">
								<div
									v-for="n in 5"
									:key="n"
								>
									<StarIcon
										class="star"
										:style="`color: ${data.user.rating >= n ? 'red' : 'grey'};`"
									/>
								</div>

								<span>{{ data.user.reviews.length }} отзывов</span>
							</div>
							<div class="author__status">Добавить статус</div>
						</div>

						<div class="author__img">
							<img
								src="~/assets/author.png"
								alt="author"
							/>
						</div>
					</div>
					<UiButton
						text="Показать телефон"
						size="large"
					/>
					<UiButton
						text="Написать сообщение"
						size="large"
						color="sea-blue"
					/>
				</div>
			</div>

			<div class="aside">
				<AdsList :ads="ads" />
			</div>
		</div>
	</div>
</template>

<script setup>
import StarIcon from '~/assets/star.svg';
import { useRoute } from 'vue-router';
import axios from '@/api/axios';

definePageMeta({
	middleware: ['auth'],
});

const route = useRoute();
const data = ref({});
const loading = ref(true);
const ads = ref([]);

axios
	.get(`adverts/${route.params.id}`)
	.then((response) => {
		loading.value = false;
		data.value = response.data;
	});

axios.get('ads').then((response) => {
	ads.value = response.data;
});

const getPrice = (value) => {
	return value?.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
</script>

<style scoped>
.wrapper {
	display: flex;
	justify-content: space-between;
}
.detail-card {
	display: flex;
	width: 100%;
	gap: 30px;
}

.detail-card__left-col {
	max-width: 480px;
	width: 100%;
}

.detail-card__title,
.detail-card__price {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
}

.detail-card__img {
	margin-top: 25px;
	width: 100%;
}

.detail-card__descr {
	margin-top: 30px;
}

.detail-card__right-col {
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 260px;
}

.author {
	display: flex;
	justify-content: space-between;
}

.author__info {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
.author__name {
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
}

.author__rating {
	display: flex;
	gap: 10px;
}

.author__rating span {
	font-size: 13px;
	line-height: 16px;
	opacity: 0.5;
}

.author__status {
	font-size: 12px;
	line-height: 14px;
}

@media (max-width: 800px) {
	.detail-card__left-col {
		max-width: 420px;
	}
	.detail-card__img img {
		width: 100%;
	}
}

@media (max-width: 500px) {
	.detail-card {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
	}
	.detail-card__left-col {
		max-width: 400px;
	}
}

@media (max-width: 350px) {
	.detail-card__title {
		font-size: 18px;
		line-height: 21px;
	}
	.detail-card__descr {
		font-size: 14px;
		line-height: 140%;
	}
}

.star {
	display: flex;
	height: 16px;
	width: 16px;
}
</style>
