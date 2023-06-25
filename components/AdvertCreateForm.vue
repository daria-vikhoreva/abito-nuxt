<template>
	<div class="wrapper">
		<h2>{{ $t('Создать объявление') }}</h2>

		<form
			@submit.prevent="postDataAdvert"
			class="auth__form"
		>
			<UiInput
				:text="$t('Заголовок объявления')"
				v-model="advert.title"
			/>

			<UiInput
				:text="$t('Описание объявления')"
				v-model="advert.description"
			/>

			<UiInput
				:text="$t('Цена')"
				v-model="advert.price"
			/>

			<UiInput
				:text="$t('Местоположение')"
				v-model="advert.location"
			/>

			<UiInput
				:text="$t('Ссылки на фотографии')"
				v-model="advert.photos[0]"
			/>

			<UiButton
				type="submit"
				:text="$t('Создать')"
				size="small"
			/>
		</form>
	</div>
</template>

<script setup>
import axios from '@/api/axios';

const advert = reactive({
	title: '',
	description: '',
	price: '',
	location: '',
	photos: [''],
});

const postDataAdvert = async () => {
	try {
		const body = {
			accessToken: localStorage.getItem('user-token'),
			title: advert.title,
			description: advert.description,
			price: advert.price,
			location: advert.location,
			photos: advert.photos,
		};
		const result = await axios.post('adverts', body);
	} catch (error) {
		console.log(error.response.data);
	}
};
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.auth__form {
	margin-top: 24px;
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.form {
	width: 100%;
}
</style>
