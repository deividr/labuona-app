<script lang="ts">
	import { z, type SafeParseReturnType } from 'zod';
	import { Button } from '$lib/components/base/Button';
	import { InputForm } from '$lib/components/composed/InputForm';
	import { deserialize } from '$app/forms';

	import type { ActionData } from './$types';
	import type { ActionResult } from '@sveltejs/kit';

	const schema = z.object({
		username: z.string().min(3, { message: 'Deve ter mais de 3 caracteres' }),
		password: z.string().min(3, { message: 'Deve ter mais de 3 caracteres' })
	});

	export let form: ActionData;

	async function handleSubmit() {
		const data = new FormData(this);

		const login = {
			username: 'D',
			password: '3'
		};

		const resultValidate = await schema.safeParseAsync(login);
		console.log(resultValidate.error.issues);

		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		});

		const result: ActionResult = deserialize(await response.text());
	}
</script>

<div class="h-screen flex justify-center items-center bg-gradient-to-r from-red-500 to-green-500">
	<div
		class="w-[400px] h-fit p-10 rounded-lg col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-slate-50 shadow-sm"
	>
		<div class="w-64 drop-shadow-lg -mt-52">
			<img src="/assets/images/logo.png" alt="Logo" />
		</div>
		<h1
			class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-green-500 p-1 mb-8"
		>
			Login
		</h1>

		<form method="POST" class="w-full" on:submit|preventDefault={handleSubmit}>
			<div class="flex flex-col space-y-5">
				<InputForm
					name="username"
					value={form?.username}
					id="user"
					placeholder="Digite o seu usuário"
					label="Usuário"
				/>
				<InputForm
					name="password"
					type="password"
					value={form?.password}
					id="senha"
					placeholder="Digite sua senha"
					label="Senha"
				/>
				<Button text="Entrar" fullWidth />
			</div>
		</form>
	</div>
</div>
