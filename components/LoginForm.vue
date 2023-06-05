<template>
	<div class="wrapper">
		<h2>{{ $t('Вход в аккаунт') }}</h2>

		<form
			@submit.prevent="postDataLogin"
			class="auth__form"
		>
			<UiInput
				:text="$t('Имя пользователя')"
				id="username"
				v-model="user.username"
			/>

			<UiInput
				type="password"
				:text="$t('Пароль')"
				id="password"
				v-model="user.password"
			/>

			<UiButton
				type="submit"
				:text="$t('Войти')"
				size="small"
			/>
		</form>

		<h3 class="auth__info">
			{{ $t('Нет аккаунта?') }}
			<NuxtLink
				to="/register"
				class="auth__link"
				>{{ $t('Зарегистрировать новый аккаунт') }}</NuxtLink
			>
		</h3>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
import { useRouter } from 'vue-router';

const user = reactive({
	username: '',
	password: '',
});

const router = useRouter();
const userStore = useUserStore();
const isAuth = computed(() => userStore.isAuth);

const postDataLogin = async () => {
	await userStore.postDataLogin(user);
	if (isAuth) {
		router.push('/');
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
