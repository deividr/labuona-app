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

<div class="h-screen flex justify-center items-center bg-gradient-to-r from-red-500 to-green-500">
	<div
		class="w-96 h-fit p-10 rounded-lg col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-slate-50 shadow-sm"
	>
		<div class="w-64 drop-shadow-lg -mt-52">
			<img src="/assets/images/logo.png" alt="Logo" />
		</div>
		<h1
			class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-green-500 p-1 mb-8"
		>
			Login
		</h1>

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
</div>
