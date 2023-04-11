<script lang="ts">
	import { z } from 'zod';
	import { Button } from '$lib/components/base/Button';
	import { InputForm } from '$lib/components/composed/InputForm';
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	const schema = z.object({
		username: z.string().min(3, { message: 'Deve ter mais de 3 caracteres' }),
		password: z.string().min(3, { message: 'Deve ter mais de 3 caracteres' })
	});

	let errorMessages: z.infer<typeof schema> = {
		username: '',
		password: ''
	};

	export let form: ActionData;

	async function handleSubmit({ action, data }: { action: URL; data: FormData }) {
		const resultValidate = await schema.safeParseAsync(Object.fromEntries(data.entries()));

		if (!resultValidate.success) {
			errorMessages = {
				username: resultValidate.error.flatten().fieldErrors.username?.[0] ?? '',
				password: resultValidate.error.flatten().fieldErrors.password?.[0] ?? ''
			};

			return;
		}

		errorMessages = {
			username: '',
			password: ''
		};

		const response = await fetch(action, {
			method: 'POST',
			body: data
		});
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

		<form method="POST" class="w-full" on:submit|preventDefault use:enhance={handleSubmit}>
			<div class="flex flex-col space-y-5">
				<InputForm
					name="username"
					value={form?.username}
					id="user"
					placeholder="Digite o seu usuário"
					label="Usuário"
					errorMessage={errorMessages.username}
				/>
				<InputForm
					name="password"
					type="password"
					value={form?.password}
					id="senha"
					placeholder="Digite sua senha"
					label="Senha"
					errorMessage={errorMessages.password}
				/>
				<Button text="Entrar" fullWidth />
			</div>
		</form>
	</div>
</div>
