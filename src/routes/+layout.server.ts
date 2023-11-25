import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
	const isLoginPage = url.pathname === '/login';

	if (!isLoginPage && !cookies.get('token')) {
		throw redirect(303, '/login');
	}
};
