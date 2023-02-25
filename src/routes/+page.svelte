<script lang="ts">
	let login: { username: string; password: string } = {
		username: '',
		password: ''
	};

	function onSubmit() {
		console.log(login);
	}
</script>

<h1>Login</h1>

<p>Bem vindo, informe o seu user e senha</p>

<form on:submit={onSubmit}>
	<input type="text" bind:value={login.username} />
	<input type="password" bind:value={login.password} />
	<button type="submit">Entrar</button>
</form>
