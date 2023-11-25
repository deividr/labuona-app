import { API_URL } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	if (cookies.get('token')) {
		throw redirect(303, '/');
	}
};

export const actions = {
	default: async ({ cookies, request, fetch }: any) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		const response = await fetch(
			`${API_URL}/auth/login?username=${username}&password=${password}`,
			{
				method: 'GET'
			}
		);

		if (response.ok) {
			const { token } = await response.json();
			cookies.set('token', token);
			throw redirect(303, '/');
		}

		return fail(400, { username, password: '', error: true });
	}
};
