import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
import axios from '@/api/axios';


export const useUserStore = defineStore('user', () => {
	const user = reactive({
		id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		avatar: null,
		reviews: [],
		rating: 0,
		personType: '',
		accessToken: '',
	});

	const loading = ref(false);
	const error: any = ref(null);
	const isAuth = ref(false);

	interface IUser {
		username: string;
		password: string;
	}

	const postDataLogin = async (data: IUser) => {
		try {
			const body = {
				username: data.username,
				password: data.password,
			};
			loading.value = true;
			isAuth.value = false;
			const result = await axios.post('login', body);
			localStorage.setItem('user-token', result.data.accessToken);

			user.id = result.data.id;
			user.username = result.data.username;
			user.email = result.data.email;
			user.firstName = result.data.firstName;
			user.lastName = result.data.lastName;
			user.avatar = result.data.avatar;
			user.reviews = result.data.reviews;
			user.rating = result.data.rating;
			user.personType = result.data.personType;
			user.accessToken = result.data.accessToken;
			isAuth.value = true;
		} catch (err) {
			console.log((err as AxiosError).response?.data);
			error.value = err;
		} finally {
			loading.value = false;
		}
	};

	return { user, isAuth, loading, error, postDataLogin };
});
