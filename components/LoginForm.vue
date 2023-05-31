<template>
	<div class="wrapper">
		<h2>Вход в аккаунт</h2>

		<form
			@submit.prevent="postDataLogin"
			class="auth__form"
		>
			<UiInput
				text="Имя пользователя"
				id="username"
				v-model="user.username"
			/>

			<UiInput
				type="password"
				text="Пароль"
				id="password"
				v-model="user.password"
			/>

			<UiButton
				type="submit"
				text="Войти"
				size="small"
			/>
		</form>

		<h3 class="auth__info">
			Нет аккаунта?
			<NuxtLink
				to="/register"
				class="auth__link"
				>Зарегистрировать новый аккаунт</NuxtLink
			>
		</h3>
	</div>
</template>

<script setup>
import axios from 'axios';

const user = reactive({
	username: '',
	password: '',
});

const postDataLogin = async () => {
	try {
		const body = {
			username: user.username,
			password: user.password,
		};
		const result = await axios.post('http://45.132.19.237/login', body);
		localStorage.setItem('user-token', result.data.accessToken);
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
	max-width: 440px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.auth__info {
	margin-top: 24px;
}

.auth__link {
	margin-left: 4px;
	color: #256eeb;
}
</style>
