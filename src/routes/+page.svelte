<script lang="ts">
	import Button from '$components/base/Button.svelte';
	import InputForm from '$components/composed/InputForm.svelte';

	let login: { username: string; password: string } = {
		username: '',
		password: ''
	};

	function onSubmit() {
		console.log(login);
	}
</script>

<div class="grid grid-cols-4">
	<div class="p-10 col-span-2 md:col-span-1 flex flex-col justify-center items-center space-y-10">
		<h1 class="text-6xl font-bold text-gray-900">Login</h1>

		<form on:submit={onSubmit} class="w-full">
			<div class="flex flex-col space-y-5">
				<InputForm
					bind:value={login.username}
					id="user"
					placeholder="Digite o seu usuário"
					label="Usuário"
				/>
				<InputForm
					type="password"
					bind:value={login.password}
					id="senha"
					placeholder="Digite sua senha"
					label="Senha"
				/>
				<Button text="Entrar" fullWidth />
			</div>
		</form>
	</div>
	<div
		class="bg-[url('/assets/images/massas-frescas.jpg')] bg-cover bg-center h-screen col-span-2 md:col-span-3"
	/>
</div>
