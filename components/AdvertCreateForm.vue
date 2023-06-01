<template>
	<div class="wrapper">
		<h2>Создать объявление</h2>

		<form
			@submit.prevent="postDataAdvert"
			class="auth__form"
		>
			<UiInput
				text="Заголовок объявления"
				v-model="advert.title"
			/>

			<UiInput
				text="Описание объявления"
				v-model="advert.description"
			/>

			<UiInput
				text="Цена"
				v-model="advert.price"
			/>

			<UiInput
				text="Местоположение"
				v-model="advert.location"
			/>

			<UiInput
				text="Ссылки на фотографии"
				v-model="advert.photos[0]"
			/>

			<UiButton
				type="submit"
				text="Создать объявление"
				size="small"
			/>
		</form>
	</div>
</template>

<script setup>
import axios from 'axios';

const advert = reactive({
	title: '',
	description: '',
	price: '',
	location: '',
	photos: [],
});

const postDataAdvert = async () => {
	try {
		const body = {
			title: advert.title,
			description: advert.description,
			price: advert.price,
			location: advert.location,
			photos: advert.photos,
		};
		const result = await axios.post('http://45.132.19.237/adverts', body);
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
