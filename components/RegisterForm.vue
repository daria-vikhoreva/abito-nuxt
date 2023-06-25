<template>
	<div class="wrapper">
		<h2>{{ $t('Регистрация на сайте') }}</h2>
		<form
			class="auth__form"
			@submit.prevent="postDataRegister"
		>
			<UiInput
				:text="$t('Имя')"
				name="firstName"
				v-model="user.firstName"
			/>
			<UiInput
				:text="$t('Фамилия')"
				name="lastName"
				v-model="user.lastName"
			/>
			<UiInput
				type="email"
				text="Email"
				name="email"
				v-model="user.email"
			/>
			<UiInput
				:text="$t('Имя пользователя (логин)')"
				name="username"
				v-model="user.username"
			/>
			<UiInput
				type="password"
				:text="$t('Пароль')"
				name="password"
				v-model="user.password"
			/>

			<label for="personType">{{ $t('Выберите ваш статус') }}</label>
			<select
				class="select"
				name="personType"
				v-model="user.personType"
			>
				<option
					value="individual"
					class="select__option"
					selected
				>
					{{ $t('Частное лицо') }}
				</option>
				<option
					value="corporate"
					class="select__option"
				>
					{{ $t('Компания') }}
				</option>
			</select>

			<UiInput
				:text="$t('Ссылка на фотографию профиля')"
				name="photo"
				v-model="user.photoLink"
			/>

			<UiButton
				type="submit"
				:text="$t('Зарегистрироваться')"
				size="small"
			/>
		</form>

		<h3 class="auth__info">
			{{ $t('Есть аккаунт?') }}
			<NuxtLink
				to="/login"
				class="auth__link"
				>{{ $t('Зайти в существующий аккаунт') }}</NuxtLink
			>
		</h3>
	</div>
</template>

<script setup>
import axios from '@/api/axios';
import { useRouter } from 'vue-router';

const user = reactive({
	username: '',
	password: '',
	email: '',
	firstName: '',
	lastName: '',
	personType: 'individual',
	photoLink: '',
});

const router = useRouter();

const postDataRegister = async () => {
	const body = {
		username: user.username,
		password: user.password,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
		personType: user.personType,
		photoLink: user.photoLink,
	};

	const result = await axios.post('register', body);

	router.push('/login');

	console.log(result.data);
};
</script>

<style scoped>
.select {
	padding: 12px 24px;
}

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

.select {
	padding: 12px 24px;
	border: 2px solid #256eeb;
	border-radius: 5px;
	background-color: #fff;
}
</style>
