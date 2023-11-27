import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default({ cookies }) {
		cookies.delete('token');
	}
};
