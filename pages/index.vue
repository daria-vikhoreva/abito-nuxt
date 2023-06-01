<template>
	<div class="main-page">
		<div class="main-page__wrapper">
			<section class="main-page__recommendation recommendation">
				<h1 class="recommendation__title">Рекомендации для вас</h1>
				<CardList
					class="recommendation__list"
					:cards="cards"
					:loading="loading"
				/>
			</section>
			<aside class="aside">
				<ServicesList :services="services" />
			</aside>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';

const loading = ref(true);

const cards = ref([]);

const services = ref([]);

axios.get('http://45.132.19.237/adverts').then((response) => {
	loading.value = false;
	cards.value = response.data;
});

axios.get('http://45.132.19.237/services').then((response) => {
	services.value = response.data;
});
</script>

<style scoped>
.main-page__wrapper {
	display: flex;
	justify-content: space-between;
}
.recommendation__list {
	margin-top: 25px;
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
}
.recommendation__title {
	font-size: 24px;
	margin: 0;
}

.main-page__recommendation {
	width: 100%;
}

.aside {
	max-width: 350px;
}

@media (max-width: 1170px) {
	.main-page {
		padding: 20px 20px;
	}
	.aside {
		max-width: 250px;
		width: 100%;
	}
	.main-page__recommendation {
		max-width: max-content;
	}
}

@media (max-width: 875px) {
	.main-page {
		padding: 15px 15px;
	}
	.aside {
		max-width: 210px;
		width: 100%;
	}
	.main-page__recommendation {
		max-width: max-content;
	}
}

@media (max-width: 815px) {
	.main-page__wrapper {
		margin-top: 22px;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
	}
	.main-page__recommendation {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.recommendation__list {
		justify-content: center;
	}
	.aside {
		max-width: 300px;
		width: 100%;
	}
}
</style>
