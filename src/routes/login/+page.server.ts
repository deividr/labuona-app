import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request }: any) => {
		console.log('veio para o servidor');
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		cookies.set('username', JSON.stringify(data.get('username')));

		if (password !== 'password') {
			return fail(400, { password, username, message: 'Senha inválida' });
		}

		if (username !== 'admin') {
			return fail(400, { username, password, message: 'Usuário inválido' });
		}
	}
};
