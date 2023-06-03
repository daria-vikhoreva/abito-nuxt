import { useUserStore } from '~/stores/user';

export default defineNuxtRouteMiddleware((to, from) => {
	const userStore = useUserStore();
	const isAuth = computed(() => userStore.isAuth);
	if (!isAuth.value) {
		return navigateTo('/login');
	}
});
